// @ts-nocheck
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getUserByEmail = query({
    args: { email: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("users")
            .withIndex("by_email", (q) => q.eq("email", args.email))
            .first();
    },
});

// Since NextAuth might need to create users, we'll keep a basic create user mutation just in case
export const createUser = mutation({
    args: {
        email: v.string(),
        password: v.optional(v.string()),
        name: v.optional(v.string()),
        role: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const userId = await ctx.db.insert("users", {
            email: args.email,
            password: args.password,
            name: args.name,
            role: args.role || "USER",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
        return userId;
    },
});
