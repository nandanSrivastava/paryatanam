import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "valmikitigerreserve.com",
      },
      {
        protocol: "https",
        hostname: "wildkasarwadi.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "media2.thrillophilia.com",
      },
      {
        protocol: "https",
        hostname: "media3.thrillophilia.com",
      },
      {
        protocol: "https",
        hostname: "en.wikipedia.org",
      },
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
    ],
  },
};

export default nextConfig;
