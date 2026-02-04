import { useState, useEffect } from 'react'
import { GetTogetherSection } from './GetTogetherSection'
import { apiClient } from '@/api/client'
import type { Event } from '@/types/api'
import oldCoachingImage from '../../../assets/alumni/old-coaching.jpeg'

export function GetTogetherBanner() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    apiClient
      .getEvents({ status: 'open', upcoming: true })
      .then((res) => setEvents(res.data))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (events.length > 0 && currentIndex >= events.length) {
      setCurrentIndex(0)
    }
  }, [events.length, currentIndex])

  const currentEvent = events[currentIndex]
  const coverPhoto = currentEvent?.cover_photo || oldCoachingImage
  const imageAlt = currentEvent?.title || 'Alumni gathering'

  const goPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? events.length - 1 : i - 1))
  }
  const goNext = () => {
    setCurrentIndex((i) => (i >= events.length - 1 ? 0 : i + 1))
  }

  return (
    <section 
      className="relative z-20 w-full max-w-[1280px] mx-auto -mt-[190px] md:-mt-[200px] lg:-mt-[190px] px-4 md:px-6 lg:px-8"
      style={{
        background: '#3B60C9',
        boxShadow: '0px 0px 20px rgba(29, 29, 29, 0.25)',
        borderRadius: '4px',
      }}
    >
      <div className="flex flex-col md:flex-row min-h-[300px] md:min-h-[350px] lg:min-h-[380px] max-h-[500px] md:max-h-[550px]">
        {/* Left Side - Event Cover Photo */}
        <div className="w-full md:w-[40%] h-[200px] md:h-full max-h-[500px] overflow-hidden rounded-t-[4px] md:rounded-l-[4px] md:rounded-t-none flex-shrink-0">
          <img 
            src={coverPhoto}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Right Side - Content */}
        <div className="w-full md:w-[60%] h-full">
          <GetTogetherSection 
            events={events}
            loading={loading}
            currentIndex={currentIndex}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>
      </div>
    </section>
  )
}
