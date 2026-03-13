"use client";

import dynamic from "next/dynamic";
import type { PageProps } from "./LocalePage";

export type { PageProps };

const LocalePage = dynamic(() => import("./LocalePage"), { ssr: false });

export default function LocalePageClient(props: PageProps) {
  return <LocalePage {...props} />;
}
