import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cloud-lapsqbi7m-hack-club-bot.vercel.app", },
      { protocol: "https", hostname: "cdn.hackclub.com", },
      { protocol: "https", hostname: "user-cdn.hackclub-assets.com", },
      { protocol: "https", hostname: "github.com", },
      
    ],
  },
};

export default nextConfig;
