import { GetTogetherSection } from './GetTogetherSection'

export function GetTogetherBanner() {
  return (
    <section 
      className="absolute z-20"
      style={{
        width: '1280px',
        height: '380px',
        left: 'calc(50% - 1280px/2)',
        top: '620px', // Positioned so half (190px) overlaps HeroSection (810px - 190px = 620px)
        background: '#3B60C9',
        boxShadow: '0px 0px 20px rgba(29, 29, 29, 0.25)',
        borderRadius: '4px',
      }}
    >
      <div className="flex h-full">
        {/* Left Side - Image */}
        <div className="w-[40%] h-full overflow-hidden rounded-l-[4px]">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=512&q=80"
            alt="People socializing at an event"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Content */}
        <div className="w-[60%] h-full">
          <GetTogetherSection />
        </div>
      </div>
    </section>
  )
}
