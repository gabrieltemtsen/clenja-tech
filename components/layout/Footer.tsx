import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-background pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="font-bold text-xl tracking-tight text-white">CLENJA</span>
                            <span className="text-primary font-bold text-xl">.</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Build reliable software and AI automations that ship. <br />
                            Enterprise-grade solutions from Africa to the world.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="https://github.com/gabrieltemtsen/clenja-tech" className="text-muted-foreground hover:text-white">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider mb-4 uppercase">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-muted-foreground hover:text-white">Case Studies</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider mb-4 uppercase">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/services#web-apps" className="text-muted-foreground hover:text-white">Web Applications</Link>
                            </li>
                            <li>
                                <Link href="/services#ai-agents" className="text-muted-foreground hover:text-white">AI Agents & Automation</Link>
                            </li>
                            <li>
                                <Link href="/services#data-analytics" className="text-muted-foreground hover:text-white">Data & Analytics</Link>
                            </li>
                            <li>
                                <Link href="/services#cloud" className="text-muted-foreground hover:text-white">Cloud/DevOps</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider mb-4 uppercase">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/legal/privacy" className="text-muted-foreground hover:text-white">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/legal/terms" className="text-muted-foreground hover:text-white">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/legal/cookies" className="text-muted-foreground hover:text-white">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Clenja Tech Ltd. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Registered Nigerian Company.</p>
                </div>
            </div>
        </footer>
    );
}
