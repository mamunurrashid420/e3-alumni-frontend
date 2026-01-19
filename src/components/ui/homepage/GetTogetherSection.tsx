import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function GetTogetherSection() {
  const [days, setDays] = useState(60)
  const [hours, setHours] = useState(12)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(30)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1
        setMinutes((prev) => {
          if (prev > 0) return prev - 1
          setHours((prev) => {
            if (prev > 0) return prev - 1
            setDays((prev) => (prev > 0 ? prev - 1 : 0))
            return 23
          })
          return 59
        })
        return 59
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col h-full justify-center px-4 md:px-6 lg:px-8 py-4 md:py-6">
      {/* Countdown Timer */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6">
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
        <span className="text-white text-xs md:text-sm ml-1 md:ml-2">Remaining</span>
      </div>

      {/* Headline */}
      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
        We Are Going To Arrange A Get Together!
      </h2>

      {/* Event Slogan */}
      <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 italic">
        Let bonds be strength, memories be inspiration.
      </p>

      {/* Description */}
      <div className="text-white text-xs md:text-sm leading-relaxed mb-4 md:mb-6 opacity-90 space-y-3 md:space-y-4">
        <p>
          The Alumni Association is pleased to announce an upcoming event designed to bring our alumni community together for connection, celebration, and collaboration. This special gathering will provide an excellent opportunity for former students to reconnect with classmates, interact with faculty members, and strengthen the bond with their alma mater.
        </p>
        <p>
          The event will feature engaging activities, inspiring discussions, networking sessions, and moments to relive cherished memories. It will also serve as a platform to share updates on alumni initiatives and future plans of the association.
        </p>
        <p>
          We warmly invite all alumni to join us and be a part of this memorable occasion. Your presence and participation will make the event truly meaningful and successful.
        </p>
      </div>

      {/* Call to Action Button */}
      <Button 
        className="bg-primary-accent hover:bg-[#1d3a9a] text-white px-4 md:px-6 py-2 md:py-3 rounded w-full md:w-fit text-sm md:text-base"
      >
        Join With Us
      </Button>

      {/* Navigation Arrows */}
      <div className="flex gap-2 mt-4 md:mt-auto justify-end">
        <button 
          className="w-10 h-10 bg-primary-accent hover:bg-[#1d3a9a] text-white rounded flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          className="w-10 h-10 bg-primary-accent hover:bg-[#1d3a9a] text-white rounded flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
