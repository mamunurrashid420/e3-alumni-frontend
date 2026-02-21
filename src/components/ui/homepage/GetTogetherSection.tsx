import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react'
import { apiClient } from '@/api/client'
import type { Event } from '@/types/api'
import { useAuthStore } from '@/stores/authStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

function formatEventDate(iso: string) {
  const d = new Date(iso)
  return {
    date: d.getDate().toString(),
    month: d.toLocaleString('en-US', { month: 'short' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

interface GetTogetherSectionProps {
  events: Event[]
  loading: boolean
  currentIndex: number
  onPrev: () => void
  onNext: () => void
}

export function GetTogetherSection({ events, loading, currentIndex, onPrev, onNext }: GetTogetherSectionProps) {
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

  const currentEvent = events[currentIndex]
  const hasMultiple = events.length > 1

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!currentEvent?.registration_closes_at) return
    const deadline = new Date(currentEvent.registration_closes_at).getTime()

    const update = () => {
      const now = Date.now()
      const diff = Math.max(0, deadline - now)
      if (diff === 0) {
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        return
      }
      const d = Math.floor(diff / (24 * 60 * 60 * 1000))
      const h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
      const s = Math.floor((diff % (60 * 1000)) / 1000)
      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }

    update()
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') update()
    }, 1000)

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') update()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [currentEvent?.id, currentEvent?.registration_closes_at])

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
        err && typeof err === 'object' && 'message' in err
          ? (err as { message: string }).message
          : 'Registration failed'
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
    <div className="flex flex-col h-full justify-center px-4 md:px-6 lg:px-8 py-4 md:py-6">
      {/* Guest registration modal */}
      {guestModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-black mb-1">Event registration</h3>
            <p className="text-sm text-black/70 mb-4 font-medium">{guestModalEvent.title}</p>
            <form onSubmit={handleGuestRegisterSubmit} className="space-y-4">
              <div>
                <label htmlFor="gettogether_guest_name" className="block text-sm font-medium text-black mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <Input
                  id="gettogether_guest_name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="gettogether_guest_phone" className="block text-sm font-medium text-black mb-1">
                  Mobile number <span className="text-red-600">*</span>
                </label>
                <Input
                  id="gettogether_guest_phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile number"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="gettogether_guest_ssc_jsc" className="block text-sm font-medium text-black mb-1">
                  SSC Batch
                </label>
                <Input
                  id="gettogether_guest_ssc_jsc"
                  type="text"
                  value={sscJsc}
                  onChange={(e) => setSscJsc(e.target.value)}
                  placeholder="e.g. SSC 2010"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="gettogether_guest_address" className="block text-sm font-medium text-black mb-1">
                  Address <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="gettogether_guest_address"
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  required
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div>
                <label htmlFor="gettogether_guest_count" className="block text-sm font-medium text-black mb-1">
                  Guest numbers
                </label>
                <Input
                  id="gettogether_guest_count"
                  type="number"
                  min={0}
                  max={50}
                  value={guestCount || ''}
                  onChange={(e) => setGuestCount(parseInt(e.target.value, 10) || 0)}
                  className="max-w-[120px]"
                />
              </div>
              <div>
                <label htmlFor="gettogether_guest_details" className="block text-sm font-medium text-black mb-1">
                  Guest details
                </label>
                <textarea
                  id="gettogether_guest_details"
                  rows={2}
                  value={guestDetails}
                  onChange={(e) => setGuestDetails(e.target.value)}
                  placeholder="Names or details of guests (optional)"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Event fee (per person)
                </label>
                {guestModalEvent.fee != null ? (
                  <p className="text-sm text-black-600 bg-muted/50 rounded-md px-3 py-2 max-w-[200px]">{guestModalEvent.fee} (same for you and each guest)</p>
                ) : (
                  <Input
                    id="gettogether_participant_fee"
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
                <label className="block text-sm font-medium text-black mb-1">
                  Total fees
                </label>
                {guestModalEvent.fee != null ? (
                  <p className="text-sm text-black-600 bg-muted/50 rounded-md px-3 py-2 max-w-[200px]">{guestModalEvent.fee * (1 + guestCount)} ({guestModalEvent.fee} × {1 + guestCount} person(s))</p>
                ) : (
                  <Input
                    id="gettogether_total_fees"
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
                <label htmlFor="gettogether_payment_document" className="block text-sm font-medium text-black mb-1">
                  Upload payment documents
                </label>
                <Input
                  id="gettogether_payment_document"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setPaymentDocument(e.target.files?.[0] ?? null)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="gettogether_notes" className="block text-sm font-medium text-black mb-1">
                  Notes (optional)
                </label>
                <textarea
                  id="gettogether_notes"
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

      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
        Upcoming events
      </h2>
      {/* <p className="text-white text-sm md:text-base opacity-90 mb-4 md:mb-5">
        Join us — register for an event below.
      </p> */}

      {currentEvent && currentEvent.registration_closes_at && new Date(currentEvent.registration_closes_at) > new Date() && (
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-4 mb-2 md:mb-5">
          <div className="flex gap-1 md:gap-2">
            <div className="flex flex-col items-center">
              <div className="bg-[#1A1A1A] text-white px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded text-lg md:text-xl lg:text-2xl font-bold min-w-[50px] md:min-w-[60px] text-center">
                {String(days).padStart(2, '0')}
              </div>
              <span className="text-white text-[10px] md:text-xs mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#1A1A1A] text-white px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded text-lg md:text-xl lg:text-2xl font-bold min-w-[50px] md:min-w-[60px] text-center">
                {String(hours).padStart(2, '0')}
              </div>
              <span className="text-white text-[10px] md:text-xs mt-1">Hr</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#1A1A1A] text-white px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded text-lg md:text-xl lg:text-2xl font-bold min-w-[50px] md:min-w-[60px] text-center">
                {String(minutes).padStart(2, '0')}
              </div>
              <span className="text-white text-[10px] md:text-xs mt-1">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#1A1A1A] text-white px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded text-lg md:text-xl lg:text-2xl font-bold min-w-[50px] md:min-w-[60px] text-center">
                {String(seconds).padStart(2, '0')}
              </div>
              <span className="text-white text-[10px] md:text-xs mt-1">Sec</span>
            </div>
          </div>
          <span className="text-white text-xs md:text-sm ml-1 md:ml-2">Until registration closes</span>
        </div>
      )}

      {loading ? (
        <p className="text-white text-sm opacity-85">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-white text-sm opacity-85">No upcoming events at the moment. Check back later.</p>
      ) : currentEvent ? (
        <div className="flex flex-col min-h-0 flex-1 md:overflow-y-auto">
          <div className="flex gap-3 md:gap-4 items-start mb-2 md:mb-3">
            <div className="shrink-0 w-14 h-16 md:w-16 md:h-20 flex flex-col items-center justify-center bg-[#1A1A1A] rounded">
              <span className="text-white text-xl md:text-2xl font-bold leading-tight">
                {formatEventDate(currentEvent.event_at).date}
              </span>
              <span className="text-white text-xs md:text-sm capitalize opacity-90">
                {formatEventDate(currentEvent.event_at).month}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <Link
                to={isAuthenticated ? '/dashboard/events/$id' : '/events/$id'}
                params={{ id: String(currentEvent.id) }}
                search={{ register: undefined }}
                className="no-underline text-inherit hover:opacity-90"
              >
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold hover:underline">
                  {currentEvent.title}
                </h3>
              </Link>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-white text-sm opacity-90">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  {formatEventDate(currentEvent.event_at).time}
                </span>
              </div>
            </div>
          </div>
          {currentEvent.location && (
            <div className="flex items-center gap-2 mb-2 md:mb-3 text-white text-sm md:text-base opacity-90">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="line-clamp-1">{currentEvent.location}</span>
            </div>
          )}
          {(currentEvent.short_description ?? currentEvent.description) && (
            <div className="mb-2 md:mb-4 shrink-0">
              <p className="text-white text-xs md:text-sm opacity-90 leading-relaxed line-clamp-2 md:line-clamp-none">
                {currentEvent.short_description ?? currentEvent.description}
              </p>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 md:mt-auto shrink-0">
            {isAuthenticated ? (
              <Link
                to="/dashboard/events/$id"
                params={{ id: String(currentEvent.id) }}
                search={{ register: '1' }}
                className="inline-flex items-center justify-center bg-primary-accent hover:bg-[#1d3a9a] text-white px-4 md:px-6 py-2 md:py-3 rounded text-sm md:text-base font-medium no-underline"
              >
                Register for this event
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setGuestModalEvent(currentEvent)}
                className="inline-flex items-center justify-center bg-primary-accent hover:bg-[#1d3a9a] text-white px-4 md:px-6 py-2 md:py-3 rounded text-sm md:text-base font-medium border-0 cursor-pointer"
              >
                Register for this event
              </button>
            )}
            <Link
              to="/events"
              className="text-white text-sm font-medium opacity-90 hover:underline"
            >
              View all events
            </Link>
          </div>
        </div>
      ) : null}

      {/* Carousel navigation */}
      <div className="flex items-center justify-between gap-2 mt-3 md:mt-4 shrink-0">
        <span className="text-white text-xs md:text-sm opacity-80">
          {hasMultiple ? `${currentIndex + 1} of ${events.length}` : '\u00A0'}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasMultiple}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:pointer-events-none text-white rounded flex items-center justify-center transition-colors"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasMultiple}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:pointer-events-none text-white rounded flex items-center justify-center transition-colors"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
