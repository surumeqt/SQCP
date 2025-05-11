import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: {
        username: v.string(),
        email: v.string(),
        image: v.string(),
        clerkID: v.string(),
    },
    handler: async ( ctx, args) => {

        const existingUser = await ctx.db.query("users")
            .withIndex("by_clerk_id", (q) => q.eq('clerkID', args.clerkID))
            .first();
        
        if (existingUser){
            console.log("User already exists in Convex. Skipping creation.");
            return new Response("User already exists", { status: 200 });
        }

        await ctx.db.insert("users", {
            username: args.username,
            email: args.email,
            image: args.image,
            clerkID: args.clerkID,
        });
    }
});