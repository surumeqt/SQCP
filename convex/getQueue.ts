import { mutation, query } from "./_generated/server";

export const getCurrentQueue = query({
  args: {},
  handler: async ({ db }) => {
    const result = await db
      .query("queue")
      .withIndex("by_number")
      .order("asc")
      .collect();

    const activeQueue = result.find((entry) =>
      entry.isActive === undefined || entry.isActive === true
    );

    return activeQueue ?? null;
  },
});

export const proceedToNextQueue = mutation({
  args: {},
  handler: async ({ db }) => {
    const queue = await db
      .query("queue")
      .filter((q) => q.eq(q.field("isActive"), true))
      .order("asc")
      .take(1);

    if (queue.length === 0) return null;

    const current = queue[0];

    // Deactivate the current queue entry
    await db.patch(current._id, { isActive: false });

    // Delete the current queue entry
    await db.delete(current._id);

    // Find the next active entry
    const next = await db
      .query("queue")
      .filter((q) => q.eq(q.field("isActive"), true))
      .order("asc")
      .take(1);

    return next.length > 0 ? next[0] : null;
  },
});

