import GlobalPageClient from "./pageClient";
import locales from "@/generated/locales.json";

// its not like the locales is going to randomly change
export const dynamic = 'force-static';

export const metadata = {
  title: "Global - Hack Club"
};

export default function Global() {
  return <GlobalPageClient locales={locales} />;
}
