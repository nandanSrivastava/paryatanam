"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src={isScrolled ? "/paryatanam-logo-png.png" : "/Paryatanam LOGO White PNG.png"}
                            alt="Paryatanam Logo"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-secondary",
                                    isScrolled ? "text-neutral-800" : "text-white/90"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                isScrolled
                                    ? "hover:bg-neutral-100 text-neutral-800"
                                    : "hover:bg-white/10 text-white"
                            )}
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        <Button
                            variant={isScrolled ? "primary" : "outline"}
                            size="sm"
                            className={cn(
                                !isScrolled && "border-white text-white hover:bg-white hover:text-primary"
                            )}
                        >
                            <User className="w-4 h-4 mr-2" />
                            Login
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={cn("w-6 h-6", isScrolled ? "text-neutral-800" : "text-white")} />
                        ) : (
                            <Menu className={cn("w-6 h-6", isScrolled ? "text-neutral-800" : "text-white")} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-neutral-800 font-medium py-2 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-neutral-100" />
                    <Button className="w-full justify-center">Login / Sign Up</Button>
                </div>
            )}
        </nav>
    );
}
