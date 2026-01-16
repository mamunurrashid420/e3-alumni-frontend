import { Calendar, Clock, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Event {
  id: string
  date: string
  month: string
  title: string
  isActive?: boolean
  status?: string
  time: string
  location: string
}

const events: Event[] = [
  {
    id: '1',
    date: '23',
    month: 'Dec',
    title: 'Get Together Event',
    isActive: true,
    status: 'Happening right now',
    time: '12:00 am - 5:00 pm',
    location: 'Birmingham, UK',
  },
  {
    id: '2',
    date: '23',
    month: 'Dec',
    title: 'Alumni General Meeting',
    time: '12:00 am - 5:00 pm',
    location: 'Birmingham, UK',
  },
  {
    id: '3',
    date: '23',
    month: 'Dec',
    title: 'Blood Donation Campaign',
    time: '12:00 am - 5:00 pm',
    location: 'Birmingham, UK',
  },
  {
    id: '4',
    date: '23',
    month: 'Dec',
    title: 'Warm Cloths Donation',
    time: '12:00 am - 5:00 pm',
    location: 'Birmingham, UK',
  },
]

export function EventsSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-black">Events</h3>
        <Calendar className="w-5 h-5 text-black/70" />
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={cn(
              'border rounded-lg p-4 transition-colors',
              event.isActive
                ? 'border-green-500 bg-green-50/50'
                : 'border-gray-200 hover:border-gray-300'
            )}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-center">
                <div className="text-2xl font-bold text-black">
                  {event.date}
                </div>
                <div className="text-xs text-black/70 uppercase">
                  {event.month}
                </div>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-black mb-1">
                  {event.title}
                </h4>
                {event.status && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs text-green-600 font-medium">
                      {event.status}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-black/70 mb-1">
                  <Clock className="w-3 h-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-black/70">
                  <MapPin className="w-3 h-3" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="block text-center text-sm text-[#3B60C9] hover:underline font-medium mt-6"
      >
        View All
      </a>
    </div>
  )
}
