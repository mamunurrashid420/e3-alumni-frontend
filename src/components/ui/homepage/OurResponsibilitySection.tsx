import { GraduationCap, HandHeart, Building2, Users } from 'lucide-react'

interface ResponsibilityCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ResponsibilityCard({ icon, title, description }: ResponsibilityCardProps) {
  return (
    <div className="flex flex-col items-center gap-10 w-[302px]">
      <div className="w-[100px] h-[100px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <h3 
          className="text-2xl font-semibold text-center"
          style={{ color: '#121212' }}
        >
          {title}
        </h3>
        <p 
          className="text-base leading-[26px] text-center"
          style={{ color: '#000000' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export function OurResponsibilitySection() {
  const responsibilities = [
    {
      icon: <GraduationCap className="w-full h-full" style={{ color: '#121212' }} />,
      title: 'Scholarship',
      description: 'De create building thinking about your requirment and latest treand on our marketplace area'
    },
    {
      icon: <HandHeart className="w-full h-full" style={{ color: '#121212' }} />,
      title: 'Help Current Students',
      description: 'De create building thinking about your requirment and latest treand on our marketplace area'
    },
    {
      icon: <Building2 className="w-full h-full" style={{ color: '#121212' }} />,
      title: 'Help Our School',
      description: 'De create building thinking about your requirment and latest treand on our marketplace area'
    },
    {
      icon: <Users className="w-full h-full" style={{ color: '#121212' }} />,
      title: 'Build Our Community',
      description: 'De create building thinking about your requirment and latest treand on our marketplace area'
    }
  ]

  return (
    <section 
      className="w-full py-20 flex flex-col items-center gap-16"
      style={{
        background: '#F5F7F9',
        paddingLeft: '320px',
        paddingRight: '320px',
      }}
    >
      <h2 
        className="text-5xl font-semibold leading-[72px] text-center"
        style={{ color: '#021E40' }}
      >
        Our Responsibility
      </h2>

      <div className="flex flex-row items-center gap-6 w-full justify-center">
        {responsibilities.map((item, index) => (
          <ResponsibilityCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
