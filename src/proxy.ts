import { NextRequest, NextResponse } from "next/server";
import locales from "@/generated/locales.json";

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/global") {
    return NextResponse.next();
  }

  const host = request.headers.get("host") ?? "";
  const isLocalhost =
    host.startsWith("localhost") || host.startsWith("127.0.0.1");

  let locale: string;

  if (isLocalhost) {
    const parts = request.nextUrl.pathname.split("/");
    const pathLocale = parts[1] === "lang" ? parts[2] : parts[1];
    locale = (locales as string[]).includes(pathLocale) ? pathLocale : "en";
  } else {
    const subdomain = host.split(".")[0];
    locale = (locales as string[]).includes(subdomain) ? subdomain : "en";
  }

  if (process.env.NODE_ENV === "production" && locale === "en") {
    return NextResponse.redirect("https://hackclub.com");
  }

  const url = request.nextUrl.clone();
  url.pathname = `/lang/${locale}`;
  const headers = new Headers(request.headers);
  headers.set("x-next-intl-locale", locale);
  return NextResponse.rewrite(url, { headers });
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"]
};
