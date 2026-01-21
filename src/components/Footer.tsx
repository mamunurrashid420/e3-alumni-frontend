import { Link } from '@tanstack/react-router'
import { Facebook, Linkedin, Youtube, Twitter, MapPin, Phone, Mail, ChevronsRight, MessageCircle } from 'lucide-react'
import logo from '@/assets/static/logo.png'

export function Footer() {
  return (
    <footer className="bg-[#231F40] flex flex-col w-full">
      <div className="grid grid-cols-4 gap-[44px] py-[68px] px-[320px] pb-[44px] flex-1 max-[1920px]:gap-8 max-[1920px]:py-16 max-[1920px]:px-8 max-[1536px]:px-6 max-[1280px]:grid-cols-2 max-[1280px]:gap-8 max-[1280px]:py-14 max-[1024px]:gap-6 max-[1024px]:py-12 max-[1024px]:px-5 max-md:grid-cols-1 max-md:gap-6 max-md:py-10 max-md:px-4 max-[640px]:py-8 max-[640px]:px-3 max-[640px]:gap-5">
        {/* Column 1: Brand and Social Media */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-6 max-md:gap-5">
            <div className="mb-3">
              <Link to="/" className="block">
                <img 
                  src={logo} 
                  alt="ESAT-B Logo" 
                  className="w-[200px] h-[200px] object-contain mb-5 max-[1280px]:w-[180px] max-[1280px]:h-[180px] max-[1024px]:w-[160px] max-[1024px]:h-[160px] max-md:w-[140px] max-md:h-[140px] max-md:mb-4 max-[640px]:w-[120px] max-[640px]:h-[120px]"
                />
              </Link>
            </div>
            <p className="font-['Roboto'] font-normal text-base leading-6 text-white opacity-90 max-w-full max-[1024px]:text-sm max-[640px]:text-xs max-[640px]:leading-5">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
            <div className="flex gap-3 mt-3 max-md:gap-2 max-[640px]:gap-2">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 no-underline max-[640px]:w-8 max-[640px]:h-8" aria-label="Facebook">
                <Facebook className="w-5 h-5 max-[640px]:w-4 max-[640px]:h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 no-underline max-[640px]:w-8 max-[640px]:h-8" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 max-[640px]:w-4 max-[640px]:h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 no-underline max-[640px]:w-8 max-[640px]:h-8" aria-label="YouTube">
                <Youtube className="w-5 h-5 max-[640px]:w-4 max-[640px]:h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 no-underline max-[640px]:w-8 max-[640px]:h-8" aria-label="Twitter">
                <Twitter className="w-5 h-5 max-[640px]:w-4 max-[640px]:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="flex flex-col">
          <h3 className="font-['Roboto'] font-bold text-xl leading-6 text-white mb-8 capitalize max-[1280px]:text-lg max-[1280px]:mb-6 max-md:text-lg max-md:mb-5 max-[640px]:text-base max-[640px]:mb-4">Explore</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-4 max-md:gap-3">
            <li>
              <Link to="/about" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/news-events" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/news-events" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Blog & News
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                FAQ Question
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="flex flex-col">
          <h3 className="font-['Roboto'] font-bold text-xl leading-6 text-white mb-8 capitalize max-[1280px]:text-lg max-[1280px]:mb-6 max-md:text-lg max-md:mb-5 max-[640px]:text-base max-[640px]:mb-4">Useful Links</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-4 max-md:gap-3">
            <li>
              <Link to="/contact" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Recent Jobs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Our Mission
              </a>
            </li>
            <li>
              <Link to="/scholarship" className="flex items-center gap-2 font-['Roboto'] font-normal text-base leading-6 text-white no-underline transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-1">
                <ChevronsRight className="w-4 h-4 text-white max-[640px]:w-3.5 max-[640px]:h-3.5" />
                Scholarship
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col">
          <h3 className="font-['Roboto'] font-bold text-xl leading-6 text-white mb-8 capitalize max-[1280px]:text-lg max-[1280px]:mb-6 max-md:text-lg max-md:mb-5 max-[640px]:text-base max-[640px]:mb-4">Contact Info</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-5 max-md:gap-4 max-[640px]:gap-4">
            <li className="flex items-start gap-3 font-['Roboto'] font-normal text-base leading-6 text-white opacity-90 max-[1024px]:text-sm max-[640px]:text-xs">
              <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5 max-[640px]:w-3.5 max-[640px]:h-3.5" />
              <span className="flex-1">Hossain Tower, 5th Floor, Sector #7, Uttara, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-start gap-3 font-['Roboto'] font-normal text-base leading-6 text-white opacity-90 max-[1024px]:text-sm max-[640px]:text-xs">
              <Phone className="w-5 h-5 text-white shrink-0 mt-0.5 max-[640px]:w-3.5 max-[640px]:h-3.5" />
              <span className="flex-1">+880 1712631461</span>
            </li>
            <li className="flex items-start gap-3 font-['Roboto'] font-normal text-base leading-6 text-white opacity-90 max-[1024px]:text-sm max-[640px]:text-xs">
              <MessageCircle className="w-5 h-5 text-white shrink-0 mt-0.5 max-[640px]:w-3.5 max-[640px]:h-3.5" />
              <span className="flex-1">+880 1712631461</span>
            </li>
            <li className="flex items-start gap-3 font-['Roboto'] font-normal text-base leading-6 text-white opacity-90 max-[1024px]:text-sm max-[640px]:text-xs">
              <Mail className="w-5 h-5 text-white shrink-0 mt-0.5 max-[640px]:w-3.5 max-[640px]:h-3.5" />
              <span className="flex-1">info@esatb.org</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#3B60C9] py-4 px-[320px] text-center w-full max-[1920px]:px-8 max-[1536px]:px-6 max-[1280px]:px-6 max-md:py-3 max-md:px-4 max-md:text-sm max-[640px]:py-2 max-[640px]:px-3">
        <p className="font-['Roboto'] font-normal text-base leading-6 text-white m-0 max-md:text-sm max-[640px]:text-xs">Copyright 2026 | Design & Development by E3 Innovations Ltd.</p>
      </div>
    </footer>
  )
}
