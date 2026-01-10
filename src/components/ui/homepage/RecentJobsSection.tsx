import { Button } from '@/components/ui/button'

interface JobCardProps {
  logo: string
  title: string
  description: string
  status: 'active' | 'expired'
}

function JobCard({ logo, title, description, status }: JobCardProps) {
  return (
    <div 
      className="flex flex-col items-center p-8 gap-8 rounded-2xl"
      style={{
        width: '416px',
        border: '1px solid #EFEFEF',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="w-[100px] h-[100px] flex items-center justify-center">
        <img 
          src={logo}
          alt="Company logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-6 w-[368px]">
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
  const jobs = [
    {
      logo: 'https://picsum.photos/100/100?random=10',
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    },
    {
      logo: 'https://picsum.photos/100/100?random=11',
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    },
    {
      logo: 'https://picsum.photos/100/100?random=12',
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'expired' as const
    },
    {
      logo: 'https://picsum.photos/100/100?random=13',
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    },
    {
      logo: 'https://picsum.photos/100/100?random=14',
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'expired' as const
    },
    {
      logo: 'https://picsum.photos/100/100?random=15',
      title: 'Urgently Need Five Data Center Specialist',
      description: 'Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus....',
      status: 'active' as const
    }
  ]

  return (
    <section 
      className="w-full py-16 flex flex-col items-center gap-8"
      style={{
        paddingLeft: '320px',
        paddingRight: '320px',
      }}
    >
      <h2 
        className="text-5xl font-semibold leading-[72px] text-center"
        style={{ color: '#021E40' }}
      >
        Recent Jobs
      </h2>

      <div className="flex flex-col gap-6 w-full">
        {/* First Row */}
        <div className="flex flex-row gap-4">
          {jobs.slice(0, 3).map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
        {/* Second Row */}
        <div className="flex flex-row gap-4">
          {jobs.slice(3, 6).map((job, index) => (
            <JobCard key={index + 3} {...job} />
          ))}
        </div>
      </div>
    </section>
  )
}
