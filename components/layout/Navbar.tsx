"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl tracking-tight text-white">CLENJA</span>
                    <span className="text-primary font-bold text-xl">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors hover:text-white ${pathname === link.href ? "text-white" : "text-white/60"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-white hover:text-primary">
                            Client Portal
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Book a Call
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white/80 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border/40 py-4 px-4 flex flex-col space-y-4"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium transition-colors ${pathname === link.href ? "text-white" : "text-white/70"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-border/40" />
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start text-white">
                                Client Portal
                            </Button>
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full bg-primary text-primary-foreground">
                                Book a Call
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
