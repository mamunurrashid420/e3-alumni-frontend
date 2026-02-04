import { useState } from 'react'
import gallery1 from '@/assets/alumni/gallery/1.jpg'
import gallery2 from '@/assets/alumni/gallery/2.jpg'
import gallery3 from '@/assets/alumni/gallery/3.jpeg'
import gallery4 from '@/assets/alumni/gallery/4.jpeg'
import galleryBatch2005 from '@/assets/alumni/gallery/Batch-2005.jpg'

const galleryFilters = ['All', 'Old Memories', 'Event', 'Our Picnic', 'Recent']

const galleryImages = [
  { id: 1, category: 'All', url: gallery1 },
  { id: 2, category: 'All', url: gallery2 },
  { id: 3, category: 'All', url: gallery3 },
  { id: 4, category: 'All', url: gallery4 },
  { id: 5, category: 'All', url: galleryBatch2005 },
  { id: 6, category: 'All', url: gallery3 },
  { id: 7, category: 'All', url: gallery1 },
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

        {/* Image Grid - simple 1-2 column on mobile/tablet to prevent overflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full mt-6 md:mt-8 lg:hidden">
          {galleryImages.map((img) => (
            <img
              key={img.id}
              src={img.url}
              alt="Gallery"
              className="w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-2xl object-cover"
            />
          ))}
        </div>

        {/* Desktop: custom 5-column flex layout */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-4 md:gap-6 w-full mt-6 md:mt-8">
          <img 
            src={galleryImages[0].url}
            alt="Gallery"
            className="w-full max-w-[228px] h-[260px] rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-4 md:gap-6">
            <img 
              src={galleryImages[1].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[248px] rounded-2xl object-cover"
            />
            <img 
              src={galleryImages[2].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[248px] rounded-2xl object-cover"
            />
          </div>
          <img 
            src={galleryImages[3].url}
            alt="Gallery"
            className="w-full max-w-[296px] h-[520px] rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-4 md:gap-6">
            <img 
              src={galleryImages[4].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[248px] rounded-2xl object-cover"
            />
            <img 
              src={galleryImages[5].url}
              alt="Gallery"
              className="w-full max-w-[200px] h-[248px] rounded-2xl object-cover"
            />
          </div>
          <img 
            src={galleryImages[6].url}
            alt="Gallery"
            className="w-full max-w-[228px] h-[260px] rounded-2xl object-cover"
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
