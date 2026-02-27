"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, UploadCloud } from "lucide-react";
import { createProjectRequest } from "@/app/actions/project";

export default function StartProjectPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string; message?: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus(null);

        const result = await createProjectRequest(formData);
        setStatus(result);
        setIsSubmitting(false);
    }

    return (
        <div className="space-y-8 max-w-3xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Start a new project</h1>
                <p className="text-muted-foreground mt-2">Provide details about your requirements to kick off the engineering process.</p>
            </div>

            <Card className="bg-card border-border/40">
                <CardHeader>
                    <CardTitle className="text-xl text-white">Project Scope</CardTitle>
                    <CardDescription>Tell us what we are building.</CardDescription>
                </CardHeader>
                <CardContent>
                    {status?.success ? (
                        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Request Received</h3>
                            <p className="text-muted-foreground">{status.message}</p>
                            <Button variant="outline" onClick={() => setStatus(null)} className="mt-4">
                                Submit another request
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
                                <Label htmlFor="title">Project Name/Title <span className="text-destructive">*</span></Label>
                                <Input id="title" name="title" required placeholder="e.g. Migration from Monolith to Microservices" className="bg-background" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="budget">Estimated Budget</Label>
                                    <Input id="budget" name="budget" placeholder="Optional" className="bg-background" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="timeline">Expected Timeline</Label>
                                    <Input id="timeline" name="timeline" placeholder="e.g. 3 months" className="bg-background" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Detailed Description <span className="text-destructive">*</span></Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    required
                                    placeholder="Describe the problem, the current infrastructure (if any), and the desired outcome."
                                    className="min-h-[200px] bg-background resize-y"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Attachments (Mock)</Label>
                                <div className="border-2 border-dashed border-border/60 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-background/50 hover:bg-card/50 transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                        <UploadCloud className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-sm font-medium text-white mb-1">Click to upload or drag and drop</p>
                                    <p className="text-xs text-muted-foreground">Requirements docs, architecture diagrams (PDF, PNG, JPG)</p>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Project Request"
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
