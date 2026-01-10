import type { ReactNode } from 'react'
import { Sidebar } from '@/components/Sidebar'

interface UserSpaceLayoutProps {
  children: ReactNode
}

export function UserSpaceLayout({ children }: UserSpaceLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 lg:ml-0">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
