import { useState, useId, useMemo } from 'react'
import { ChevronLeft, ChevronRight, GraduationCap, Heart, BookOpen, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
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

interface ProgramCardProps {
  image: string
  icon: React.ReactNode
  title: string
  description: string
}

function ProgramCard({ image, icon, title, description }: ProgramCardProps) {
  const uniqueId = useId().replace(/:/g, '_')
  return (
    <div 
      className="relative shrink-0 rounded-[10px] overflow-hidden"
      style={{
        width: '370px',
        height: '393px',
        background: '#FFFFFF',
        boxShadow: '2px 4px 30px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Header Image */}
      <div 
        className="absolute h-[199px] w-full top-0 left-0 rounded-t-[10px] overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Colored Stripe */}
      <div 
        className="absolute w-[78px] h-[88px] left-[40px] top-[162px] rounded-bl-[10px] flex items-end"
        style={{ background: '#7166F5' }}
      >
        <div className="absolute left-[17px] bottom-0 w-[44px] h-[44px] text-white">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="absolute left-[134px] top-[199px] right-[40px]">
        <h3 
          className="text-xl font-extrabold"
          style={{ color: '#211F38' }}
        >
          {title}
        </h3>
      </div>
      
      {/* Line aligned with icon bottom */}
      <div 
        className="absolute left-[134px] w-[212px] h-px"
        style={{ 
          background: '#D0CCFF',
          top: '249px'
        }}
      />
      
      {/* Description */}
      <div className="absolute left-[134px] top-[254px] right-[40px]">
        <p 
          className="text-base font-semibold leading-[30px]"
          style={{ color: '#737092' }}
        >
          {description}
        </p>
      </div>

      {/* Decorative Corner */}
      <svg 
        className="absolute right-0 bottom-0"
        width="93" 
        height="93" 
        viewBox="0 0 93 93" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id={`mask0_${uniqueId}`} style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="93" height="93">
          <g clipPath={`url(#clip0_${uniqueId})`}>
            <g clipPath={`url(#clip1_${uniqueId})`}>
              <path d="M53.7656 64.3846C44.5389 92.7651 3 92.3621 0 93H83C88.5229 93 93 88.5228 93 83V22.8923V0C82.1861 47.9899 65.9651 26.86 53.7656 64.3846Z" fill="black"/>
            </g>
          </g>
        </mask>
        <g mask={`url(#mask0_${uniqueId})`}>
          <rect width="93" height="93" fill="#D0CCFF"/>
        </g>
        <defs>
          <clipPath id={`clip0_${uniqueId}`}>
            <rect width="93" height="93" fill="white"/>
          </clipPath>
          <clipPath id={`clip1_${uniqueId}`}>
            <rect width="93" height="93" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export function ProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const programs = useMemo(() => [
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      icon: <GraduationCap className="w-full h-full" />,
      title: 'Academic Coaching',
      description: 'There are many variations the off passages of Lorem Ipsum free thing avagtilable, but majority'
    },
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      icon: (
        <div className="w-full h-full flex items-center justify-center text-white font-bold text-2xl">
          A+
        </div>
      ),
      title: 'Model Tests',
      description: 'There are many variations the off passages of Lorem Ipsum free thing avagtilable, but majority'
    },
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      icon: <Heart className="w-full h-full" />,
      title: 'Special Care',
      description: 'There are many variations the off passages of Lorem Ipsum free thing avagtilable, but majority'
    },
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      icon: <BookOpen className="w-full h-full" />,
      title: 'Training & Courses',
      description: 'There are many variations the off passages of Lorem Ipsum free thing avagtilable, but majority'
    },
    {
      image: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      icon: <Phone className="w-full h-full" />,
      title: 'Relevant Contacts',
      description: 'There are many variations the off passages of Lorem Ipsum free thing avagtilable, but majority'
    }
  ], [])

  const visiblePrograms = programs.slice(currentIndex, currentIndex + 3)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (programs.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (programs.length - 2)) % (programs.length - 2))
  }

  return (
    <section 
      className="w-full py-20 relative"
      style={{
        background: '#F5F5F5',
        paddingLeft: '375px',
        paddingRight: '375px',
      }}
    >
      <div className="flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-3">
            <h2 className="text-[40px] leading-[48px]">
              <div>
                <span 
                  className="font-normal"
                  style={{ color: '#737092' }}
                >
                  We're Offering the Best
                </span>
              </div>
              <div className="relative inline-block">
                <span 
                  className="font-extrabold"
                  style={{ color: '#211F38' }}
                >
                  Programs for Students
                </span>
                <div 
                  className="absolute bottom-[-8px] left-0 h-[2px]"
                  style={{ 
                    background: '#7166F5',
                    width: '200px'
                  }}
                />
              </div>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center border"
              style={{ 
                color: '#211F38',
                borderColor: '#E5E5E5'
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center border"
              style={{ 
                color: '#211F38',
                borderColor: '#E5E5E5'
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="w-full h-[2px]"
          style={{ background: '#D0CCFF' }}
        />

        {/* Programs Carousel */}
        <div className="relative mb-32 z-10">
          <div className="flex gap-8 overflow-hidden">
            {visiblePrograms.map((program, index) => (
              <ProgramCard key={currentIndex + index} {...program} />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        {/* <div 
          className="w-full h-[169px] rounded-[10px] relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(90deg, #7166F5 0%, #525FE1 100%)'
          }}
        >
          <div className="absolute left-[58px] top-[-40px] w-[258px] h-[185px]">
            <img 
              src={alumniImages[Math.floor(Math.random() * alumniImages.length)]}
              alt="Decorative"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between h-full px-[419px]">
            <div className="flex flex-col gap-1">
              <p 
                className="text-sm font-semibold"
                style={{ color: '#D0CCFF' }}
              >
                Helpful services for students
              </p>
              <h3 
                className="text-[30px] font-extrabold leading-[40px]"
                style={{ color: '#FFFFFF' }}
              >
                Claim Your Service & Programs
              </h3>
            </div>
            <Button
              className="w-[193px] h-[56px] rounded-[10px] text-base font-bold"
              style={{ 
                background: '#FFFFFF',
                color: '#211F38',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              Discover More
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
