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
      className="w-full py-20 px-4 lg:px-0"
      style={{
        paddingLeft: 'max(16px, calc(50% - 625px))',
        paddingRight: 'max(16px, calc(50% - 625px))',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-[62px]">
        {/* Left Side - Image Collage with Stats */}
        <div 
          className="relative shrink-0 w-full lg:w-[684px]"
          style={{
            height: '760px',
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >
          {/* Main Image - Top Left (Classroom Scene) */}
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=536&h=488&fit=crop&q=80"
            alt="Classroom with students and teacher"
            className="absolute left-[43px] top-0 w-[536px] h-[488px] rounded-[40px]"
            style={{ 
              transform: 'rotate(5deg)', 
              objectFit: 'cover',
              borderRadius: '40px 40px 40px 0'
            }}
            onError={(e) => {
              // Fallback to placeholder if image fails
              e.currentTarget.src = 'https://via.placeholder.com/536x488/7166F5/FFFFFF?text=Classroom+Scene'
            }}
          />
          
          {/* Overlapping Image - Bottom Right (Collaborative Group) */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=364&h=352&fit=crop&q=80"
            alt="Collaborative group discussion"
            className="absolute right-0 bottom-[58px] w-[364px] h-[352px] rounded-[40px] z-10"
            style={{ 
              transform: 'rotate(5deg)', 
              objectFit: 'cover',
              borderRadius: '40px 40px 40px 40px'
            }}
            onError={(e) => {
              // Fallback to placeholder if image fails
              e.currentTarget.src = 'https://via.placeholder.com/364x352/7166F5/FFFFFF?text=Collaboration'
            }}
          />

          {/* Stats Box - Bottom Left (Purple Box) */}
          <div 
            className="absolute left-0 bottom-[60px] rounded-[20px] flex items-center justify-center z-20"
            style={{ 
              width: '300px',
              height: '200px',
              background: '#7166F5',
              transform: 'rotate(5deg)'
            }}
          >
            <div className="flex flex-col items-center justify-center h-full px-4 text-center">
              <div 
                className="text-[48px] font-extrabold leading-[52px] mb-2"
                style={{ color: '#FFFFFF' }}
              >
                40+
              </div>
              <p 
                className="text-xl font-extrabold leading-[26px]"
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
        <div 
          className="w-full lg:w-[500px] flex flex-col items-start"
          style={{
            padding: '0px',
            gap: '40px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
            height: 'auto',
            minHeight: '711px'
          }}
        >
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
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Fast & Easy Process */}
              <div className="w-full sm:w-[250px]">
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
              <div className="w-full sm:w-[250px]">
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
                    <div className="w-[18px] h-[18px] shrink-0">
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
    </section>
  )
}
