import type { Viewport } from "next";
import "@hackclub/theme/fonts/reg-bold.css";
import "../styles/main.css";
import Providers from "./providers";
import GitHub from "../components/GitHub";

export const viewport: Viewport = {
  themeColor: "#ec3750",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GitHub />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
