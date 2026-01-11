import { Button } from '@/components/ui/button'
import scholarshipBg from '@/assets/scholarship-background.png'

export function ScholarshipSection() {
  return (
    <section 
      className="w-full py-20 relative flex flex-col items-center gap-20"
      style={{
        backgroundImage: `url(${scholarshipBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]"></div>

      <div className="flex flex-col items-center gap-11 max-w-[1039px] relative z-10">
        <div className="flex flex-col items-center gap-11">
          <h2 
            className="text-[40px] font-medium leading-[52px] text-center"
            style={{ color: '#000000' }}
          >
            We Provide Scholarship For <br />
            <span style={{ color: '#3B60C9' }}>Talented Students!</span>
          </h2>
          <p 
            className="text-xl leading-[23px] text-center max-w-[1097px]"
            style={{ color: '#000000', letterSpacing: '0.01em' }}
          >
            Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need academic, relocation, career, projects, mentorship, etc you can ask the community and get
          </p>
        </div>

        <Button
          className="w-[198px] h-[56px] text-2xl font-semibold rounded-md"
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
