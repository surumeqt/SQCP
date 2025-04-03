import { mutation } from "./_generated/server";

export const getNextQueueNumber = mutation(async ({ db, auth }) => {
  console.log("🔍 Convex: Fetching next queue number...");
  
  const identity = await auth.getUserIdentity();
  if (!identity) {
    console.error("❌ Convex: User not authenticated!");
    throw new Error("User not authenticated");
  }

  const userId = identity.subject;
  console.log("✅ Convex: Authenticated User ID:", userId);

  // Check if user already has a queue number
  const existingEntry = await db
    .query("queue")
    .withIndex("by_user", (q) => q.eq("userId", userId))
    .first();
  if (existingEntry) {
    console.log("✅ Convex: Returning existing queue number:", existingEntry.number);
    return existingEntry.number;
  }

  // Get the last queue number
  const lastQueueEntry = await db
    .query("queue")
    .withIndex("by_number")
    .order("desc")
    .first();
  const nextQueueNumber = lastQueueEntry ? lastQueueEntry.number + 1 : 1;

  console.log("✅ Convex: New queue number assigned:", nextQueueNumber);
  await db.insert("queue", {
    number: nextQueueNumber,
    userId,
    createdAt: Date.now(),
  });

  return nextQueueNumber;
});
