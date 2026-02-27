// @ts-nocheck
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createLead = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        budget: v.optional(v.string()),
        message: v.string(),
    },
    handler: async (ctx, args) => {
        const leadId = await ctx.db.insert("leads", {
            name: args.name,
            email: args.email,
            company: args.company,
            message: args.message,
            budget: args.budget,
            status: "NEW",
            createdAt: Date.now(),
        });
        return leadId;
    },
});
