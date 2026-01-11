import { Button } from '@/components/ui/button'
import scholarshipBg from '@/assets/scholarship-background.png'

export function ScholarshipSection() {
  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-20 relative flex flex-col items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-10"
      style={{
        backgroundImage: `url(${scholarshipBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]"></div>

      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-11 max-w-[1039px] relative z-10 w-full">
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-11">
          <h2 
            className="text-2xl md:text-3xl lg:text-[40px] font-medium leading-tight md:leading-[44px] lg:leading-[52px] text-center px-4"
            style={{ color: '#000000' }}
          >
            We Provide Scholarship For <br className="hidden sm:block" />
            <span style={{ color: '#3B60C9' }}>Talented Students!</span>
          </h2>
          <p 
            className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-[23px] text-center max-w-[1097px] px-4"
            style={{ color: '#000000', letterSpacing: '0.01em' }}
          >
            Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need academic, relocation, career, projects, mentorship, etc you can ask the community and get
          </p>
        </div>

        <Button
          className="w-full sm:w-[198px] h-[50px] md:h-[56px] text-lg md:text-xl lg:text-2xl font-semibold rounded-md"
          style={{ 
            background: '#3B60C9',
            color: '#FFFFFF',
            letterSpacing: '0.01em'
          }}
        >
          Apply Now
        </Button>
      </div>
    </section>
  )
}
