import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.unsplash.com" },
    ],
    // Local /public/images/* are served automatically — no config needed
  },
  // Ensure Tailwind v4 CSS layer works correctly
  experimental: {},
};

export default nextConfig;
