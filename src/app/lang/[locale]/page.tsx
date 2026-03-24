import LocalePageClient from "./LocalePageClient";
import type { Metadata } from "next";
import { slackData as fetchSlackData } from "@/lib/slackData";
import type { Stars } from "./LocalePage";
import { getTranslations } from "next-intl/server";

const repos = [
  // assumes hackclub/ is the org for all repos
  "sprig",
  "blot",
  "sinerider",
  "hackclub",
  "hackathons",
  "onboard"
] as const;
const starsPromise = Promise.all(
  repos.map((repo) =>
    fetch(`https://api.github.com/repos/hackclub/${repo}`, {
      // .env GITHUB_TOKEN_COOL for ratelimit adios
      // it has the cool in the end cause its cool and cause i think gh/github desktop uses the same env var which has caused me issues
      headers: process.env.GITHUB_TOKEN_COOL
        ? { Authorization: `token ${process.env.GITHUB_TOKEN_COOL}` }
        : undefined
    })
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.stargazers_count !== "number")
          console.error(`[stars] ${repo}: unexpected response`, d);
        return [repo, d.stargazers_count ?? 0] as const;
      })
      .catch((err) => {
        console.error(`[stars] ${repo} failed:`, err);
        return [repo, 0] as const;
      })
  )
).then(
  (entries) =>
    Object.fromEntries(
      entries.map(([repo, count]) => [repo, { stargazerCount: count }])
    ) as Stars
);

const hackathonsDataPromise = fetch(
  "https://hackathons.hackclub.com/api/events/upcoming"
)
  .then((r) => (r.ok ? r.json() : []))
  .then((data: { start: string }[]) =>
    data.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    )
  )
  .catch((err) => {
    console.error("[hackathons] failed:", err);
    return [] as { start: string }[];
  });

// Sprig: get newest games
function getGames() {
  return fetch("https://hackclub.com/api/games");
}

const game = await getGames()
  .then((r) => r.json())
  .then((data: unknown) => {
    if (!Array.isArray(data)) {
      console.error("[games] unexpected response shape:", data);
      return [];
    }
    return data as { title: string }[];
  })
  .catch((err) => {
    console.error("[games] failed:", err);
    return [];
  });

const slackDataPromise = fetchSlackData().catch((err) => {
  console.error("[slack] failed:", err);
  throw err;
});
const bankDataPromise = fetch("https://hcb.hackclub.com/stats")
  .then((r) => r.json())
  .then((bd) => {
    return [
      `💰 ${(bd.raised / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })} raised`
    ] as string[];
  })
  .catch((err) => {
    console.error("[bank] failed:", err);
    return ["error"] as string[];
  });

const locales = ["en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "index" });

  return {
    title: "Hack Club",
    description: t("firstsection.everydaytext"),
    openGraph: {
      images: [
        "https://user-cdn.hackclub-assets.com/019c5a96-4c13-7a10-bbb6-6914f1130df8/assemble.jpg"
      ]
    }
  };
}

// try to fetch from hackclub.com/carousel.json, if that fails, use the local one.
import carouselCards from "@/lib/carousel.json";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let carouselCardsResult: any;
try {
  const response = await fetch("https://hackclub.com/carousel.json");
  if (!response.ok) throw new Error("Network response was not ok");
  carouselCardsResult = await response.json();
} catch (error) {
  console.warn("Failed to fetch carousel data, using local fallback:", error);
  carouselCardsResult = carouselCards;
}

export default async function Page() {
  const [slackData, bankData, stars, hackathonsData] = await Promise.all([
    slackDataPromise,
    bankDataPromise,
    starsPromise,
    hackathonsDataPromise
  ]);

  return (
    <LocalePageClient
      bankData={bankData}
      slackData={slackData}
      stars={stars}
      hackathonsData={hackathonsData}
      game={game}
      carouselCards={carouselCardsResult}
    />
  );
}
