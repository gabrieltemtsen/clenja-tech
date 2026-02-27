// @ts-nocheck
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createTicket = mutation({
    args: {
        userId: v.id("users"),
        subject: v.string(),
        description: v.string(),
        category: v.string(),
        priority: v.string(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("supportTickets", {
            userId: args.userId,
            subject: args.subject,
            description: args.description,
            category: args.category,
            priority: args.priority,
            status: "OPEN",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
    },
});

export const getTicketsByUser = query({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("supportTickets")
            .filter((q) => q.eq(q.field("userId"), args.userId))
            .order("desc")
            .collect();
    },
});
