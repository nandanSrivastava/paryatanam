import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Footer() {
  return (
    <footer className="bg-gradient-primary text-white relative overflow-hidden">
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 pattern-dots opacity-5 sm:opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 sm:pt-20 pb-10 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand Column */}
            <div className="space-y-5 sm:space-y-6 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="bg-white text-primary p-2 rounded-br-xl rounded-tl-xl shadow-lg group-hover:scale-110 transition-transform">
                  <span className="font-serif font-bold text-xl sm:text-2xl">
                    P
                  </span>
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-bold">
                  Paryatanam
                </span>
              </Link>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xs">
                Adventure in every step, culture in every story, and nature in
                every breath. Paryatanam curates meaningful Indo-Nepal journeys.
              </p>
              <div className="flex gap-2.5 sm:gap-3 pt-2">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-secondary hover:text-primary active:scale-95 sm:hover:scale-110 transition-all duration-300 border border-white/10 touch-manipulation"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-secondary flex items-center gap-2">
                Discover
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  { label: "Indo-Nepal Packages", href: "/#featured-packages" },
                  { label: "Valmikinagar Circuit", href: "/#destinations" },
                  { label: "Travel Guidelines", href: "/#know-before-you-go" },
                  { label: "Custom Group Tours", href: "#" },
                  { label: "Contact Us", href: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm sm:text-base text-white/80 hover:text-white active:text-white sm:hover:translate-x-2 transition-all inline-flex items-center gap-2 group py-1 touch-manipulation"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary group-hover:w-2 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-secondary">
                Contact Us
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-3 group">
                  <div className="mt-0.5 sm:mt-1 h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-white/85 text-sm leading-relaxed flex-1">
                    Valmikinagar Tour Desk, Bihar - Nepal Border Circuit
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <a
                    href="tel:+919000000000"
                    className="text-sm sm:text-base text-white/85 hover:text-white active:text-white transition-colors py-1 touch-manipulation"
                  >
                    +91 90000 00000
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <a
                    href="mailto:hello@paryatanam.in"
                    className="text-sm sm:text-base text-white/85 hover:text-white active:text-white transition-colors py-1 touch-manipulation break-all"
                  >
                    hello@paryatanam.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-secondary">
                Newsletter
              </h3>
              <p className="text-white/85 text-sm mb-5 sm:mb-6 leading-relaxed">
                Subscribe for package updates, special departures, and seasonal
                prices.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-secondary rounded-xl h-11 sm:h-12 backdrop-blur-sm hover:bg-white/15 transition-colors text-sm sm:text-base"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 shadow-lg active:scale-95 sm:hover:scale-110 transition-all touch-manipulation"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
              <p className="text-white/60 text-xs mt-3">
                Join 1000+ travelers getting exclusive deals
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">
            <p className="text-white/70 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Paryatanam. All rights reserved.
              Crafted with passion for travelers.
            </p>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-white active:text-white text-xs sm:text-sm transition-colors relative group py-1 touch-manipulation"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
