"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2, LifeBuoy } from "lucide-react";
import { createSupportTicket } from "@/app/actions/support";

export default function SupportPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string; message?: string } | null>(null);

    // We need to manage select state manually for server actions to read via hidden inputs
    const [category, setCategory] = useState("GENERAL");
    const [priority, setPriority] = useState("NORMAL");

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus(null);

        // Append select values as formData.get won't pick them up natively from Radix UI Select easily without hidden inputs
        formData.append("category", category);
        formData.append("priority", priority);

        const result = await createSupportTicket(formData);
        setStatus(result);
        setIsSubmitting(false);
    }

    return (
        <div className="space-y-8 max-w-3xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Support Center</h1>
                <p className="text-muted-foreground mt-2">Open a ticket and our engineering team will assist you.</p>
            </div>

            <Card className="bg-card border-border/40">
                <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center">
                        <LifeBuoy className="w-5 h-5 mr-2 text-primary" /> Create Ticket
                    </CardTitle>
                    <CardDescription>We aim to respond to high-priority tickets within 1 hour.</CardDescription>
                </CardHeader>
                <CardContent>
                    {status?.success ? (
                        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Ticket Created</h3>
                            <p className="text-muted-foreground">{status.message}</p>
                            <Button variant="outline" onClick={() => setStatus(null)} className="mt-4">
                                Open another ticket
                            </Button>
                        </div>
                    ) : (
                        <form action={handleSubmit} className="space-y-6">
                            {status?.error && (
                                <div className="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-md">
                                    {status.error}
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject <span className="text-destructive">*</span></Label>
                                <Input id="subject" name="subject" required placeholder="Brief summary of the issue" className="bg-background" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Category</Label>
                                    <Select value={category} onValueChange={setCategory}>
                                        <SelectTrigger className="bg-background">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="GENERAL">General Inquiry</SelectItem>
                                            <SelectItem value="BUG">Bug / Issue</SelectItem>
                                            <SelectItem value="BILLING">Billing</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Priority</Label>
                                    <Select value={priority} onValueChange={setPriority}>
                                        <SelectTrigger className="bg-background">
                                            <SelectValue placeholder="Select priority" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="LOW">Low</SelectItem>
                                            <SelectItem value="NORMAL">Normal</SelectItem>
                                            <SelectItem value="HIGH">High</SelectItem>
                                            <SelectItem value="URGENT">Urgent (System Down)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description <span className="text-destructive">*</span></Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    required
                                    placeholder="Provide steps to reproduce the bug or details of your request."
                                    className="min-h-[150px] bg-background resize-y"
                                />
                            </div>

                            <div className="pt-4 flex justify-end">
                                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Ticket"
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
