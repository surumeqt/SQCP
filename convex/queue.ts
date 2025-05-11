import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getNextQueueNumber = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    const userId = identity.subject;

    const existing = await ctx.db
      .query("queue")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    const now = Date.now();

    if (existing) {
      const isExpired = existing.expiresAt !== undefined && existing.expiresAt < now;
      const isInactive = existing.isActive === false;

      // Clean up old or inactive entries
      if (isExpired || isInactive) {
        await ctx.db.delete(existing._id);
      } else {
        return existing; // still valid
      }
    }

    // Create a new queue number
    const lastQueue = await ctx.db.query("queue").order("desc").first();
    const nextNumber = lastQueue ? lastQueue.number + 1 : 1;

    const expiresAt = now + 5 * 60 * 1000;

    const newEntryId = await ctx.db.insert("queue", {
      userId,
      number: nextNumber,
      expiresAt,
      isActive: true,
      createdAt: now,
    });

    return await ctx.db.get(newEntryId);
  },
});

export const getActiveQueueEntryForUser = query({
  handler: async ({ db, auth }) => {
    const identity = await auth.getUserIdentity();
    if (!identity) {
      return null;
    }

    const userId = identity.subject;
    const activeEntry = await db
      .query("queue")
      .filter((q) =>
        q.and(q.eq(q.field("userId"), userId), q.eq(q.field("isActive"), true))
      )
      .first();

    return activeEntry;
  },
});

export const deleteQueueEntry = mutation({
  args: { id: v.id("queue") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});