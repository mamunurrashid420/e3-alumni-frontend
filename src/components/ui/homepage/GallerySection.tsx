import { useState } from 'react'

const galleryFilters = ['All', 'Old Memories', 'Event', 'Our Picnic', 'Recent']

const galleryImages = [
  { id: 1, category: 'All', url: 'https://picsum.photos/228/260?random=1' },
  { id: 2, category: 'All', url: 'https://picsum.photos/200/248?random=2' },
  { id: 3, category: 'All', url: 'https://picsum.photos/200/248?random=3' },
  { id: 4, category: 'All', url: 'https://picsum.photos/296/520?random=4' },
  { id: 5, category: 'All', url: 'https://picsum.photos/200/248?random=5' },
  { id: 6, category: 'All', url: 'https://picsum.photos/200/248?random=6' },
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
      className="w-full py-16 flex flex-col items-center gap-9"
      style={{
        paddingLeft: '336px',
        paddingRight: '336px',
      }}
    >
      <h2 
        className="text-5xl font-semibold leading-[72px] text-center"
        style={{ color: '#021E40' }}
      >
        Our Gallery
      </h2>

      {/* Filter Tabs */}
      <div 
        className="flex items-center gap-6 px-1.5 py-2 rounded-xl"
        style={{ background: '#F9F9F9' }}
      >
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="px-5 py-2 rounded-md text-base font-medium transition-colors"
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
      <div className="flex flex-row items-center gap-6 w-full">
        {/* Large Image */}
        <img 
          src={galleryImages[0].url}
          alt="Gallery"
          className="w-[228px] h-[260px] rounded-2xl object-cover"
        />

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          <img 
            src={galleryImages[1].url}
            alt="Gallery"
            className="w-[200px] h-[248px] rounded-2xl object-cover"
          />
          <img 
            src={galleryImages[2].url}
            alt="Gallery"
            className="w-[200px] h-[248px] rounded-2xl object-cover"
          />
        </div>

        {/* Large Center Image */}
        <img 
          src={galleryImages[3].url}
          alt="Gallery"
          className="w-[296px] h-[520px] rounded-2xl object-cover"
        />

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <img 
            src={galleryImages[4].url}
            alt="Gallery"
            className="w-[200px] h-[248px] rounded-2xl object-cover"
          />
          <img 
            src={galleryImages[5].url}
            alt="Gallery"
            className="w-[200px] h-[248px] rounded-2xl object-cover"
          />
        </div>

        {/* Last Image */}
        <img 
          src={galleryImages[6].url}
          alt="Gallery"
          className="w-[228px] h-[260px] rounded-2xl object-cover"
        />
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-4">
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
    </section>
  )
}
