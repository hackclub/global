import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import locales from "./src/generated/locales.json" with { type: "json" };

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: locales.map((locale) => `${locale}.hackclub.com`), // for cross-origin requests
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud-lapsqbi7m-hack-club-bot.vercel.app"
      },
      { protocol: "https", hostname: "cdn.hackclub.com" },
      { protocol: "https", hostname: "user-cdn.hackclub-assets.com" },
      { protocol: "https", hostname: "github.com" }
    ]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
