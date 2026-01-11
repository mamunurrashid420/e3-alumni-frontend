import { Button } from '@/components/ui/button'

export function AboutUsSection() {
  return (
    <section 
      className="w-full py-20 relative z-10"
      style={{
        paddingLeft: '320px',
        paddingRight: '320px',
      }}
    >
      <div className="flex items-center gap-24">
        {/* Left Side - Image Collage */}
        <div className="relative w-[494px] h-[520px] flex-shrink-0">
          {/* Background SVG Shape */}
          <div 
            className="absolute left-0 top-0 w-[228px] h-[179px]"
            style={{ 
              background: '#3B60C9',
              clipPath: 'polygon(0 0, 0 100%, 100% 0)'
            }}
          />
          
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=403&q=80"
            alt="Students learning"
            className="absolute left-[35px] top-[35px] w-[403px] h-[433px] rounded"
            style={{ objectFit: 'cover' }}
          />
          
          {/* Overlapping Image */}
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=227&q=80"
            alt="Students studying"
            className="absolute right-0 bottom-[0px] w-[227px] h-[312px] rounded shadow-lg"
            style={{ 
              objectFit: 'cover',
              boxShadow: '0px 0px 94.47px rgba(0, 0, 0, 0.24)'
            }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 max-w-[686px]">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-2">
              <p 
                className="text-base font-semibold"
                style={{ color: '#999898' }}
              >
                About Us
              </p>
              <h2 
                className="text-5xl font-semibold leading-[72px]"
                style={{ color: '#021E40' }}
              >
                Welcome to The University
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p 
                className="text-base leading-[26px]"
                style={{ color: '#696868' }}
              >
                Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.
              </p>
              <p 
                className="text-base leading-[26px]"
                style={{ color: '#696868' }}
              >
                Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.
              </p>
              <p 
                className="text-base leading-[26px]"
                style={{ color: '#696868' }}
              >
                Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.
              </p>
            </div>

            <Button 
              className="w-[184px] h-[50px] text-base font-semibold rounded"
              style={{ background: '#3B60C9', color: '#FFFFFF' }}
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
