'use client'

import dynamic from 'next/dynamic'

const LocalePage = dynamic(() => import('./LocalePage'), { ssr: false })

export default function LocalePageClient() {
  return <LocalePage />
}
