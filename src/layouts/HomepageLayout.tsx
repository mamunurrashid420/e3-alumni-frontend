import type { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface HomepageLayoutProps {
  children: ReactNode
}

export function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
