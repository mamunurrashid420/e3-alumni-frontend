import { Clock, MapPin } from 'lucide-react'

interface EventItemProps {
  date: string
  month: string
  title: string
  time: string
  location: string
}

function EventItem({ date, month, title, time, location }: EventItemProps) {
  return (
    <div className="w-[406px] h-[90px] relative mb-8">
      {/* Date Box */}
      <div 
        className="absolute left-0 top-0 w-[70px] h-full flex flex-col items-center justify-center"
        style={{ background: '#F2F2F2' }}
      >
        <div 
          className="text-2xl font-bold leading-[30px]"
          style={{ color: '#000000' }}
        >
          {date}
        </div>
        <div 
          className="text-xs leading-[22px] capitalize"
          style={{ color: '#000000' }}
        >
          {month}
        </div>
      </div>

      {/* Content */}
      <div className="absolute left-[90px] top-0 right-0">
        <h3 
          className="text-base font-semibold leading-[24px] capitalize mb-2"
          style={{ color: '#000000' }}
        >
          {title}
        </h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Clock className="w-[14px] h-[14px]" style={{ color: '#000000' }} />
            <span 
              className="text-sm leading-[20px] lowercase"
              style={{ color: '#666666' }}
            >
              {time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-[14px] h-[14px]" style={{ color: '#000000' }} />
            <span 
              className="text-sm leading-[20px]"
              style={{ color: '#666666' }}
            >
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function UpcomingEventsSection() {
  const events = [
    {
      date: '23',
      month: 'Dec',
      title: 'Learn to Write Flash Fiction',
      time: '12:00 am - 5:00 pm',
      location: 'Birmingham, UK'
    },
    {
      date: '23',
      month: 'Dec',
      title: 'Change career to teaching',
      time: '8:00 am - 5:00 pm',
      location: 'Chicago, US'
    },
    {
      date: '23',
      month: 'Dec',
      title: 'Build Education WordPress Website',
      time: '8:00 am - 5:00 pm',
      location: 'Vancouver, Canada'
    }
  ]

  return (
    <section 
      className="w-full py-16"
      style={{
        paddingLeft: '320px',
        paddingRight: '320px',
      }}
    >
      <div className="flex items-center gap-5">
        {/* Left Side - Events List */}
        <div className="flex flex-col gap-10 w-[406px]">
          <h2 
            className="text-[28px] font-semibold leading-[40px] uppercase"
            style={{ color: '#000000' }}
          >
            Upcoming Events
          </h2>

          <div className="flex flex-col gap-8">
            {events.map((event, index) => (
              <EventItem key={index} {...event} />
            ))}
          </div>

          <a 
            href="#"
            className="text-base font-semibold capitalize"
            style={{ color: '#000000' }}
          >
            View all
          </a>
        </div>

        {/* Right Side - Large Image */}
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=854&q=80"
            alt="Upcoming Event"
            className="w-full h-[474px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
