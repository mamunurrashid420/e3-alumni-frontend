import type { ReactNode } from 'react'
import { Navigation } from '@/components/Navigation'
import { DashboardHeader } from '@/components/DashboardHeader'

interface UserSpaceLayoutProps {
  children: ReactNode
  title?: string
  subtitle?: string
}

export function UserSpaceLayout({
  children,
  title = 'Dashboard',
  subtitle = 'User Information And Details',
}: UserSpaceLayoutProps) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Navigation />
      <div className="flex-1 lg:ml-64 flex flex-col">
        <DashboardHeader title={title} subtitle={subtitle} />
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
