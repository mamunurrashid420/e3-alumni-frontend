import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { LayoutDashboard, User, CreditCard, Settings, LogOut, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavigationItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: CreditCard, label: 'Payment', href: '/payment' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Navigation() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
      {/* Header with Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#3B60C9] flex items-center justify-center">
            <span className="text-white font-bold text-lg">JS</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xs font-semibold text-[#3B60C9] leading-tight">
              JAHAPUR SECONDARY SCHOOL
            </h2>
            <h3 className="text-xs font-semibold text-[#3B60C9] leading-tight">
              ALUMNI ASSOCIATION
            </h3>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.href

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative',
                    isActive
                      ? 'bg-[#E8F0FE] text-[#3B60C9] font-medium'
                      : 'text-black hover:bg-gray-50'
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3B60C9] rounded-r-full" />
                  )}
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
    </>
  )
}
