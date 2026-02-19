"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/#featured-packages" },
  { name: "Why Choose Us", href: "/#why-paryatanam" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openWhatsApp = (e?: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.open("https://wa.me/919288202060", "_blank");
  };

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-luxury py-2 sm:py-3"
          : "bg-white/90 backdrop-blur-md shadow-md py-3 sm:py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/paryatanam-logo-png.png"
              alt="Paryatanam Logo"
              className="h-7 sm:h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-800 text-sm font-semibold transition-all hover:text-secondary relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919288202060"
              target="_blank"
              rel="noopener noreferrer"
              onClick={openWhatsApp}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium text-sm hover:bg-neutral-100 text-neutral-800 outline-1"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9288202060</span>
            </a>
            <Button
              variant="primary"
              size="md"
              onClick={openWhatsApp}
              className="shadow-elegant hover:shadow-luxury transition-all hover:scale-105"
            >
              <User className="w-4 h-4 mr-2" />
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 sm:p-3 rounded-lg transition-colors active:scale-95 text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[var(--navbar-height)] left-0 right-0 bottom-0 bg-white/98 backdrop-blur-lg border-t border-neutral-200 shadow-luxury animate-fade-in overflow-y-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-800 font-semibold py-4 px-4 hover:bg-primary/5 active:bg-primary/10 hover:text-primary transition-all rounded-xl text-base touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-neutral-200 my-2" />
            <a
              href="https://wa.me/919288202060"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                openWhatsApp(e);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-4 rounded-xl text-neutral-800 font-medium hover:bg-neutral-100 active:bg-neutral-200 transition-colors touch-manipulation"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-base">+91 9288202060</span>
            </a>
            <Button
              onClick={(e: any) => {
                openWhatsApp(e);
                setIsMobileMenuOpen(false);
              }}
              className="w-full justify-center shadow-elegant py-4 text-base mt-2 touch-manipulation active:scale-95"
            >
              <User className="w-4 h-4 mr-2" />
              Send Enquiry
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
