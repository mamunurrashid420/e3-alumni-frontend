import { Clock, Wifi, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const healthServices = [
  'Blood Group Database',
  'Ambulance Services',
  'Illness Status Updates',
  'Passed Away Ex-Students List',
  'Hospital & Clinic Contacts and Addresses'
]

export function HealthSection() {
  return (
    <section 
      className="w-full py-20"
      style={{
        paddingLeft: 'calc(50% - 625px)',
        paddingRight: 'calc(50% - 625px)',
      }}
    >
      <div className="flex items-center gap-[62px]">
        {/* Left Side - Image Collage with Stats */}
        <div className="relative w-[683px] h-[762px] flex-shrink-0">
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=536&h=488&fit=crop"
            alt="Students"
            className="absolute left-[43px] top-0 w-[536px] h-[488px] rounded-[40px]"
            style={{ transform: 'rotate(10deg)', objectFit: 'cover' }}
          />
          
          {/* Overlapping Image */}
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=364&h=352&fit=crop"
            alt="Students"
            className="absolute right-[0px] bottom-[58px] w-[364px] h-[352px] rounded-[40px]"
            style={{ transform: 'rotate(10deg)', objectFit: 'cover' }}
          />

          {/* Stats Box */}
          <div 
            className="absolute left-0 bottom-[60px] w-[200px] h-[200px] rounded-[20px]"
            style={{ 
              background: '#7166F5',
              transform: 'matrix(0.98, 0.17, -0.17, 0.98, 0, 0)'
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div 
                className="text-[40px] font-extrabold leading-[44px]"
                style={{ color: '#FFFFFF' }}
              >
                +3
              </div>
              <div 
                className="text-[40px] font-extrabold leading-[44px]"
                style={{ color: '#FFFFFF' }}
              >
                +4
              </div>
              <div 
                className="text-[40px] font-extrabold leading-[44px]"
                style={{ color: '#FFFFFF' }}
              >
                +9
              </div>
              <div 
                className="text-[40px] font-extrabold leading-[44px]"
                style={{ color: '#FFFFFF' }}
              >
                +0
              </div>
              <p 
                className="text-xl font-extrabold leading-[26px] mt-2"
                style={{ color: '#D0CCFF' }}
              >
                Alumni students
              </p>
              <p 
                className="text-xl font-extrabold leading-[26px]"
                style={{ color: '#D0CCFF' }}
              >
                are ready
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 max-w-[500px]">
          <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2 
                className="text-[40px] font-extrabold leading-[52px]"
                style={{ color: '#211F38' }}
              >
                Supporting Alumni Health & Wellness
              </h2>
              <p 
                className="text-base font-semibold leading-[28px]"
                style={{ color: '#737092' }}
              >
                Explore valuable health resources available to you as a member of our alumni community. Get benefits that support you.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="flex flex-col gap-8">
              {/* Fast & Easy Process */}
              <div className="w-[250px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11">
                    <Clock className="w-full h-full" style={{ color: '#7166F5' }} />
                  </div>
                  <h3 
                    className="text-base font-extrabold leading-[19px]"
                    style={{ color: '#211F38' }}
                  >
                    Fast & Easy Process
                  </h3>
                </div>
                <p 
                  className="text-base font-semibold leading-[28px]"
                  style={{ color: '#737092' }}
                >
                  Get your service response at the shortest possible time
                </p>
              </div>

              {/* Control Over Policy */}
              <div className="w-[250px] ml-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11">
                    <Wifi className="w-full h-full" style={{ color: '#7166F5' }} />
                  </div>
                  <h3 
                    className="text-base font-extrabold leading-[19px]"
                    style={{ color: '#211F38' }}
                  >
                    Control Over Policy
                  </h3>
                </div>
                <p 
                  className="text-base font-semibold leading-[28px]"
                  style={{ color: '#737092' }}
                >
                  Relevant students will be notified through the system
                </p>
              </div>
            </div>

            {/* Services List */}
            <div 
              className="w-full p-8 rounded-[10px]"
              style={{
                border: '1px solid #D0CCFF',
              }}
            >
              <div className="flex flex-col gap-4">
                {healthServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-[18px] h-[18px] flex-shrink-0">
                      <Check className="w-full h-full" style={{ color: '#7166F5' }} />
                    </div>
                    <p 
                      className="text-base font-bold leading-[24px]"
                      style={{ color: '#211F38' }}
                    >
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-[190px] h-[56px] rounded-[10px] text-base font-bold"
              style={{ 
                background: '#211F38',
                color: '#FFFFFF'
              }}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
