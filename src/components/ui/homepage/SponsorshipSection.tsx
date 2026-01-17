export function SponsorshipSection() {
  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-20"
      style={{ background: '#F9F9F9' }}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[320px]">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center">
            <p 
              className="text-sm md:text-base font-semibold"
              style={{ color: '#999898' }}
            >
              SPONSORSHIP OPPORTUNITIES
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] lg:leading-[72px]"
              style={{ color: '#021E40' }}
            >
              Sponsorship Packages
            </h2>
          </div>

          {/* Main Sponsorship Packages */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
            {/* Main Sponsorship Card */}
            <div 
              className="flex-1 max-w-md mx-auto md:mx-0 rounded-lg p-6 md:p-8"
              style={{
                background: '#FFFFFF',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="flex flex-col gap-6">
                <div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ color: '#3B60C9' }}
                  >
                    Main Sponsorship
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p 
                      className="text-xl md:text-2xl font-semibold"
                      style={{ color: '#021E40' }}
                    >
                      5,00,000 BDT
                    </p>
                    <p 
                      className="text-lg md:text-xl font-medium"
                      style={{ color: '#696868' }}
                    >
                      USD $6,000
                    </p>
                  </div>
                </div>
                <div className="h-px" style={{ background: '#E0E0E0' }} />
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B60C9] font-bold mt-1">•</span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: '#696868' }}>
                      Full page advertisement size company profile in the event souvenir
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B60C9] font-bold mt-1">•</span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: '#696868' }}>
                      Branding on all promotional material – print and online
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B60C9] font-bold mt-1">•</span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: '#696868' }}>
                      Opportunity to have leaflet or a logo on café table
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B60C9] font-bold mt-1">•</span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: '#696868' }}>
                      Marketing and PR support pre event
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Co-Sponsorship Card */}
            <div 
              className="flex-1 max-w-md mx-auto md:mx-0 rounded-lg p-6 md:p-8"
              style={{
                background: '#FFFFFF',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="flex flex-col gap-6">
                <div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ color: '#3B60C9' }}
                  >
                    Co-Sponsorship
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p 
                      className="text-xl md:text-2xl font-semibold"
                      style={{ color: '#021E40' }}
                    >
                      1,00,000 BDT
                    </p>
                    <p 
                      className="text-lg md:text-xl font-medium"
                      style={{ color: '#696868' }}
                    >
                      USD $2,500
                    </p>
                  </div>
                </div>
                <div className="h-px" style={{ background: '#E0E0E0' }} />
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B60C9] font-bold mt-1">•</span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: '#696868' }}>
                      Half page advertisement size company profile in the event souvenir
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B60C9] font-bold mt-1">•</span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: '#696868' }}>
                      Marketing and PR support pre event
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B60C9] font-bold mt-1">•</span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: '#696868' }}>
                      Promotional advertisement pre program on – leaflet and badge with company logo
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Advertisement Options */}
          <div className="mt-8 md:mt-12">
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
              style={{ color: '#021E40' }}
            >
              Additional Advertisement Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Option 1 */}
              <div 
                className="rounded-lg p-5 md:p-6"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div className="flex flex-col gap-3">
                  <h4 
                    className="text-lg md:text-xl font-semibold"
                    style={{ color: '#021E40' }}
                  >
                    Full Page Advertisement
                  </h4>
                  <p 
                    className="text-base md:text-lg font-bold"
                    style={{ color: '#3B60C9' }}
                  >
                    1,00,000 BDT
                  </p>
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: '#696868' }}
                  >
                    Full page advertisement size company profile in the event souvenir
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div 
                className="rounded-lg p-5 md:p-6"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div className="flex flex-col gap-3">
                  <h4 
                    className="text-lg md:text-xl font-semibold"
                    style={{ color: '#021E40' }}
                  >
                    Half Page Advertisement
                  </h4>
                  <p 
                    className="text-base md:text-lg font-bold"
                    style={{ color: '#3B60C9' }}
                  >
                    50,000 BDT
                  </p>
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: '#696868' }}
                  >
                    Half page advertisement size company profile in the event souvenir
                  </p>
                </div>
              </div>

              {/* Option 3 */}
              <div 
                className="rounded-lg p-5 md:p-6"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div className="flex flex-col gap-3">
                  <h4 
                    className="text-lg md:text-xl font-semibold"
                    style={{ color: '#021E40' }}
                  >
                    3/4 Page Advertisement
                  </h4>
                  <p 
                    className="text-base md:text-lg font-bold"
                    style={{ color: '#3B60C9' }}
                  >
                    20,000 BDT
                  </p>
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: '#696868' }}
                  >
                    3/4 page advertisement size company profile in the event souvenir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
