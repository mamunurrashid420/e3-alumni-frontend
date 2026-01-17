import { GetTogetherSection } from './GetTogetherSection'
import event1 from '@/assets/static/event1.png'

export function GetTogetherBanner() {
  return (
    <section 
      className="relative z-20 w-full max-w-[1280px] mx-auto -mt-[190px] md:-mt-[200px] lg:-mt-[190px] px-4 md:px-6 lg:px-8"
      style={{
        background: '#3B60C9',
        boxShadow: '0px 0px 20px rgba(29, 29, 29, 0.25)',
        borderRadius: '4px',
      }}
    >
      <div className="flex flex-col md:flex-row min-h-[300px] md:min-h-[350px] lg:min-h-[380px]">
        {/* Left Side - Image */}
        <div className="w-full md:w-[40%] h-[200px] md:h-full overflow-hidden rounded-t-[4px] md:rounded-l-[4px] md:rounded-t-none">
          <img 
            src={event1}
            alt="BUNNON 2026 - Ex. Student Association Event"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Content */}
        <div className="w-full md:w-[60%] h-full">
          <GetTogetherSection />
        </div>
      </div>
    </section>
  )
}
