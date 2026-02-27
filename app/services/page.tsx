import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Cpu, Database, Cloud, Cog, Headset } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Services | Clenja Tech",
    description: "Enterprise software, AI automation, and Cloud infrastructure services by Clenja Tech."
};

export default function ServicesPage() {
    const services = [
        {
            id: "web-apps",
            title: "Web Applications",
            icon: <Code className="w-8 h-8 text-primary" />,
            desc: "We build modern, responsive, and high-performance web applications tailored to your business needs.",
            details: ["React & Next.js Ecosystem", "Node.js & Go Backends", "Progressive Web Apps (PWA)", "E-commerce Platforms"]
        },
        {
            id: "ai-agents",
            title: "AI Agents & Automation",
            icon: <Cpu className="w-8 h-8 text-primary" />,
            desc: "Transform your operations with custom LLM solutions, conversational AI, and business process automation.",
            details: ["Custom LLM Integration", "Customer Support Chatbots", "Automated Data Entry", "Agentic Workflows"]
        },
        {
            id: "data-analytics",
            title: "Data & Analytics",
            icon: <Database className="w-8 h-8 text-primary" />,
            desc: "Unlock the value of your data with robust pipelines, intuitive dashboards, and predictive modeling.",
            details: ["Data Pipeline Engineering", "Business Intelligence", "Real-time Analytics", "Machine Learning Models"]
        },
        {
            id: "cloud",
            title: "Cloud/DevOps",
            icon: <Cloud className="w-8 h-8 text-primary" />,
            desc: "Ensure high availability and seamless deployment with our expert cloud architecture and DevOps services.",
            details: ["AWS/GCP Migration", "Kubernetes Management", "CI/CD Pipeline Setup", "Infrastructure as Code"]
        },
        {
            id: "integrations",
            title: "API & Integrations",
            icon: <Cog className="w-8 h-8 text-primary" />,
            desc: "Connect your disparate systems. We handle third-party API configurations, webhooks, and legacy syncing.",
            details: ["Payment Gateways", "CRM Syncing (Salesforce, Hubspot)", "Custom Webhooks", "Legacy System Modernization"]
        },
        {
            id: "support",
            title: "Support & Maintenance",
            icon: <Headset className="w-8 h-8 text-primary" />,
            desc: "Keep your systems running smoothly with our 24/7 technical support, security patching, and SLAs.",
            details: ["24/7 Monitoring", "Security Audits", "Performance Tuning", "Dedicated Retainers"]
        },
    ];

    return (
        <div className="flex flex-col items-center pb-24">
            {/* Header */}
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
                    <p className="text-lg text-muted-foreground">Comprehensive engineering solutions designed to scale your business.</p>
                </div>
            </section>

            {/* Services List */}
            <section className="w-full pt-24 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto space-y-24">
                    {services.map((s, index) => (
                        <div key={s.id} id={s.id} className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-6">
                                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    {s.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-white">{s.title}</h2>
                                <p className="text-lg text-muted-foreground">{s.desc}</p>

                                <ul className="space-y-3 pt-4">
                                    {s.details.map((detail, i) => (
                                        <li key={i} className="flex items-center text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6">
                                    <Link href="/contact">
                                        <Button>
                                            Request a quote <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex-1 w-full relative">
                                <div className="aspect-video lg:aspect-square max-h-[400px] w-full bg-card border border-border/40 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0 group-hover:opacity-100 transition-opacity" />
                                    {/* Abstract visualization placeholder */}
                                    <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full opacity-20">
                                        <div className="bg-white/20 rounded-md h-full w-full col-span-2"></div>
                                        <div className="bg-white/20 rounded-md h-full w-full"></div>
                                        <div className="bg-white/20 rounded-md h-full w-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
