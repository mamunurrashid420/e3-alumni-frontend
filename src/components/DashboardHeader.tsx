import { Calendar, Bell, User } from 'lucide-react'
import { Link } from '@tanstack/react-router'

interface DashboardHeaderProps {
  title: string
  subtitle?: string
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  const formatDate = (date: Date): string => {
    const day = date.getDate()
    const suffix =
      day === 1 || day === 21 || day === 31
        ? 'st'
        : day === 2 || day === 22
          ? 'nd'
          : day === 3 || day === 23
            ? 'rd'
            : 'th'
    const month = date.toLocaleDateString('en-GB', { month: 'long' })
    const year = date.getFullYear()
    return `${day}${suffix} ${month}, ${year}`
  }

  const currentDate = formatDate(new Date())

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Title */}
        <div>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
          {subtitle && (
            <p className="text-sm text-black/70 mt-1">{subtitle}</p>
          )}
        </div>

        {/* Right: Date, Profile, Notifications */}
        <div className="flex items-center gap-6">
          {/* Date */}
          <div className="flex items-center gap-2 text-black">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">{currentDate}</span>
          </div>

          {/* Profile Link */}
          <Link
            to="/profile"
            className="flex items-center gap-2 text-black hover:text-[#3B60C9] transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Profile</span>
          </Link>

          {/* Notifications */}
          <button className="relative text-black hover:text-[#3B60C9] transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  )
}
