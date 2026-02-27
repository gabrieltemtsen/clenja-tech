import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCircle, LayoutDashboard, Send, LifeBuoy, LogOut } from "lucide-react";

export default async function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    const navItems = [
        { label: "Dashboard", href: "/portal", icon: <LayoutDashboard className="w-5 h-5" /> },
        { label: "Start a Project", href: "/portal/start-project", icon: <Send className="w-5 h-5" /> },
        { label: "Support Tickets", href: "/portal/support", icon: <LifeBuoy className="w-5 h-5" /> },
    ];

    return (
        <div className="flex min-h-[calc(100vh-4rem)] bg-background">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 border-r border-border/40 bg-card/10 hidden md:flex flex-col">
                <div className="p-6 border-b border-border/40 space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                        </div>
                        <div>
                            <p className="font-medium text-white text-sm truncate w-40">{session.user?.name || "Client"}</p>
                            <p className="text-xs text-muted-foreground truncate w-40">{session.user?.email}</p>
                        </div>
                    </div>
                    <Badge className="w-fit bg-primary/10 text-primary border-primary/20">Client Access</Badge>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
                                {item.icon}
                                <span className="ml-3">{item.label}</span>
                            </Button>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-border/40">
                    <Link href="/api/auth/signout">
                        <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors">
                            <LogOut className="w-5 h-5" />
                            <span className="ml-3">Sign Out</span>
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header (simplified) */}
                <header className="md:hidden flex items-center justify-between p-4 border-b border-border/40 bg-card">
                    <div className="font-semibold text-white">Client Portal</div>
                    <Link href="/api/auth/signout">
                        <Button variant="ghost" size="sm" className="text-destructive">Sign Out</Button>
                    </Link>
                </header>

                <div className="flex-1 overflow-y-auto p-6 md:p-10">
                    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}

// Ensure Badge is imported (was missing in original prompt but ShadCn uses it often)
// We'll add a quick inline definition or import from UI
import { Badge } from "@/components/ui/badge";
