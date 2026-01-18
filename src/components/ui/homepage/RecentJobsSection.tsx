import { useMemo } from 'react'
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

interface JobCardProps {
  logo: string
  title: string
  description: string
  status: 'active' | 'expired'
}

function JobCard({ logo, title, description, status }: JobCardProps) {
  return (
    <div 
      className="flex flex-col items-center p-6 md:p-8 gap-6 md:gap-8 rounded-2xl w-full max-w-[416px]"
      style={{
        border: '1px solid #EFEFEF',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
        <img 
          src={logo}
          alt="Company logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[368px]">
        <h3 
          className="text-xl font-semibold text-center leading-[23px]"
          style={{ color: '#121212', letterSpacing: '0.01em' }}
        >
          {title}
        </h3>
        <p 
          className="text-base leading-[26px] text-center"
          style={{ color: '#000000' }}
        >
          {description}
        </p>
        <Button
          className="h-12 px-6 rounded-md text-xl font-semibold"
          style={{
            background: status === 'active' ? '#2ACA55' : '#BFBFBF',
            color: '#FFFFFF',
            letterSpacing: '0.01em'
          }}
        >
          {status === 'active' ? 'Apply Now' : 'Expired'}
        </Button>
      </div>
    </div>
  )
}

export function RecentJobsSection() {
  const jobs = useMemo(() => [
    {
      logo: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    },
    {
      logo: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    },
    {
      logo: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'expired' as const
    },
    {
      logo: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    },
    {
      logo: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'expired' as const
    },
    {
      logo: alumniImages[Math.floor(Math.random() * alumniImages.length)],
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    }
  ], [])

  return (
    <section 
      className="w-full py-12 md:py-16 flex flex-col items-center gap-6 md:gap-8"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[320px] box-border">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] lg:leading-[72px] text-center"
          style={{ color: '#021E40' }}
        >
          Recent Jobs
        </h2>

        <div className="flex flex-col gap-4 md:gap-6 w-full mt-6 md:mt-8">
          {/* First Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
            {jobs.slice(0, 3).map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
          {/* Second Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
            {jobs.slice(3, 6).map((job, index) => (
              <JobCard key={index + 3} {...job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
