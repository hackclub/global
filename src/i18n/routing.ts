import { defineRouting } from "next-intl/routing";
import locales from "@/generated/locales.json";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix: "never",
});
