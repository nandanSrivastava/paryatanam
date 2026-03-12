import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden px-5"
      style={{
        backgroundImage: "url('/images/footer-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 pattern-dots opacity-5 sm:opacity-10" />
      {/* Dark overlay to improve contrast against background image */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 sm:pt-10 pb-1 sm:pb-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-8 sm:mb-10">
            {/* Brand Column */}
            <div className="space-y-5 sm:space-y-6 lg:col-span-1">
              <Link href="https://www.paryatanam.com" className="flex items-center gap-3 group">
                <img
                  src="./Paryatanam LOGO White PNG.png"
                  alt="Paryatanam Logo"
                  className="h-8 w-auto"
                />
              </Link>

              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xs">
                Adventure in every step, culture in every story, and nature in
                every breath. Paryatanam curates meaningful Indo-Nepal journeys.
              </p>
              <div className="flex gap-1.5 sm:gap-1 pt-2">
                {[
                  { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/paryatanamgo" },
                  { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/ParyatanamGO" },
                  { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/paryatanamgo/" },
                  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/paryatanam-go" },
                  { icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.965 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.031-1.002 2.324-1.492 3.121 1.125.347 2.314.535 3.543.535 6.621 0 11.988-5.365 11.988-11.987C23.987 5.367 18.621 0 12.017 0z"/>
                    </svg>
                  ), href: "https://www.pinterest.com/paryatanamtgo/" },
                  { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@Paryatanam" },
                ].map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-secondary hover:text-primary active:scale-95 sm:hover:scale-110 transition-all duration-300 border border-white/10 touch-manipulation"
                  >
                    {icon}
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
                    href="tel:+919288202060"
                    className="text-sm sm:text-base text-white/85 hover:text-white active:text-white transition-colors py-1 touch-manipulation"
                  >
                    +91 9288202060
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <a
                    href="mailto:paryatanamgo@gmail.com"
                    className="text-sm sm:text-base text-white/85 hover:text-white active:text-white transition-colors py-1 touch-manipulation break-all"
                  >
                    paryatanamgo@gmail.com
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
        <div className="border-t border-white/10 pt-6 sm:pt-8 pb-4 sm:pb-6">
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
