import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
    title: "Products | Clenja Tech",
    description: "Clenja Tech Products hub. Upcoming SaaS and internal tools."
};

export default function ProductsPage() {
    const products = [
        {
            name: "Clenja Deploy",
            description: "Automated Vercel-like deployment platform for bare-metal servers.",
            status: "Coming soon",
            category: "DevOps"
        },
        {
            name: "AgentRoute",
            description: "No-code workflow builder to orchestrate multiple LLM agents for customer support.",
            status: "Beta",
            category: "AI & Automation"
        },
        {
            name: "Clenja Auth",
            description: "Enterprise identity provider and RBAC management for internal tools.",
            status: "Coming soon",
            category: "Security"
        },
        {
            name: "NeoAnalytics",
            description: "Privacy-first, open-source Google Analytics alternative with AI insights.",
            status: "Coming soon",
            category: "Data"
        }
    ];

    return (
        <div className="flex flex-col items-center pb-24 min-h-screen">
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Clenja Products</h1>
                    <p className="text-lg text-muted-foreground">Internal tools and SaaS platforms we're building to solve our own problems.</p>
                </div>
            </section>

            <section className="w-full pt-16 px-4 md:px-8 flex-1">
                <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product, i) => (
                        <Card key={i} className="bg-card border-border/40 hover:border-primary/30 transition-colors relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                                <div className="space-y-1">
                                    <p className="text-sm text-primary font-medium tracking-wide uppercase">{product.category}</p>
                                    <CardTitle className="text-2xl text-white">{product.name}</CardTitle>
                                </div>
                                <Badge variant={product.status === "Beta" ? "default" : "secondary"} className="ml-2 whitespace-nowrap">
                                    {product.status}
                                </Badge>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-muted-foreground">{product.description}</CardDescription>
                                <div className="mt-8 pt-4 border-t border-border/40 flex justify-between items-center text-sm font-medium">
                                    <span className="text-white/40 cursor-not-allowed">Learn more</span>
                                    <span className="text-primary/60">Waitlist closed</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
