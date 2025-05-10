import { mutation, query } from "./_generated/server";

export const getNextQueueNumber = mutation(async ({ db, auth }) => {
  const identity = await auth.getUserIdentity();
  if (!identity) throw new Error("User not authenticated");

  const userId = identity.subject;

  const existingEntry = await db
    .query("queue")
    .withIndex("by_user", (q) => q.eq("userId", userId))
    .first();

  if (existingEntry && existingEntry.isActive) {
    return existingEntry.number;
  }

  const lastQueueEntry = await db
    .query("queue")
    .withIndex("by_number")
    .order("desc")
    .first();

  const nextQueueNumber = lastQueueEntry ? lastQueueEntry.number + 1 : 1;
  const now = Date.now();
  const expiresAt = now + 5 * 60 * 1000;
  await db.insert("queue", {
    number: nextQueueNumber,
    userId,
    createdAt: now,
    expiresAt,
    isActive: true,
  });

  return nextQueueNumber;
});

export const getOrCreateQueueEntryForUser = mutation(async ({ db, auth }) => {
  const identity = await auth.getUserIdentity();
  if (!identity) throw new Error("User not authenticated");

  const userId = identity.subject;

  let existingEntry = await db
    .query("queue")
    .withIndex("by_user", (q) => q.eq("userId", userId))
    .first();
  
  if (existingEntry) {
    if (!existingEntry.expiresAt) {
      const newExpiresAt = Date.now() + 5 * 60 * 1000;
      await db.patch(existingEntry._id, {
        expiresAt: newExpiresAt,
        isActive: true,
      });
      existingEntry = {
        ...existingEntry,
        expiresAt: newExpiresAt,
        isActive: true,
      };
    }
    return existingEntry;
  }

  const lastQueueEntry = await db
    .query("queue")
    .withIndex("by_number")
    .order("desc")
    .first();
  const nextNumber = lastQueueEntry ? lastQueueEntry.number + 1 : 1;
  const expiresAt = Date.now() + 5 * 60 * 1000;

  const id = await db.insert("queue", {
    number: nextNumber,
    userId,
    createdAt: Date.now(),
    expiresAt,
    isActive: true,
  });

  return {
    _id: id,
    number: nextNumber,
    userId,
    createdAt: Date.now(),
    expiresAt,
    isActive: true,
  };
});

export const terminateQueue = mutation(async ({ db }, { number }: { number: number }) => {
  const entry = await db
    .query("queue")
    .withIndex("by_number", (q) => q.eq("number", number))
    .first();

  if (!entry) throw new Error("Queue entry not found");

  await db.patch(entry._id, {
    isActive: false,
  });

  return true;
});

export const getActiveQueues = query(async ({ db }) => {
  return await db
    .query("queue")
    .filter((q) => q.eq(q.field("isActive"), true))
    .order("asc")
    .collect();
});

export const getQueueEntryByNumber = query(
  async ({ db }, { number }: { number: number }) => {
    const entry = await db
      .query("queue")
      .withIndex("by_number", (q) => q.eq("number", number))
      .first();

    if (!entry) throw new Error("Queue not found");

    return {
      _id: entry._id,
      number: entry.number,
      userId: entry.userId,
      createdAt: entry.createdAt,
      expiresAt: entry.expiresAt ?? null,
      isActive: entry.isActive ?? true,
    };
  }
);

export const getCurrentUserQueueEntry = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const queue = await ctx.db
      .query("queue")
      .filter((q) => q.eq(q.field("userId"), identity.subject))
      .order("desc")
      .take(1);

    return queue[0] ?? null;
  },
});
