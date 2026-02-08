import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate, useRouterState } from '@tanstack/react-router'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { apiClient } from '@/api/client'
import type { Event as EventType } from '@/types/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/authStore'
import { PhotoViewer } from '@/components/PhotoViewer'


function formatDateTime(iso: string) {
  const d = new Date(iso)
  return {
    date: d.getDate().toString(),
    month: d.toLocaleString('en-US', { month: 'short' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
    full: d.toLocaleString(),
  }
}

interface EventDetailProps {
  dashboardContext?: boolean
}

export function EventDetail({ dashboardContext = false }: EventDetailProps) {
  const params = useParams({ strict: false })
  const id = params?.id
  const navigate = useNavigate()
  const { pathname, search } = useRouterState({ select: (s) => s.location })
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const [event, setEvent] = useState<EventType | null>(null)
  const [loading, setLoading] = useState(true)
  const [registering, setRegistering] = useState(false)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [guestCount, setGuestCount] = useState(0)
  const [notes, setNotes] = useState('')
  const [guestName, setGuestName] = useState('')
  const [guestPhone, setGuestPhone] = useState('')
  const [guestAddress, setGuestAddress] = useState('')
  const [guestSscJsc, setGuestSscJsc] = useState('')
  const [photoViewerOpen, setPhotoViewerOpen] = useState(false)
  const [photoViewerSrc, setPhotoViewerSrc] = useState<string | null>(null)
  const [photoViewerAlt, setPhotoViewerAlt] = useState('')

  const eventsBasePath = dashboardContext ? '/dashboard/events' : '/events'

  useEffect(() => {
    if (!id) return
    const n = parseInt(id, 10)
    if (Number.isNaN(n)) {
      setLoading(false)
      return
    }
    apiClient
      .getEvent(n)
      .then((res) => setEvent(res.data))
      .catch(() => setEvent(null))
      .finally(() => setLoading(false))
  }, [id])

  // Redirect logged-in users from public event page with ?register=1 to dashboard
  useEffect(() => {
    if (dashboardContext || !isAuthenticated || !id) return
    if (pathname === `/events/${id}` && (search as { register?: string })?.register === '1') {
      navigate({ to: '/dashboard/events/$id', params: { id }, search: { register: '1' } })
    }
  }, [dashboardContext, isAuthenticated, id, pathname, search, navigate])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('register=1')) {
      setShowRegistrationForm(true)
    }
  }, [])

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!event || registering) return
    setRegistering(true)
    try {
      await apiClient.registerForEvent(event.id, {
        guest_count: guestCount || undefined,
        notes: notes.trim() || undefined,
      })
      toast.success('Registered successfully.')
      setShowRegistrationForm(false)
      setGuestCount(0)
      setNotes('')
      const res = await apiClient.getEvent(event.id)
      setEvent(res.data)
    } catch (err: unknown) {
      const msg = err && typeof err === 'object' && 'message' in err ? (err as { message: string }).message : 'Failed to register'
      toast.error(msg)
    } finally {
      setRegistering(false)
    }
  }

  const handleGuestRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!event || registering) return
    setRegistering(true)
    try {
      await apiClient.registerGuestForEvent(event.id, {
        name: guestName.trim(),
        phone: guestPhone.trim(),
        address: guestAddress.trim(),
        ssc_jsc: guestSscJsc.trim() || undefined,
      })
      toast.success('Registered successfully.')
      setShowRegistrationForm(false)
      setGuestName('')
      setGuestPhone('')
      setGuestAddress('')
      setGuestSscJsc('')
      const res = await apiClient.getEvent(event.id)
      setEvent(res.data)
    } catch (err: unknown) {
      const msg =
        err && typeof err === 'object' && 'message' in err ? (err as { message: string }).message : 'Registration failed'
      toast.error(msg)
    } finally {
      setRegistering(false)
    }
  }

  const handleUnregister = async () => {
    if (!event || registering) return
    setRegistering(true)
    try {
      await apiClient.unregisterFromEvent(event.id)
      toast.success('Unregistered.')
      const res = await apiClient.getEvent(event.id)
      setEvent(res.data)
    } catch (err: unknown) {
      const msg = err && typeof err === 'object' && 'message' in err ? (err as { message: string }).message : 'Failed to unregister'
      toast.error(msg)
    } finally {
      setRegistering(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-black-600">
        Loading...
      </div>
    )
  }

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-black-600 mb-4">Event not found.</p>
        <Link to={eventsBasePath} className="text-primary-custom hover:underline">
          Back to events
        </Link>
      </div>
    )
  }

  const eventDateTime = formatDateTime(event.event_at)
  const isOpen = event.status === 'open'
  const isClosed = event.status === 'closed'

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to={eventsBasePath} search={{}} className="text-primary-custom hover:underline text-sm mb-6 inline-block">
        Back to events
      </Link>

      {event.cover_photo && (
        <button
          type="button"
          onClick={() => {
            setPhotoViewerSrc(event.cover_photo ?? null)
            setPhotoViewerAlt(event.title)
            setPhotoViewerOpen(true)
          }}
          className="block w-full rounded-lg overflow-hidden text-left mb-6"
        >
          <img
            src={event.cover_photo}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-95"
          />
        </button>
      )}
      <PhotoViewer
        open={photoViewerOpen}
        onClose={() => setPhotoViewerOpen(false)}
        src={photoViewerSrc}
        alt={photoViewerAlt}
      />

      <h1 className="text-2xl font-semibold text-black mb-4">{event.title}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-black-600 mb-4">
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {eventDateTime.date} {eventDateTime.month}, {eventDateTime.time}
        </span>
        {isOpen && new Date(event.registration_closes_at) > new Date() && (
          <span className="flex items-center gap-2 text-primary-custom font-medium">
            <Clock className="w-4 h-4" />
            Register by {new Date(event.registration_closes_at).toLocaleString()}
          </span>
        )}
        {event.location && (
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {event.location}
          </span>
        )}
      </div>

      {event.description && (
        <div className="prose prose-sm text-black-700 mb-6 whitespace-pre-wrap">
          {event.description}
        </div>
      )}

      {isOpen && (
        <div className="mb-6">
          {isAuthenticated ? (
            event.is_registered ? (
              <Button
                variant="outline"
                onClick={handleUnregister}
                disabled={registering}
              >
                {registering ? 'Please wait...' : 'Unregister'}
              </Button>
            ) : showRegistrationForm ? (
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 max-w-md">
                <h3 className="font-semibold text-black mb-3">Event registration</h3>
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="guest_count" className="block text-sm font-medium text-black-700 mb-1">
                      Number of guests (optional)
                    </label>
                    <Input
                      id="guest_count"
                      type="number"
                      min={0}
                      max={50}
                      value={guestCount || ''}
                      onChange={(e) => setGuestCount(parseInt(e.target.value, 10) || 0)}
                      className="max-w-[120px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-black-700 mb-1">
                      Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Dietary requirements, special requests..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" disabled={registering}>
                      {registering ? 'Submitting...' : 'Submit registration'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowRegistrationForm(false)}
                      disabled={registering}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <Button onClick={() => setShowRegistrationForm(true)}>
                Register for this event
              </Button>
            )
          ) : showRegistrationForm ? (
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 max-w-md">
              <h3 className="font-semibold text-black mb-3">Register as guest</h3>
              <form onSubmit={handleGuestRegisterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="guest_name" className="block text-sm font-medium text-black-700 mb-1">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="guest_name"
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="guest_phone" className="block text-sm font-medium text-black-700 mb-1">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="guest_phone"
                    type="text"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="Phone number"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="guest_address" className="block text-sm font-medium text-black-700 mb-1">
                    Address <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="guest_address"
                    rows={2}
                    value={guestAddress}
                    onChange={(e) => setGuestAddress(e.target.value)}
                    placeholder="Your address"
                    required
                    className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div>
                  <label htmlFor="guest_ssc_jsc" className="block text-sm font-medium text-black-700 mb-1">
                    SSC / JSC (optional)
                  </label>
                  <Input
                    id="guest_ssc_jsc"
                    type="text"
                    value={guestSscJsc}
                    onChange={(e) => setGuestSscJsc(e.target.value)}
                    placeholder="e.g. SSC 2010, JSC 2012"
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={registering}>
                    {registering ? 'Submitting...' : 'Submit registration'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowRegistrationForm(false)}
                    disabled={registering}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <Button onClick={() => setShowRegistrationForm(true)}>Register for this event</Button>
          )}
          {event.registration_count !== undefined && (
            <p className="text-sm text-black-500 mt-2">
              {event.registration_count} registered
            </p>
          )}
        </div>
      )}

      {isClosed && event.photos && event.photos.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-black mb-4">Event gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {event.photos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => {
                  setPhotoViewerSrc(photo.url)
                  setPhotoViewerAlt('')
                  setPhotoViewerOpen(true)
                }}
                className="w-full rounded-lg overflow-hidden text-left"
              >
                <img
                  src={photo.url}
                  alt=""
                  className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-95"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
