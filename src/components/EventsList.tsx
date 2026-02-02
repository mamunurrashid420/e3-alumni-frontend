import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Clock, MapPin } from 'lucide-react'
import { apiClient } from '@/api/client'
import type { Event } from '@/types/api'
import { useAuthStore } from '@/stores/authStore'
import { RecentNewsSection } from '@/components/ui/homepage/RecentNewsSection'

function formatEventDate(iso: string) {
  const d = new Date(iso)
  return {
    date: d.getDate().toString(),
    month: d.toLocaleString('en-US', { month: 'short' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

function eventDetailPath(dashboardContext: boolean, isAuthenticated: boolean): '/dashboard/events/$id' | '/events/$id' {
  return dashboardContext || isAuthenticated ? '/dashboard/events/$id' : '/events/$id'
}

function EventCard({
  event,
  dashboardContext,
  isAuthenticated,
}: {
  event: Event
  dashboardContext: boolean
  isAuthenticated: boolean
}) {
  const start = formatEventDate(event.start_at)
  const isOpen = event.status === 'open'
  const toPath = eventDetailPath(dashboardContext, isAuthenticated)
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col sm:flex-row sm:items-center gap-3">
      <Link
        to={toPath}
        params={{ id: String(event.id) }}
        search={{ register: undefined }}
        className="flex-1 flex gap-4 min-w-0 no-underline text-inherit"
      >
        <div className="shrink-0 w-14 text-center bg-gray-100 rounded py-2">
          <div className="text-xl font-bold text-black">{start.date}</div>
          <div className="text-xs text-gray-600 uppercase">{start.month}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-black mb-1 truncate">{event.title}</h3>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Clock className="w-3 h-3 shrink-0" />
            <span>{start.time}</span>
          </div>
          {event.location && (
            <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          )}
          {event.registration_count !== undefined && isOpen && (
            <p className="text-xs text-gray-500 mt-1">{event.registration_count} registered</p>
          )}
        </div>
      </Link>
      {isOpen && (
        <Link
          to={toPath}
          params={{ id: String(event.id) }}
          search={{ register: '1' }}
          className="shrink-0 text-sm font-medium text-primary-custom hover:underline"
        >
          Register
        </Link>
      )}
    </div>
  )
}

interface EventsListProps {
  dashboardContext?: boolean
}

export function EventsList({ dashboardContext = false }: EventsListProps) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const [upcoming, setUpcoming] = useState<Event[]>([])
  const [past, setPast] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      apiClient.getEvents({ status: 'open', upcoming: true }),
      apiClient.getEvents({ status: 'closed' }),
    ])
      .then(([upRes, pastRes]) => {
        setUpcoming(upRes.data)
        setPast(pastRes.data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="relative w-full overflow-x-hidden">
      {!dashboardContext && <RecentNewsSection />}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-black mb-6">Upcoming events</h2>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : upcoming.length === 0 ? (
          <p className="text-gray-600">No upcoming events.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {upcoming.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                dashboardContext={dashboardContext}
                isAuthenticated={isAuthenticated}
              />
            ))}
          </div>
        )}

        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Past events</h2>
        {loading ? null : past.length === 0 ? (
          <p className="text-gray-600">No past events.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {past.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                dashboardContext={dashboardContext}
                isAuthenticated={isAuthenticated}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
