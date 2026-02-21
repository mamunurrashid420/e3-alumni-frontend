import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Clock, MapPin } from 'lucide-react'
import { apiClient } from '@/api/client'
import type { Event } from '@/types/api'
import { useAuthStore } from '@/stores/authStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { PhotoViewer } from '@/components/PhotoViewer'

interface UpcomingEventsSectionProps {
  events: Event[]
  loading: boolean
}

function formatEventDate(iso: string) {
  const d = new Date(iso)
  return {
    date: d.getDate().toString(),
    month: d.toLocaleString('en-US', { month: 'short' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

function getCountdownToDeadline(deadlineIso: string): string {
  const deadline = new Date(deadlineIso).getTime()
  const now = Date.now()
  const diff = deadline - now
  if (diff <= 0) return 'Registration closed'
  const days = Math.floor(diff / (24 * 60 * 60 * 1000))
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  if (days > 0) return `${days}d ${hours}h left to register`
  if (hours > 0) return `${hours}h left to register`
  const mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
  return `${mins}m left to register`
}

interface EventItemProps {
  event: Event
  isAuthenticated: boolean
  onGuestRegister?: (event: Event) => void
}

function EventItem({ event, isAuthenticated, onGuestRegister }: EventItemProps) {
  const eventDate = formatEventDate(event.event_at)
  const registerTo = isAuthenticated
    ? { to: '/dashboard/events/$id' as const, params: { id: String(event.id) }, search: { register: '1' } }
    : null

  return (
    <div className="w-full max-w-[406px] min-h-[90px] flex flex-col sm:flex-row gap-3 sm:gap-5 mb-6 sm:mb-8">
      <Link
        to={isAuthenticated ? '/dashboard/events/$id' : '/events/$id'}
        params={{ id: String(event.id) }}
        search={{ register: undefined }}
        className="flex-1 flex gap-3 sm:gap-5 no-underline text-inherit hover:opacity-90 min-w-0"
      >
        <div className="shrink-0 w-[70px] h-[90px] flex flex-col items-center justify-center bg-[#F2F2F2]">
          <div className="text-2xl font-bold leading-[30px] text-black">
            {eventDate.date}
          </div>
          <div className="text-xs leading-[22px] capitalize text-black">
            {eventDate.month}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold leading-[24px] capitalize mb-2 text-black wrap-break-word">
            {event.title}
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-[14px] h-[14px] text-black shrink-0" />
              <span className="text-sm leading-[20px] text-[#666666]">
                {eventDate.time}
              </span>
            </div>
            <div className="text-xs font-medium text-primary-custom leading-[20px]">
              {getCountdownToDeadline(event.registration_closes_at)}
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-[14px] h-[14px] text-black shrink-0" />
                <span className="text-sm leading-[20px] text-[#666666] truncate">
                  {event.location}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
      {registerTo ? (
        <Link
          to={registerTo.to}
          params={registerTo.params}
          search={registerTo.search}
          className="shrink-0 self-center sm:self-center text-sm font-medium text-primary-custom hover:underline py-2"
        >
          Register
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => onGuestRegister?.(event)}
          className="shrink-0 self-center sm:self-center text-sm font-medium text-primary-custom hover:underline bg-transparent border-none cursor-pointer py-2"
        >
          Register
        </button>
      )}
    </div>
  )
}

export function UpcomingEventsSection({ events, loading }: UpcomingEventsSectionProps) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const [guestModalEvent, setGuestModalEvent] = useState<Event | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [sscJsc, setSscJsc] = useState('')
  const [guestCount, setGuestCount] = useState(0)
  const [guestDetails, setGuestDetails] = useState('')
  const [participantFee, setParticipantFee] = useState<number | ''>('')
  const [totalFees, setTotalFees] = useState<number | ''>('')
  const [paymentDocument, setPaymentDocument] = useState<File | null>(null)
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [photoViewerOpen, setPhotoViewerOpen] = useState(false)
  const [photoViewerSrc, setPhotoViewerSrc] = useState<string | null>(null)
  const [photoViewerAlt, setPhotoViewerAlt] = useState('')

  const handleGuestRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!guestModalEvent || submitting) return
    setSubmitting(true)
    try {
      await apiClient.registerGuestForEvent(guestModalEvent.id, {
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
        ssc_jsc: sscJsc.trim() || undefined,
        guest_count: guestCount || undefined,
        guest_details: guestDetails.trim() || undefined,
        participant_fee: guestModalEvent.fee ?? (participantFee === '' ? undefined : Number(participantFee)),
        total_fees: guestModalEvent.fee != null ? guestModalEvent.fee * (1 + guestCount) : (totalFees === '' ? undefined : Number(totalFees)),
        payment_document: paymentDocument ?? undefined,
        notes: notes.trim() || undefined,
      })
      toast.success('Registered successfully.')
      closeGuestModal()
    } catch (err: unknown) {
      const msg =
        err && typeof err === 'object' && 'message' in err ? (err as { message: string }).message : 'Registration failed'
      toast.error(msg)
    } finally {
      setSubmitting(false)
    }
  }

  const closeGuestModal = () => {
    setGuestModalEvent(null)
    setName('')
    setPhone('')
    setAddress('')
    setSscJsc('')
    setGuestCount(0)
    setGuestDetails('')
    setParticipantFee('')
    setTotalFees('')
    setPaymentDocument(null)
    setNotes('')
  }

  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[320px]">
      {/* Guest registration modal (homepage) */}
      {guestModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-black mb-1">Event registration</h3>
            <p className="text-sm text-black-600 mb-4 font-medium">{guestModalEvent.title}</p>
            <form onSubmit={handleGuestRegisterSubmit} className="space-y-4">
              <div>
                <label htmlFor="guest_name_modal" className="block text-sm font-medium text-black-700 mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <Input
                  id="guest_name_modal"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="guest_phone_modal" className="block text-sm font-medium text-black-700 mb-1">
                  Mobile number <span className="text-red-600">*</span>
                </label>
                <Input
                  id="guest_phone_modal"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile number"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="guest_ssc_jsc_modal" className="block text-sm font-medium text-black-700 mb-1">
                  SSC Batch
                </label>
                <Input
                  id="guest_ssc_jsc_modal"
                  type="text"
                  value={sscJsc}
                  onChange={(e) => setSscJsc(e.target.value)}
                  placeholder="e.g. SSC 2010"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="guest_address_modal" className="block text-sm font-medium text-black-700 mb-1">
                  Address <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="guest_address_modal"
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  required
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div>
                <label htmlFor="guest_count_modal" className="block text-sm font-medium text-black-700 mb-1">
                  Guest numbers
                </label>
                <Input
                  id="guest_count_modal"
                  type="number"
                  min={0}
                  max={50}
                  value={guestCount || ''}
                  onChange={(e) => setGuestCount(parseInt(e.target.value, 10) || 0)}
                  className="max-w-[120px]"
                />
              </div>
              <div>
                <label htmlFor="guest_details_modal" className="block text-sm font-medium text-black-700 mb-1">
                  Guest details
                </label>
                <textarea
                  id="guest_details_modal"
                  rows={2}
                  value={guestDetails}
                  onChange={(e) => setGuestDetails(e.target.value)}
                  placeholder="Names or details of guests (optional)"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">
                  Event fee (per person)
                </label>
                {guestModalEvent.fee != null ? (
                  <p className="text-sm text-black-600 bg-muted/50 rounded-md px-3 py-2 max-w-[200px]">{guestModalEvent.fee} (same for you and each guest)</p>
                ) : (
                  <Input
                    id="participant_fee_modal"
                    type="number"
                    min={0}
                    step={0.01}
                    value={participantFee === '' ? '' : participantFee}
                    onChange={(e) => setParticipantFee(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="Optional"
                    className="max-w-[160px]"
                  />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-black-700 mb-1">
                  Total fees
                </label>
                {guestModalEvent.fee != null ? (
                  <p className="text-sm text-black-600 bg-muted/50 rounded-md px-3 py-2 max-w-[200px]">{guestModalEvent.fee * (1 + guestCount)} ({guestModalEvent.fee} × {1 + guestCount} person(s))</p>
                ) : (
                  <Input
                    id="total_fees_modal"
                    type="number"
                    min={0}
                    step={0.01}
                    value={totalFees === '' ? '' : totalFees}
                    onChange={(e) => setTotalFees(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="Optional total amount"
                    className="max-w-[160px]"
                  />
                )}
              </div>
              <div>
                <label htmlFor="payment_document_modal" className="block text-sm font-medium text-black-700 mb-1">
                  Upload payment documents
                </label>
                <Input
                  id="payment_document_modal"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setPaymentDocument(e.target.files?.[0] ?? null)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="notes_modal" className="block text-sm font-medium text-black-700 mb-1">
                  Notes (optional)
                </label>
                <textarea
                  id="notes_modal"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Dietary requirements, special requests..."
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit registration'}
                </Button>
                <Button type="button" variant="outline" onClick={closeGuestModal} disabled={submitting}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-10 min-w-0">
        <div className="flex flex-col gap-8 md:gap-10 w-full min-w-0 max-w-[406px]">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight md:leading-[40px] uppercase text-black">
            Upcoming Events
          </h2>
          {loading ? (
            <p className="text-black-600">Loading...</p>
          ) : events.length === 0 ? (
            <p className="text-black-600">No upcoming events.</p>
          ) : (
            <div className="flex flex-col gap-8">
              {events.slice(0, 3).map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  isAuthenticated={isAuthenticated}
                  onGuestRegister={setGuestModalEvent}
                />
              ))}
            </div>
          )}
          <Link
            to="/events"
            className="text-base font-semibold capitalize text-black hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-4">
            {events
              .filter((e) => e.cover_photo)
              .slice(0, 4)
              .map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => {
                    setPhotoViewerSrc(event.cover_photo ?? null)
                    setPhotoViewerAlt(event.title)
                    setPhotoViewerOpen(true)
                  }}
                  className="w-full rounded-lg overflow-hidden text-left"
                >
                  <img
                    src={event.cover_photo!}
                    alt={event.title}
                    className="w-full h-[230px] object-cover rounded-lg cursor-pointer hover:opacity-95"
                  />
                </button>
              ))}
          </div>
        </div>
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
