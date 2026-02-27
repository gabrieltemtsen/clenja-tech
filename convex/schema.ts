// @ts-nocheck
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.optional(v.string()),
        email: v.optional(v.string()),
        emailVerified: v.optional(v.number()), // Time in milliseconds if needed
        password: v.optional(v.string()),
        image: v.optional(v.string()),
        role: v.string(), // "USER" or "ADMIN"
        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_email", ["email"]),

    leads: defineTable({
        name: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        message: v.optional(v.string()),
        budget: v.optional(v.string()),
        status: v.string(), // "NEW"
        createdAt: v.number(),
    }),

    projectRequests: defineTable({
        userId: v.id("users"),
        title: v.string(),
        description: v.string(),
        budget: v.optional(v.string()),
        timeline: v.optional(v.string()),
        status: v.string(), // PENDING, IN_PROGRESS, COMPLETED, CANCELLED
        createdAt: v.number(),
        updatedAt: v.number(),
    }),

    supportTickets: defineTable({
        userId: v.id("users"),
        subject: v.string(),
        description: v.string(),
        category: v.string(), // GENERAL, BUG, BILLING
        priority: v.string(), // LOW, NORMAL, HIGH, URGENT
        status: v.string(), // OPEN, IN_PROGRESS, RESOLVED, CLOSED
        createdAt: v.number(),
        updatedAt: v.number(),
    }),

    caseStudies: defineTable({
        title: v.string(),
        client: v.string(),
        description: v.string(),
        problem: v.string(),
        solution: v.string(),
        impact: v.string(),
        imageUrl: v.optional(v.string()),
        tags: v.string(), // comma separated
        createdAt: v.number(),
    }),
});
