import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Case Studies | Clenja Tech",
    description: "Real-world engineering challenges solved by Clenja Tech."
};

// Force dynamic since we read from DB
export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
    const caseStudies = await prisma.caseStudy.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="flex flex-col items-center pb-24 min-h-screen">
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto space-y-4">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h1>
                    <p className="text-lg text-muted-foreground">Discover how we deliver scalable software and AI solutions.</p>
                </div>
            </section>

            <section className="w-full pt-16 px-4 md:px-8 flex-1">
                <div className="container max-w-4xl mx-auto space-y-12">
                    {caseStudies.length === 0 ? (
                        <p className="text-center text-muted-foreground">No case studies found.</p>
                    ) : (
                        caseStudies.map((cs) => (
                            <Card key={cs.id} className="bg-background border-border/40 overflow-hidden shadow-sm">
                                <CardHeader className="bg-card/50 border-b border-border/40 pb-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <span className="text-sm font-semibold tracking-wider text-primary uppercase">{cs.client}</span>
                                        <div className="flex gap-2 flex-wrap">
                                            {cs.tags.split(',').map((tag, i) => (
                                                <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{tag.trim()}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-white mb-2">{cs.title}</CardTitle>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{cs.description}</p>
                                </CardHeader>
                                <CardContent className="p-6 md:p-8 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-bold text-white flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-destructive mr-3" /> The Problem
                                            </h3>
                                            <p className="text-muted-foreground">{cs.problem}</p>
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-bold text-white flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-primary mr-3" /> The Solution
                                            </h3>
                                            <p className="text-muted-foreground">{cs.solution}</p>
                                        </div>
                                    </div>
                                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                                        <h3 className="text-lg font-bold text-white mb-2">Impact</h3>
                                        <p className="text-primary/90 font-medium">{cs.impact}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}
