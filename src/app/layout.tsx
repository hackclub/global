import type { Viewport } from "next";
import "@hackclub/theme/fonts/reg-bold.css";
import Providers from "./providers";
import EmotionRegistry from "./emotion-registry";
import { NextIntlClientProvider } from "next-intl";

export const viewport: Viewport = {
  themeColor: "#ec3750",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider>
          <EmotionRegistry>
            <Providers>{children}</Providers>
          </EmotionRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
