import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding Database...");

    // Create demo admin user
    const hashedPassword = await hash("password", 10);
    const admin = await prisma.user.upsert({
        where: { email: "admin@clenja.com" },
        update: {},
        create: {
            email: "admin@clenja.com",
            name: "Clenja Admin",
            role: "ADMIN",
            password: hashedPassword,
        },
    });

    console.log("Admin user created:", admin.email);

    // Seed Case Studies
    const caseStudies = [
        {
            title: "Automated Lead Routing AI",
            client: "FinTech Africa Ltd.",
            description: "Implemented an AI-driven agent to triage and route high-value leads from WhatsApp.",
            problem: "The client was manually sorting through thousands of messages daily, leading to a 48-hour response time for high-value clients and losing potential revenue.",
            solution: "We deployed a custom LLM-powered chatbot that integrated directly with their WhatsApp Business API to classify intent, extract key details, and instantly route qualified leads to the sales team.",
            impact: "Reduced response time to under 1 minute. Increased sales conversion rate by 34% within the first month.",
            tags: "AI, WhatsApp, FinTech, Automation",
        },
        {
            title: "Cloud Migration & Architecture Overhaul",
            client: "LogistiCorp Nigeria",
            description: "Fully migrated a legacy on-premise logistics monolithic architecture to a modern, auto-scaling AWS infrastructure.",
            problem: "Frequent downtime during peak holiday seasons was causing service interruptions and customer dissatisfaction.",
            solution: "We re-architected the monolith into containerized microservices managed via Kubernetes, implementing CI/CD pipelines and proactive infrastructure monitoring.",
            impact: "Achieved 99.99% uptime during the next peak season, reduced infrastructure costs by 20%, and enabled daily deployments.",
            tags: "Cloud, DevOps, AWS, Logistics",
        },
        {
            title: "Enterprise Dashboard & Data Analytics Hub",
            client: "AgriTech Solutions",
            description: "Built a robust, real-time analytics dashboard to track IoT sensors in agricultural fields.",
            problem: "Agronomists were relying on scattered CSV exports and delayed reporting to monitor soil moisture and weather conditions.",
            solution: "Developed a modern Next.js web application that streams data from IoT devices into a PostgreSQL database, visualizing it through interactive charts and alerts.",
            impact: "Enabled proactive irrigation strategies that reduced water waste by 18% and increased overall crop yield by 12% across pilot farms.",
            tags: "Web App, Next.js, Data Analytics, IoT",
        }
    ];

    for (const cs of caseStudies) {
        await prisma.caseStudy.create({
            data: cs,
        });
    }

    console.log("Seeded Case Studies successfully.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
