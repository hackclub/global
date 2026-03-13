"use client";

import locales from "@/generated/locales.json";
import NextLink from "next/link";

export default function GlobalPageClient() {
  const sortedLocales = [...(locales as string[])].sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "2rem",
        gap: "0.5rem",
        minHeight: "100vh",
        width: "100%",
        alignItems: "flex-start",
        backgroundColor: "#f0f0f0"
      }}
    >
      {sortedLocales.map((locale) => {
        const isLast = locale === sortedLocales[sortedLocales.length - 1];

        return (
          <div
            key={locale}
            style={{
              fontSize: "2rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <NextLink href={`/lang/${locale}`} passHref>
              {locale.toUpperCase()}
            </NextLink>
            {!isLast && "|"}
          </div>
        );
      })}
    </div>
  );
}
