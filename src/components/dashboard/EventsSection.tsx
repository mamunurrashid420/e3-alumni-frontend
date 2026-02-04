import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { apiClient } from '@/api/client'
import type { Event } from '@/types/api'
import { cn } from '@/lib/utils'

function formatEventDate(iso: string) {
  const d = new Date(iso)
  return {
    date: d.getDate().toString(),
    month: d.toLocaleString('en-US', { month: 'short' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

export function EventsSection() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiClient
      .getEvents({ status: 'open', upcoming: true })
      .then((res) => setEvents(res.data))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-black">Events</h3>
        <Calendar className="w-5 h-5 text-black/70" />
      </div>

      {loading ? (
        <p className="text-sm text-black-600">Loading...</p>
      ) : events.length === 0 ? (
        <p className="text-sm text-black-600">No upcoming events.</p>
      ) : (
        <div className="space-y-4">
          {events.slice(0, 4).map((event) => {
            const start = formatEventDate(event.start_at)
            return (
              <div
                key={event.id}
                className={cn(
                  'border rounded-lg p-4 transition-colors flex flex-col sm:flex-row sm:items-center gap-3',
                  'border-gray-200 hover:border-gray-300'
                )}
              >
                <Link
                  to="/dashboard/events/$id"
                  params={{ id: String(event.id) }}
                  search={{}}
                  className="flex-1 flex gap-4 min-w-0 no-underline text-inherit"
                >
                  <div className="shrink-0 text-center">
                    <div className="text-2xl font-bold text-black">{start.date}</div>
                    <div className="text-xs text-black/70 uppercase">{start.month}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-black mb-1 truncate">{event.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-black/70 mb-1">
                      <Clock className="w-3 h-3 shrink-0" />
                      <span>{start.time}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2 text-xs text-black/70">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    )}
                    {event.registration_count !== undefined && (
                      <p className="text-xs text-black-500 mt-1">{event.registration_count} registered</p>
                    )}
                  </div>
                </Link>
                <Link
                  to="/dashboard/events/$id"
                  params={{ id: String(event.id) }}
                  search={{ register: '1' }}
                  className="shrink-0 text-sm font-medium text-primary-custom hover:underline"
                >
                  Register
                </Link>
              </div>
            )
          })}
        </div>
      )}

      <Link
        to="/dashboard/events"
        className="block text-center text-sm text-primary-custom hover:underline font-medium mt-6"
      >
        View All
      </Link>
    </div>
  )
}
