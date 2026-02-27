import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "About Us | Clenja Tech",
    description: "Learn about Clenja Tech, our mission, values, and engineering culture."
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center pb-24">
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">About Clenja</h1>
                    <p className="text-lg text-muted-foreground">Engineering excellence from Africa to the world.</p>
                </div>
            </section>

            <section className="w-full pt-24 px-4 md:px-8">
                <div className="container max-w-4xl mx-auto space-y-24">

                    {/* Mission & Vision */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                        <p className="text-xl leading-relaxed text-muted-foreground">
                            To build reliable, scalable software and artificial intelligence automations that empower businesses to operate faster, smarter, and with complete technical confidence.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Based in Nigeria, Clenja Tech Ltd was founded on the principle that world-class engineering should be the standard, not the exception. We bridge the gap between complex technical infrastructure and tangible business value.
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-white">Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Shipping Over Talking", desc: "We focus on delivering working, tested, and reliable code rather than endless meetings." },
                                { title: "Technical Rigor", desc: "We don't cut corners. Security, scalability, and clean architecture are non-negotiable." },
                                { title: "Radical Transparency", desc: "Honest timelines, clear communication, and direct access to the engineers building your product." },
                                { title: "Continuous Evolution", desc: "We stay at the bleeding edge of AI, cloud, and web technologies to future-proof your systems." },
                            ].map((val, i) => (
                                <Card key={i} className="bg-card border-border/40 h-full">
                                    <CardContent className="p-6 space-y-3">
                                        <h3 className="text-xl font-bold text-white">{val.title}</h3>
                                        <p className="text-muted-foreground">{val.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Compliance & Company Info */}
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
                        <Badge variant="outline" className="text-primary border-primary bg-primary/10 hover:bg-primary/20 transition-colors uppercase tracking-wider mb-4">
                            Registered Company
                        </Badge>
                        <h2 className="text-2xl font-bold text-white">CLENJA TECH LTD</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Clenja Tech Ltd is a fully registered and compliant software engineering and IT consulting firm based in Nigeria, serving global enterprise clients.
                        </p>
                        <div className="pt-6">
                            <Link href="/contact">
                                <Button size="lg">Work with us <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
