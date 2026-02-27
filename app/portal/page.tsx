import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, CreditCard, FolderGit2, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Dashboard | Clenja Portal",
};

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    // Mock data for the dashboard
    const projects = [
        { id: "PRJ-1023", name: "AI Customer Support Agent", status: "In Progress", progress: 65, type: "AI Integration" },
        { id: "PRJ-0941", name: "Legacy DB Migration", status: "Completed", progress: 100, type: "Cloud Architecture" },
    ];

    const invoices = [
        { id: "INV-2024-001", amount: "$4,500.00", status: "Paid", date: "Oct 15, 2024" },
        { id: "INV-2024-002", amount: "$2,250.00", status: "Pending", date: "Nov 01, 2024" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back, {session?.user?.name?.split(" ")[0] || "Client"}</h1>
                <p className="text-muted-foreground mt-2">Here is an overview of your active projects and account status.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-card border-border/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
                        <FolderGit2 className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">1</div>
                        <p className="text-xs text-muted-foreground mt-1 text-primary">On track for Q4 delivery</p>
                    </CardContent>
                </Card>
                <Card className="bg-card border-border/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Open Support Tickets</CardTitle>
                        <Activity className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">0</div>
                        <p className="text-xs text-muted-foreground mt-1 text-green-500 flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1" /> Systems operational
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-card border-border/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending Invoices</CardTitle>
                        <CreditCard className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">1</div>
                        <p className="text-xs text-muted-foreground mt-1">Due in 14 days</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

                {/* Project Pipeline */}
                <Card className="lg:col-span-4 bg-card border-border/40">
                    <CardHeader>
                        <CardTitle className="text-white">Project Pipeline</CardTitle>
                        <CardDescription>Status of your ongoing engineering work.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {projects.map(project => (
                            <div key={project.id} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">{project.name}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-2">
                                            <span className="text-primary/70">{project.id}</span>
                                            <span>•</span>
                                            <span>{project.type}</span>
                                        </p>
                                    </div>
                                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                                        {project.status}
                                    </Badge>
                                </div>
                                {project.status === "In Progress" && (
                                    <div className="w-full bg-background rounded-full h-1.5 mt-2 overflow-hidden border border-border/20">
                                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${project.progress}%` }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Recent Invoices */}
                <Card className="lg:col-span-3 bg-card border-border/40">
                    <CardHeader>
                        <CardTitle className="text-white">Recent Invoices</CardTitle>
                        <CardDescription>Billing history and upcoming payments.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {invoices.map((inv) => (
                            <div key={inv.id} className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none text-white">{inv.amount}</p>
                                    <p className="text-xs text-muted-foreground">{inv.date}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge variant={inv.status === "Paid" ? "secondary" : "destructive"} className="text-[10px] uppercase font-bold tracking-wider">
                                        {inv.status}
                                    </Badge>
                                    <span className="text-xs font-mono text-muted-foreground">{inv.id}</span>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
