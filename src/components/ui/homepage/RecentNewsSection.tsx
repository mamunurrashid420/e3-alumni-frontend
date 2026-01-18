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
      className="flex flex-col rounded-[9.26px] overflow-hidden"
      style={{
        width: '411px',
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
      <div className="p-[37px] flex flex-col gap-6">
        {/* Date */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-[11px] h-[13px]" style={{ color: '#737887' }} />
            <span 
              className="text-[13px] leading-[24px]"
              style={{ color: '#737887' }}
            >
              {date}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 
          className="text-[22px] font-bold leading-[31px]"
          style={{ color: '#141D38' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p 
          className="text-[15px] leading-[26px]"
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
      className="w-full py-16 flex flex-col items-center gap-6"
      style={{
        paddingLeft: '320px',
        paddingRight: '320px',
      }}
    >
      <h2 
        className="text-5xl font-semibold leading-[72px] text-center"
        style={{ color: '#021E40' }}
      >
        Recent News
      </h2>

      <div className="flex flex-row gap-6">
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
