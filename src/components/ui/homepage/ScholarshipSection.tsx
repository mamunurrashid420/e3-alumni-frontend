import { Button } from '@/components/ui/button'

export function ScholarshipSection() {
  return (
    <section 
      className="w-full py-20 relative flex flex-col items-center gap-20"
      style={{
        background: '#F5F7F9',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute left-[40px] top-[87px] w-[320px] h-[320px] opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=320&q=80"
          alt="Decorative"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-11 max-w-[1039px] relative z-10">
        <div className="flex flex-col items-center gap-11">
          <h2 
            className="text-[40px] font-medium leading-[52px] text-center"
            style={{ color: '#000000' }}
          >
            We Provide Scholarship For Talented Students!
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

      {/* Right Side Decorative Elements */}
      <div className="absolute right-[0.86%] top-[34.8%] w-[320px] h-[305px] opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=320&q=80"
          alt="Decorative"
          className="w-full h-full object-contain"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
    </section>
  )
}
