import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ArrowRight, Code, Cpu, Database, Cloud, Cog, Headset } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  let caseStudies: any[] = [];
  try {
    caseStudies = await prisma.caseStudy.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Prisma case studies fetch error:", error);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center pt-24 pb-32 px-4 md:px-8 bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background -z-10" />
        <div className="container max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Build reliable software and <br className="hidden md:block" /> AI automations <span className="text-primary italic">that ship.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            CLENJA TECH LTD provides enterprise-grade development, AI/ML integrations, and precise cloud engineering. From Africa to the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Book a Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-primary/20 hover:bg-primary/10 hover:text-primary">
                See Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to launch, scale, and automate your technical infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Web Apps", icon: <Code className="w-6 h-6 text-primary" />, desc: "Modern, responsive, and high-performance applications built with React, Next.js, and Node." },
              { title: "AI Agents & Automation", icon: <Cpu className="w-6 h-6 text-primary" />, desc: "Custom LLM solutions, conversational AI, and business process automation." },
              { title: "Data & Analytics", icon: <Database className="w-6 h-6 text-primary" />, desc: "Robust data pipelines, dashboards, and structured analytics infrastructure." },
              { title: "Cloud/DevOps", icon: <Cloud className="w-6 h-6 text-primary" />, desc: "Scalable GCP/AWS architecture, secure Kubernetes clusters, and CI/CD." },
              { title: "Integrations", icon: <Cog className="w-6 h-6 text-primary" />, desc: "Seamless third-party API configurations, webhooks, and legacy systems syncing." },
              { title: "Support & Maintenance", icon: <Headset className="w-6 h-6 text-primary" />, desc: "24/7 technical support, security patching, and comprehensive SLA." },
            ].map((s, i) => (
              <Card key={i} className="bg-card border-border/40 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">{s.icon}</div>
                  <CardTitle className="text-xl text-white">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{s.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="w-full py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
              <p className="text-muted-foreground">See how we've helped companies solve complex challenges through engineering.</p>
            </div>
            <Link href="/case-studies">
              <Button variant="ghost" className="hover:text-primary hover:bg-primary/10">View all case studies <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.length > 0 ? caseStudies.map((cs) => (
              <Card key={cs.id} className="bg-background border-border/40 flex flex-col h-full hover:shadow-lg hover:shadow-primary/5 transition-all">
                <CardHeader>
                  <div className="text-xs font-semibold text-primary mb-2 tracking-wider uppercase">{cs.client}</div>
                  <CardTitle className="text-xl text-white leading-tight">{cs.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{cs.description}</p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Link href="/case-studies">
                    <span className="text-sm font-medium text-white group flex items-center hover:text-primary transition-colors">
                      Read full story <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </Card>
            )) : (
              <p className="text-muted-foreground">No case studies available yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Industries & Process - Simple version */}
      <section className="w-full py-24 bg-background border-y border-border/40">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Trusted across rapidly growing industries</h2>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground font-medium uppercase tracking-widest text-sm">
            <span>FinTech</span> <span className="text-primary">•</span>
            <span>AgriTech</span> <span className="text-primary">•</span>
            <span>Logistics</span> <span className="text-primary">•</span>
            <span>Health & E-commerce</span>
          </div>
        </div>
      </section>

      {/* FAQ & Newsletter */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border/40">
                <AccordionTrigger className="text-white hover:text-primary text-left">How long does a typical project take?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depending on the complexity, a standard web application takes between 4-8 weeks. AI integrations and automation pipelines take 2-6 weeks depending on data readiness.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border/40">
                <AccordionTrigger className="text-white hover:text-primary text-left">Do you offer post-launch support?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer monthly retainers that cover bug fixes, infrastructure scaling, security patches, and minor feature additions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border/40">
                <AccordionTrigger className="text-white hover:text-primary text-left">How do I start a project with Clenja?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can book a discovery call via our Contact page or create an account in our Client Portal to submit a detailed project request.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-card/40 border border-border/40 rounded-2xl p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay ahead with Clenja Insights</h3>
            <p className="text-muted-foreground mb-8">Get monthly updates on enterprise AI, software architecture trends, and Clenja product launches.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="hello@company.com" className="bg-background border-border/50" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
