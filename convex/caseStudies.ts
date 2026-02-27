// @ts-nocheck
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getCaseStudies = query({
    args: { limit: v.optional(v.number()) },
    handler: async (ctx, args) => {
        let q = ctx.db.query("caseStudies").order("desc");
        if (args.limit) {
            return await q.take(args.limit);
        }
        return await q.collect();
    },
});

export const seedCaseStudies = mutation({
    args: {},
    handler: async (ctx) => {
        const existing = await ctx.db.query("caseStudies").collect();
        if (existing.length > 0) return;

        const demoStudies = [
            {
                title: "Scaling Fintech Infrastructure",
                client: "PayGlobal Inc.",
                description: "Migrated a legacy monolith to a microservices architecture handles 1M+ daily transactions.",
                problem: "The client was experiencing severe downtime during peak hours due to a tightly coupled backend.",
                solution: "We re-architected the system using containerized Node.js services orchestrated by Kubernetes.",
                impact: "Zero downtime in 12 months, 40% reduction in server costs, and 3x faster deployment cycles.",
                tags: "Backend, Cloud, Fintech",
            },
            {
                title: "AI-Powered Customer Support",
                client: "RetailMax",
                description: "Implemented an autonomous LLM agent that resolves 70% of tier-1 support tickets instantly.",
                problem: "Customer support costs were skyrocketing, and response times were averaging 24 hours.",
                solution: "Integrated a custom RAG-based LLM pipeline that connects directly to their internal knowledge base.",
                impact: "Ticket resolution time dropped from 24h to 2mins. $2M saved annually in support costs.",
                tags: "AI, Automation, LLM",
            },
            {
                title: "Real-time Delivery Analytics",
                client: "FastTrack Logistics",
                description: "Built a high-throughput data pipeline and dashboard for real-time fleet tracking.",
                problem: "Dispatchers were relying on delayed, batch-processed data, causing routing inefficiencies.",
                solution: "Deployed a streaming data architecture using Kafka and a highly interactive React dashboard.",
                impact: "Delivery times reduced by 15%, fuel costs cut by 8%, and 100% visibility for dispatchers.",
                tags: "Data, Frontend, Logistics",
            }
        ];

        for (const study of demoStudies) {
            await ctx.db.insert("caseStudies", {
                ...study,
                createdAt: Date.now(),
            });
        }
        return "Seeded case studies!";
    },
});
