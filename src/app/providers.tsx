"use client"

import { ThemeUIProvider, Theme, InitializeColorMode } from 'theme-ui'
import theme from '@hackclub/theme'

const darkTheme = {
  ...theme,
  colors: { ...theme.colors, ...(theme.colors as any).modes?.dark, modes: {} }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeUIProvider theme={darkTheme as Theme}>
      <InitializeColorMode />
      {children}
    </ThemeUIProvider>
  )
}
