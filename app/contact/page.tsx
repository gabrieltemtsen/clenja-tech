"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, CalendarDays, Loader2, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/app/actions/contact";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string; message?: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus(null);

        // Server action
        const result = await submitContact(formData);
        setStatus(result);
        setIsSubmitting(false);
    }

    return (
        <div className="flex flex-col items-center pb-24 min-h-screen">
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Let's build together</h1>
                    <p className="text-lg text-muted-foreground">Ready to scale your technical infrastructure? Reach out to our engineering team.</p>
                </div>
            </section>

            <section className="w-full pt-16 px-4 md:px-8 flex-1">
                <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Details & Alternative channels */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Alternative Channels</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a href="mailto:hello@clenjatech.com" className="flex items-start space-x-4 p-4 rounded-xl border border-border/40 bg-card hover:border-primary/50 transition-colors group">
                                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Email Us</h3>
                                        <p className="text-sm text-muted-foreground">hello@clenjatech.com</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/2340000000000" target="_blank" rel="noreferrer" className="flex items-start space-x-4 p-4 rounded-xl border border-border/40 bg-card hover:border-primary/50 transition-colors group">
                                    <div className="bg-[#25D366]/10 p-3 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
                                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">WhatsApp</h3>
                                        <p className="text-sm text-muted-foreground">Direct message</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Calendly Placeholder */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Schedule a Discovery Call</h2>
                            <Card className="bg-background border-border/40">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <CalendarDays className="mr-2 w-5 h-5 text-primary" /> Book 30 Minutes
                                    </CardTitle>
                                    <CardDescription>Select a time that works best for you and your team.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center justify-center p-8 border-t border-border/40 bg-muted/20 pb-12">
                                    {/* Mock Calendly UI block */}
                                    <div className="w-full max-w-sm h-64 border border-dashed border-border/60 rounded-xl flex flex-col items-center justify-center text-center space-y-4 p-6 hover:bg-card/50 transition-colors cursor-not-allowed">
                                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary/40">
                                            <CalendarDays className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-white/50">Calendly Integration Placeholder</p>
                                            <p className="text-sm text-muted-foreground/60">Actual widget loads here.</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card className="bg-card border-border/40 h-full backdrop-blur-sm shadow-xl sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                                <CardDescription>Fill out the form below and an engineer will reply within 24 hours.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {status?.success ? (
                                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                        <p className="text-muted-foreground">{status.message}</p>
                                        <Button variant="outline" onClick={() => setStatus(null)} className="mt-4">
                                            Send another message
                                        </Button>
                                    </div>
                                ) : (
                                    <form action={handleSubmit} className="space-y-6">
                                        {status?.error && (
                                            <div className="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-md">
                                                {status.error}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                                                <Input id="name" name="name" required placeholder="John Doe" className="bg-background" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Work Email <span className="text-destructive">*</span></Label>
                                                <Input id="email" name="email" type="email" required placeholder="john@company.com" className="bg-background" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company Name</Label>
                                                <Input id="company" name="company" placeholder="Acme Inc." className="bg-background" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="budget">Estimated Budget</Label>
                                                <Input id="budget" name="budget" placeholder="$10k - $50k" className="bg-background" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Project Details <span className="text-destructive">*</span></Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                placeholder="Tell us about the problem you are trying to solve..."
                                                className="min-h-[150px] bg-background resize-y"
                                            />
                                        </div>

                                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Submit Request"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>
        </div>
    );
}
