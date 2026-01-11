import { Linkedin, Youtube, Twitter, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section 
      className="relative w-full min-h-[500px] md:min-h-[650px] lg:min-h-[810px]"
      style={{
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
      <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-4 z-10">
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
      <div className="relative z-10 flex items-center justify-center min-h-[500px] md:min-h-[650px] lg:min-h-[810px] py-12 md:py-16 lg:py-20">
        <div className="text-center text-white max-w-4xl px-4 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">
            We Are Proud
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 px-4">
            Students Of Jahapur Secondary School
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed px-4">
            Alumni Needs Enables You To Harness The Power Of Your Alumni Network. Whatever May Be The Need (Academic, Relocation, Career, Projects, Mentorship, Etc. You Can Ask The Community And Get Responses In Three.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              className="bg-[#3B60C9] hover:bg-[#2d4fa8] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto"
            >
              Our Mission
            </Button>
            <Button 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
