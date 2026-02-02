import type { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScholarshipApplyModalProvider, useScholarshipApplyModal } from '@/contexts/ScholarshipApplyModalContext'
import { ScholarshipApplicationModal } from '@/components/ScholarshipApplicationModal'

interface HomepageLayoutProps {
  children: ReactNode
}

function HomepageLayoutContent({ children }: HomepageLayoutProps) {
  const { isOpen, closeModal } = useScholarshipApplyModal()
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ScholarshipApplicationModal open={isOpen} onClose={closeModal} />
    </div>
  )
}

export function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <ScholarshipApplyModalProvider>
      <HomepageLayoutContent>{children}</HomepageLayoutContent>
    </ScholarshipApplyModalProvider>
  )
}
