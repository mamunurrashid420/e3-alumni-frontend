import { Users, Image as ImageIcon, Calendar, Award } from 'lucide-react'

interface StatBlockProps {
  icon: React.ReactNode
  number: string
  label: string
}

function StatBlock({ icon, number, label }: StatBlockProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-[92px] h-[92px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <div 
          className="text-5xl font-semibold leading-[56px]"
          style={{ color: '#D8DAE4', letterSpacing: '0.04em' }}
        >
          {number}
        </div>
        <div 
          className="text-2xl leading-[36px]"
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
      className="w-full py-20"
      style={{
        background: '#161F37',
        paddingLeft: '320px',
        paddingRight: '320px',
      }}
    >
      <div className="flex flex-row justify-between items-center">
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
