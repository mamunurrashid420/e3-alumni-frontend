import { Users, Image as ImageIcon, Calendar, Award } from 'lucide-react'

interface StatBlockProps {
  icon: React.ReactNode
  number: string
  label: string
}

function StatBlock({ icon, number, label }: StatBlockProps) {
  return (
    <div className="flex flex-row items-center gap-2 md:gap-4">
      <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[92px] lg:h-[92px] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <div 
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight md:leading-[40px] lg:leading-[56px]"
          style={{ color: '#D8DAE4', letterSpacing: '0.04em' }}
        >
          {number}
        </div>
        <div 
          className="text-sm md:text-base lg:text-xl xl:text-2xl leading-tight md:leading-[24px] lg:leading-[36px]"
          style={{ color: '#D8DAE4' }}
        >
          {label}
        </div>
      </div>
    </div>
  )
}

export function StatisticsSection() {
  const stats = [
    {
      icon: <Users className="w-full h-full" style={{ color: '#D8DAE4' }} />,
      number: '100+',
      label: 'Members'
    },
    {
      icon: <ImageIcon className="w-full h-full" style={{ color: '#D8DAE4' }} />,
      number: '100+',
      label: 'Photos'
    },
    {
      icon: <Calendar className="w-full h-full" style={{ color: '#D8DAE4' }} />,
      number: '100+',
      label: 'Events'
    },
    {
      icon: <Award className="w-full h-full" style={{ color: '#D8DAE4' }} />,
      number: '100+',
      label: 'Awards'
    }
  ]

  return (
    <section 
      className="w-full py-8 md:py-12 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[320px]"
      style={{
        background: '#161F37',
      }}
    >
      <div className="grid grid-cols-2 sm:flex sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <StatBlock
            key={index}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  )
}
