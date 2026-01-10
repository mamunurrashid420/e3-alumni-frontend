import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CommunitySection() {
  return (
    <section 
      className="w-full py-20 relative"
      style={{
        paddingLeft: '368px',
        paddingRight: '368px',
      }}
    >
      <div className="flex items-center gap-[90px]">
        {/* Left Side - Image */}
        <div className="relative w-[503px] h-[587px] flex-shrink-0">
          <div 
            className="absolute left-[3.42%] top-[8.24%] w-[56.97%] h-[91.76%] rounded-t-[265px] border-[5px]"
            style={{ borderColor: '#F86F03' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=478&h=567&fit=crop"
            alt="Community"
            className="absolute left-0 top-0 w-[478px] h-[567px] rounded-t-[265px] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 max-w-[576px]">
          <div className="flex flex-col gap-[70px]">
            <div className="flex flex-col gap-11">
              <div className="flex flex-col gap-2">
                <p 
                  className="text-base font-extrabold uppercase tracking-wider"
                  style={{ color: '#525FE1', letterSpacing: '1.6px' }}
                >
                  Give Back. Change a Future.
                </p>
                <h2 
                  className="text-[40px] font-extrabold leading-[56px]"
                  style={{ color: '#231F40' }}
                >
                  Creating A Community Of Life Long Learners
                </h2>
              </div>

              <p 
                className="text-base font-medium leading-[28px]"
                style={{ color: '#6F6B80' }}
              >
                As alumni, we share a common journey—and the power to make a lasting difference. Your donation to the Alumni Support Fund helps students who are facing financial challenges continue their education with confidence and dignity.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-5">
              {[
                'Flexible training programs',
                'Friendly environment for you',
                'Learn from approved experts'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                    <Check className="w-full h-full" style={{ color: '#F86F03' }} />
                  </div>
                  <p 
                    className="text-base font-semibold leading-[26px]"
                    style={{ color: '#231F40' }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative">
              <Button
                className="w-[216px] h-[60px] text-lg font-bold rounded-[5px] flex items-center gap-2"
                style={{ 
                  background: '#525FE1',
                  color: '#FFFFFF'
                }}
              >
                Donate now
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 18 18" 
                  fill="none"
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <path 
                    d="M3 9L15 9M15 9L9 3M15 9L9 15" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
