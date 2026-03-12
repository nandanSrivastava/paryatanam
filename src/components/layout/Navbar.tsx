"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/#featured-packages" },
  { name: "Why Choose Us", href: "/#why-choose-us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openWhatsApp = (e?: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.open("https://wa.me/919288202060", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 10);

      // Show navbar only at the very top, otherwise hide it
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Small Screen - Logo Only */}
      <div className="lg:hidden absolute top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 md:px-6 flex items-center justify-center bg-white/90 backdrop-blur-md shadow-md">
        <Link href="https://paryatanam.com" className="flex items-center gap-3 group">
          <img
            src="/paryatanam-logo-png.png"
            alt="Paryatanam Logo"
            className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-110"
          />
        </Link>
      </div>

      {/* Large Screen - Full Navbar */}
      <nav
        className={cn(
          "hidden lg:block absolute top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-md shadow-md py-3 sm:py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="https://paryatanam.com" className="flex items-center gap-3 group">
              <img
                src="/paryatanam-logo-png.png"
                alt="Paryatanam Logo"
                className="h-7 sm:h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-10">
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
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919288202060"
                target="_blank"
                rel="noopener noreferrer"
                onClick={openWhatsApp}
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium text-sm hover:bg-neutral-100 text-neutral-800 outline-1"
              >
                <Phone className="w-4 h-4" />
                <span>+91 92882 02060</span>
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
          </div>
        </div>
      </nav>
    </>
  );
}
