import { Linkedin, Youtube, Twitter, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section 
      className="hero-section"
      style={{
        position: 'absolute',
        width: '1920px',
        height: '810px',
        left: 'calc(50% - 1920px/2)',
        top: '0',
        background: '#FFFFFF',
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Social Media Icons - Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10 ml-4">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black/80 flex items-center justify-center hover:bg-black transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black/80 flex items-center justify-center hover:bg-black transition-colors"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5 text-white" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black/80 flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5 text-white" />
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black/80 flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Main Content - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            We Are Proud
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Students Of Jahapur Secondary School
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Alumni Needs Enables You To Harness The Power Of Your Alumni Network. Whatever May Be The Need (Academic, Relocation, Career, Projects, Mentorship, Etc. You Can Ask The Community And Get Responses In Three.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              className="bg-[#3B60C9] hover:bg-[#2d4fa8] text-white px-8 py-6 text-lg"
            >
              Our Mission
            </Button>
            <Button 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
