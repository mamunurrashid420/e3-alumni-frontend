import { useState } from 'react'
import event1 from '@/assets/static/event1.png'
import event2 from '@/assets/static/event2.png'
import event3 from '@/assets/static/event3.png'
import gallery2 from '@/assets/static/2.png'
import static3 from '@/assets/static/3.png'
import static4 from '@/assets/static/4.png'

const galleryFilters = ['All', 'Old Memories', 'Event', 'Our Picnic', 'Recent']

const galleryImages = [
  { id: 1, category: 'All', url: event1 },
  { id: 2, category: 'All', url: event2 },
  { id: 3, category: 'All', url: event3 },
  { id: 4, category: 'All', url: gallery2 },
  { id: 5, category: 'All', url: static3 },
  { id: 6, category: 'All', url: static4 },
  { id: 7, category: 'All', url: 'https://picsum.photos/228/260?random=7' },
]

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(0)

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <section 
      className="w-full py-12 md:py-16 flex flex-col items-center gap-6 md:gap-8 lg:gap-9"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[336px] box-border">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] lg:leading-[72px] text-center"
          style={{ color: '#021E40' }}
        >
          Our Gallery
        </h2>

        {/* Filter Tabs */}
        <div 
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 px-1.5 py-2 rounded-xl mt-6 md:mt-8"
          style={{ background: '#F9F9F9' }}
        >
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-3 md:px-5 py-2 rounded-md text-sm md:text-base font-medium transition-colors"
              style={{
                background: activeFilter === filter ? '#3B60C9' : 'transparent',
                color: activeFilter === filter ? '#FFFFFF' : '#3B60C9',
                boxShadow: activeFilter === filter ? '0px 0px 16px rgba(42, 42, 42, 0.25)' : 'none',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 w-full mt-6 md:mt-8">
          {/* Large Image */}
          <img 
            src={galleryImages[0].url}
            alt="Gallery"
            className="w-full max-w-[228px] h-[200px] md:h-[240px] lg:h-[260px] rounded-2xl object-cover"
          />

          {/* Middle Column */}
          <div className="flex flex-row lg:flex-col gap-4 md:gap-6">
            <img 
              src={galleryImages[1].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[180px] md:h-[220px] lg:h-[248px] rounded-2xl object-cover"
            />
            <img 
              src={galleryImages[2].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[180px] md:h-[220px] lg:h-[248px] rounded-2xl object-cover"
            />
          </div>

          {/* Large Center Image */}
          <img 
            src={galleryImages[3].url}
            alt="Gallery"
            className="w-full max-w-[296px] h-[300px] md:h-[400px] lg:h-[520px] rounded-2xl object-cover"
          />

          {/* Right Column */}
          <div className="flex flex-row lg:flex-col gap-4 md:gap-6">
            <img 
              src={galleryImages[4].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[180px] md:h-[220px] lg:h-[248px] rounded-2xl object-cover"
            />
            <img 
              src={galleryImages[5].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[180px] md:h-[220px] lg:h-[248px] rounded-2xl object-cover"
            />
          </div>

          {/* Last Image */}
          <img 
            src={galleryImages[6].url}
            alt="Gallery"
            className="w-full max-w-[228px] h-[200px] md:h-[240px] lg:h-[260px] rounded-2xl object-cover"
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-4 mt-6 md:mt-8">
          <div 
            className="w-[24px] h-[24px] rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: '#525FE1' }}
          >
            <div 
              className="w-[10px] h-[10px] rounded-full"
              style={{ background: '#525FE1' }}
            />
          </div>
          <div className="flex gap-2">
            {[1, 2].map((page) => (
              <div
                key={page}
                className="w-[10px] h-[10px] rounded-full"
                style={{ 
                  background: page === currentPage + 1 ? '#525FE1' : 'rgba(82, 95, 225, 0.5)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
