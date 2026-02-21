import { useMemo } from 'react'
import { Calendar, MessageCircle, User, ArrowRight } from 'lucide-react'
import event1 from '@/assets/alumni/event/1.jpg'
import event2 from '@/assets/alumni/event/2.jpg'
import event3 from '@/assets/alumni/event/3.jpeg'
import event4 from '@/assets/alumni/event/4.jpeg'
import gallery1 from '@/assets/alumni/gallery/1.jpg'
import gallery2 from '@/assets/alumni/gallery/2.jpg'
import gallery3 from '@/assets/alumni/gallery/3.jpeg'
import gallery4 from '@/assets/alumni/gallery/4.jpeg'
import galleryBatch2005 from '@/assets/alumni/gallery/Batch-2005.jpg'
import oldCoaching from '@/assets/alumni/old-coaching.jpeg'

// Array of all available images (excluding logo)
const alumniImages = [event1, event2, event3, event4, gallery1, gallery2, gallery3, gallery4, galleryBatch2005, oldCoaching]

interface NewsCardProps {
  image: string
  date: string
  title: string
  description: string
  author: string
}

function NewsCard({ image, date, title, description, author }: NewsCardProps) {
  return (
    <div 
      className="flex flex-col rounded-[9.26px] overflow-hidden w-full max-w-[411px] mx-auto"
      style={{
        background: '#FFFFFF',
        boxShadow: '0px 9.26px 13.89px rgba(8, 14, 28, 0.06)',
      }}
    >
      {/* Image */}
      <div 
        className="w-full h-[263px] relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="p-4 md:p-6 lg:p-[37px] flex flex-col gap-4 md:gap-6">
        {/* Date */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 md:w-[11px] md:h-[13px]" style={{ color: '#737887' }} />
            <span 
              className="text-xs md:text-sm lg:text-[13px] leading-5 md:leading-6 lg:leading-[24px]"
              style={{ color: '#737887' }}
            >
              {date}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 
          className="text-lg md:text-xl lg:text-[22px] font-bold leading-6 md:leading-7 lg:leading-[31px]"
          style={{ color: '#141D38' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p 
          className="text-sm md:text-base lg:text-[15px] leading-5 md:leading-6 lg:leading-[26px]"
          style={{ color: '#737887' }}
        >
          {description}
        </p>

        {/* Divider */}
        <div 
          className="w-full h-[1px]"
          style={{ background: '#E0E0E0' }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span 
              className="text-sm leading-[24px]"
              style={{ color: '#737887' }}
            >
              {author}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span 
                className="text-sm font-semibold uppercase"
                style={{ color: '#737887' }}
              >
                Read More
              </span>
              <ArrowRight className="w-4 h-4" style={{ color: '#737887' }} />
            </div>
            <div 
              className="w-full h-[1px]"
              style={{ background: '#737887' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function RecentNewsSection() {
  const news = useMemo(() => [
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      date: '13 Feb, 2023',
      title: 'Unsatiable entreaties may collecting Power.',
      description: 'Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate',
      author: 'By Author'
    },
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      date: '13 Feb, 2023',
      title: 'Regional Manager limited time management.',
      description: 'Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate',
      author: 'By Author'
    },
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      date: '13 Feb, 2023',
      title: "What's the Holding Back It Solution Industry?",
      description: 'Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate',
      author: 'By Author'
    }
  ], [])

  return (
    <section 
      className="w-full py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[320px] flex flex-col items-center gap-6 md:gap-8"
    >
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] lg:leading-[72px] text-center"
        style={{ color: '#021E40' }}
      >
        News & Events
      </h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center">
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
