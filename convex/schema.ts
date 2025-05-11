import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    email: v.string(),
    image: v.string(),
    clerkID: v.string(),
    }).index('by_clerk_id', ['clerkID']),
    
    queue: defineTable({
      number: v.number(),
      userId: v.string(),
      createdAt: v.number(),
      expiresAt: v.number(),
      isActive: v.optional(v.boolean()),
    })
    .index("by_user", ["userId"])
    .index("by_number", ["number"]),
});
