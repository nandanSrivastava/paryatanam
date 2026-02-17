import type { Metadata } from "next";
import { Playfair_Display, Manrope, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paryatanam | Indo-Nepal Spiritual & Nature Tours",
  description:
    "Explore Valmikinagar and Nepal border circuits with curated temple trails, jungle safaris, river experiences, and comfortable stays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} ${dancing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
