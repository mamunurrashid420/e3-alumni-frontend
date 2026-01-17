import { Button } from '@/components/ui/button'
import event1 from '@/assets/static/event1.png'
import event2 from '@/assets/static/event2.png'

export function AboutUsSection() {
  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-20 relative z-10"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[320px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-24">
        {/* Left Side - Image Collage */}
        <div className="relative w-full lg:w-[494px] h-[400px] md:h-[450px] lg:h-[520px] shrink-0 max-w-[494px] mx-auto lg:mx-0">
          {/* Background SVG Shape */}
          <div 
            className="absolute left-0 top-0 w-[114px] md:w-[180px] lg:w-[228px] h-[90px] md:h-[140px] lg:h-[179px]"
            style={{ 
              background: '#3B60C9',
              clipPath: 'polygon(0 0, 0 100%, 100% 0)'
            }}
          />
          
          {/* Main Image */}
          <img 
            src={event1}
            alt="Students learning"
            className="absolute left-[18px] md:left-[28px] lg:left-[35px] top-[18px] md:top-[28px] lg:top-[35px] w-[calc(100%-36px)] md:w-[calc(100%-56px)] lg:w-[403px] h-[calc(100%-36px)] md:h-[calc(100%-56px)] lg:h-[433px] rounded object-cover"
          />
          
          {/* Overlapping Image */}
          <img 
            src={event2}
            alt="Students studying"
            className="absolute right-0 bottom-0 w-[40%] md:w-[45%] lg:w-[227px] h-[60%] md:h-[65%] lg:h-[312px] rounded shadow-lg object-cover"
            style={{ 
              boxShadow: '0px 0px 94.47px rgba(0, 0, 0, 0.24)'
            }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 max-w-[686px] w-full">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-11">
            <div className="flex flex-col gap-2">
              <p 
                className="text-sm md:text-base font-semibold"
                style={{ color: '#999898' }}
              >
                ABOUT US
              </p>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] lg:leading-[72px]"
                style={{ color: '#021E40' }}
              >
                Ex-Students Association Of Textile Engineering College, Barishal (ESAT-B)
              </h2>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <p 
                className="text-sm md:text-base leading-relaxed md:leading-[26px]"
                style={{ color: '#696868' }}
              >
                Ex-Students Association Of Textile Engineering College, Barishal (ESAT-B) is representing the nationwide Textile Engineer community. This is very important that the professionally Textile Engineer in our country are not organized in a platform. ESAT-B dreams to connect the Textile Engineer of Bangladesh in such an organized platform where everyone can be benefited. Since 1<sup>st</sup> June, 2012 professional merchandisers came forward to up lift it through ESAT-B.
              </p>
              <p 
                className="text-sm md:text-base leading-relaxed md:leading-[26px]"
                style={{ color: '#696868' }}
              >
                Our main goal is to keep sustainable RMG & TEXTILE sector in the global market.
              </p>
              <p 
                className="text-sm md:text-base leading-relaxed md:leading-[26px]"
                style={{ color: '#696868' }}
              >
                This is a non-political organization. We have a lot of activities to enhance professionalism of Textile Engineer by trainings, seminars, study circles, publishing learning portal and online research & publish directory. This is conveying important information for Textile & RMG Textile Engineer which will help to do the things in the professional life.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h3 
                className="text-xl md:text-2xl font-semibold"
                style={{ color: '#021E40' }}
              >
                Key Activities of Ex-Students Association Of Textile Engineering College, Barishal (ESAT-B)
              </h3>
              <ul className="flex flex-col gap-2 md:gap-3 list-disc list-inside">
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  To build and maintain relationship with professional Textile Engineer.
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  To give support for the professionals who works in the apparel industry as a Textile Engineer.
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  To give support and encourage in development of professionalism among the Textile Engineer.
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Special training programs for the members & new generations.
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  To recognize and develop constructive leadership quality and personal integrity.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h3 
                className="text-xl md:text-2xl font-semibold"
                style={{ color: '#021E40' }}
              >
                Goal of Ex-Students Association Of Textile Engineering College, Barishal (ESAT-B)
              </h3>
              <ul className="flex flex-col gap-2 md:gap-3 list-disc list-inside">
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Workshop program for Textile Engineer
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Press conference
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Book distribution for the poor student
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Tree plantation
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Winter cloth distribution
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Celebrating the national day
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Scholarship for the children of Textile Engineer
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Aid for victimized Textile Engineer
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  SME initiatives for Textile Engineer
                </li>
                <li className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#696868' }}>
                  Hospital facilities for Textile Engineer
                </li>
              </ul>
            </div>

            <Button 
              className="w-full sm:w-[184px] h-[45px] md:h-[50px] text-sm md:text-base font-semibold rounded"
              style={{ background: '#3B60C9', color: '#FFFFFF' }}
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
