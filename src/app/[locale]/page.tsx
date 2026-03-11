import LocalePageClient from "./LocalePageClient";
import type { Metadata } from "next";

const locales = [
  "az",
  "bn",
  "de",
  "el",
  "es",
  "fa",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "kr",
  "ms",
  "nl",
  "pa",
  "pl",
  "ru",
  "rw",
  "th",
  "tr",
  "uk",
  "ur",
  "vi",
  "zh",
];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "test",
    description: "description",
    openGraph: {
      images: [
        "https://user-cdn.hackclub-assets.com/019c5a96-4c13-7a10-bbb6-6914f1130df8/assemble.jpg",
      ],
    },
  };
}

export default function Page() {
  return <LocalePageClient />;
}
