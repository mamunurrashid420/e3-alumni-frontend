import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Clock, MapPin } from 'lucide-react'
import { apiClient } from '@/api/client'
import type { Event } from '@/types/api'
import { useAuthStore } from '@/stores/authStore'
import { PhotoViewer } from '@/components/PhotoViewer'

function formatEventDate(iso: string) {
  const d = new Date(iso)
  return {
    date: d.getDate().toString(),
    month: d.toLocaleString('en-US', { month: 'short' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

function eventDetailPath(isAuthenticated: boolean): '/dashboard/events/$id' | '/events/$id' {
  return isAuthenticated ? '/dashboard/events/$id' : '/events/$id'
}

function EventCard({
  event,
  isAuthenticated,
  onViewPhoto,
}: {
  event: Event
  isAuthenticated: boolean
  onViewPhoto?: (src: string, alt: string) => void
}) {
  const eventDate = formatEventDate(event.event_at)
  const isOpen = event.status === 'open'
  const toPath = eventDetailPath(isAuthenticated)

  return (
    <div
      className="border border-gray-200 rounded-[9.26px] overflow-hidden hover:border-gray-300 transition-colors flex flex-col w-full max-w-[411px]"
      style={{
        background: '#FFFFFF',
        boxShadow: '0px 9.26px 13.89px rgba(8, 14, 28, 0.06)',
      }}
    >
      {event.cover_photo && (
        <Link
          to={toPath}
          params={{ id: String(event.id) }}
          search={{}}
          className="no-underline block relative"
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onViewPhoto?.(event.cover_photo!, event.title)
            }}
            className="absolute inset-0 w-full h-full z-10 cursor-pointer hover:opacity-95 transition-opacity"
            aria-label="View full size photo"
          />
          <div
            className="w-full h-[263px] relative"
            style={{
              backgroundImage: `url(${event.cover_photo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Link>
      )}

      <div className="p-4 flex flex-col gap-3">
        <Link
          to={toPath}
          params={{ id: String(event.id) }}
          search={{}}
          className="flex-1 flex gap-4 min-w-0 no-underline text-inherit"
        >
          <div className="shrink-0 w-14 text-center bg-gray-100 rounded py-2">
            <div className="text-xl font-bold text-black">{eventDate.date}</div>
            <div className="text-xs text-black-600 uppercase">{eventDate.month}</div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-black mb-1 truncate">{event.title}</h3>
            <div className="flex items-center gap-2 text-xs text-black-600">
              <Clock className="w-3 h-3 shrink-0" />
              <span>{eventDate.time}</span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2 text-xs text-black-600 mt-0.5">
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
            )}
            {event.registration_count !== undefined && isOpen && (
              <p className="text-xs text-black-500 mt-1">{event.registration_count} registered</p>
            )}
          </div>
        </Link>
        {isOpen && (
          <Link
            to={toPath}
            params={{ id: String(event.id) }}
            search={{ register: '1' }}
            className="shrink-0 text-sm font-medium text-primary-custom hover:underline self-start"
          >
            Register
          </Link>
        )}
      </div>
    </div>
  )
}

export function NewsAndEventsEventsSection() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const [upcoming, setUpcoming] = useState<Event[]>([])
  const [past, setPast] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [photoViewerOpen, setPhotoViewerOpen] = useState(false)
  const [photoViewerSrc, setPhotoViewerSrc] = useState<string | null>(null)
  const [photoViewerAlt, setPhotoViewerAlt] = useState('')

  const handleViewPhoto = (src: string, alt: string) => {
    setPhotoViewerSrc(src)
    setPhotoViewerAlt(alt)
    setPhotoViewerOpen(true)
  }

  useEffect(() => {
    Promise.all([
      apiClient.getEvents({ status: 'open', upcoming: true }),
      apiClient.getEvents({ status: 'closed' }),
    ])
      .then(([upRes, pastRes]) => {
        setUpcoming(upRes.data)
        setPast(pastRes.data.slice(0, 3))
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[320px]">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight md:leading-[40px] uppercase text-black">
            Events
          </h2>
          <Link
            to="/events"
            className="text-base font-semibold capitalize text-primary-custom hover:underline"
          >
            View all
          </Link>
        </div>

        {loading ? (
          <p className="text-black-600">Loading...</p>
        ) : upcoming.length === 0 && past.length === 0 ? (
          <p className="text-black-600">No events.</p>
        ) : (
          <div className="flex flex-col gap-12">
            {upcoming.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-black mb-6">Upcoming events</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
                  {upcoming.slice(0, 3).map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      isAuthenticated={isAuthenticated}
                      onViewPhoto={handleViewPhoto}
                    />
                  ))}
                </div>
              </div>
            )}
            {past.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-black mb-6">Past events</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
                  {past.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      isAuthenticated={isAuthenticated}
                      onViewPhoto={handleViewPhoto}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <PhotoViewer
        open={photoViewerOpen}
        onClose={() => setPhotoViewerOpen(false)}
        src={photoViewerSrc}
        alt={photoViewerAlt}
      />
    </section>
  )
}
