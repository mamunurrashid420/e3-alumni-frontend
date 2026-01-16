import { Image, Phone, Calendar, Bell } from 'lucide-react'

interface Notification {
  id: string
  icon: React.ComponentType<{ className?: string }>
  message: string
  time: string
}

const notifications: Notification[] = [
  {
    id: '1',
    icon: Image,
    message: 'Your photo has been updated successfully',
    time: '1 day ago',
  },
  {
    id: '2',
    icon: Phone,
    message: 'Your Contact number has been updated successfully.',
    time: '1 day ago',
  },
  {
    id: '3',
    icon: Calendar,
    message: 'Congratulation! Your registration has been successfully completed.',
    time: '1 day ago',
  },
  {
    id: '4',
    icon: Calendar,
    message: 'You have a new upcoming event on 20th March Friday, 2026',
    time: '1 day ago',
  },
]

export function NotificationsSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-black" />
        <h3 className="text-lg font-semibold text-black">
          Notification & Notices
        </h3>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon
          return (
            <div
              key={notification.id}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-black/70" />
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-black mb-1">{notification.message}</p>
                <p className="text-xs text-black/60">{notification.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
