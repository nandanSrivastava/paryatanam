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
    ],
  },
};

export default nextConfig;
