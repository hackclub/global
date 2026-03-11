import type { Metadata } from "next";
import "@hackclub/theme/fonts/reg-bold.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Hack Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
