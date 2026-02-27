// @ts-nocheck
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createProject = mutation({
    args: {
        userId: v.id("users"),
        title: v.string(),
        description: v.string(),
        budget: v.optional(v.string()),
        timeline: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("projectRequests", {
            userId: args.userId,
            title: args.title,
            description: args.description,
            budget: args.budget,
            timeline: args.timeline,
            status: "PENDING",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
    },
});

export const getProjectsByUser = query({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("projectRequests")
            .filter((q) => q.eq(q.field("userId"), args.userId))
            .order("desc")
            .collect();
    },
});
