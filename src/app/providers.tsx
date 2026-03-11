'use client'

import { ThemeUIProvider, Theme } from 'theme-ui'
import theme from '@hackclub/theme'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeUIProvider
      theme={theme as Theme}
    >
      {children}
    </ThemeUIProvider>
  )
}
