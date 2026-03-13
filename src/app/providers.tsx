"use client";

import { ThemeUIProvider, Theme } from "theme-ui";
import theme from "@hackclub/theme";

const darkTheme = {
  ...theme,
  colors: { ...theme.colors, ...(theme.colors as any).modes?.light, modes: {} }
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeUIProvider theme={darkTheme as Theme}>{children}</ThemeUIProvider>
  );
}
