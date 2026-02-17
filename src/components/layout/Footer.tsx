import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white text-primary p-1.5 rounded-br-lg rounded-tl-lg">
                <span className="font-serif font-bold text-xl">P</span>
              </div>
              <span className="font-serif text-2xl font-bold">Paryatanam</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Adventure in every step, culture in every story, and nature in
              every breath. Paryatanam curates meaningful Indo-Nepal journeys.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-secondary">
              Discover
            </h3>
            <ul className="space-y-2">
              {[
                "Indo-Nepal Packages",
                "Valmikinagar Circuit",
                "Travel Guidelines",
                "Custom Group Tours",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-secondary">
              Support
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-secondary" />
                <span>
                  Valmikinagar Tour Desk, Bihar - Nepal Border Circuit
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-secondary" />
                <span>+91 90000 00000</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-secondary" />
                <span>hello@paryatanam.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-secondary">
              Newsletter
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Subscribe for package updates, special departures, and seasonal
              prices.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-secondary"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Paryatanam. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
