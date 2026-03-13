import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import locales from "@/generated/locales.json";

export default function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const subdomain = host.split(".")[0];
  const locale = (locales as string[]).includes(subdomain) ? subdomain : "en";

  if (process.env.NODE_ENV === "production" && locale === "en") {
    return NextResponse.redirect("https://hackclub.com");
  }

  // create middleware per-request with subdomain as defaultLocale
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: locale,
    localePrefix: "never",
    localeDetection: false,
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};