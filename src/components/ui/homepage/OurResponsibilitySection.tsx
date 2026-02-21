import { GraduationCap, HandHeart, Building2, Users } from 'lucide-react'

interface ResponsibilityCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ResponsibilityCard({ icon, title, description }: ResponsibilityCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 w-full min-w-0">
      <div className="w-16 h-16 md:w-[100px] md:h-[100px] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
        <h3 
          className="text-xl md:text-2xl font-semibold text-center"
          style={{ color: '#121212' }}
        >
          {title}
        </h3>
        <p 
          className="text-sm md:text-base leading-relaxed md:leading-[26px] text-center"
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
      title: 'Scholarship Program',
      description: 'The program provides financial support to students who demonstrate academic excellence, financial need, and a commitment to community service.'
    },
    {
      icon: <HandHeart className="w-full h-full" style={{ color: '#121212' }} />,
      title: 'Aid for the Current Students',
      description: 'We offer financial assistance, mentoring, and resources to help current students succeed academically and personally.'
    },
    {
      icon: <Building2 className="w-full h-full" style={{ color: '#121212' }} />,
      title: 'Contribution to the Development of the School',
      description: 'We support the school’s infrastructure, programs, and initiatives to enhance the learning environment and student experience.'
    },
    {
      icon: <Users className="w-full h-full" style={{ color: '#121212' }} />,
      title: 'Building a vibrant community',
      description: 'We foster a sense of belonging and pride by connecting alumni with current students, promoting collaboration, and creating opportunities for mentorship and networking.'
    }
  ]

  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-20 flex flex-col items-center gap-10 md:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[320px]"
      style={{
        background: '#F5F7F9',
      }}
    >
      <h2 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] lg:leading-[72px] text-center"
        style={{ color: '#021E40' }}
      >
        Our Priority
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[1920px]">
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
