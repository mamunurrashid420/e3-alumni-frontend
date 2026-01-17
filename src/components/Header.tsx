import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import logo from '@/assets/static/logo.png'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Scholarship', href: '/scholarship' },
    { label: 'News & Events', href: '/news-events' },
    { label: 'Board Members', href: '/membership' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="relative w-full">
      {/* Top Blue Bar */}
      <div className="h-7 sm:h-8 bg-[#3B60C9] w-full flex items-center justify-end px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80">
        <Link to="/login">
          <Button
            variant="outline"
            size="sm"
            className="bg-white text-[#3B60C9] hover:bg-gray-100 border-0 h-5 sm:h-6 text-[10px] sm:text-xs px-2 sm:px-3"
          >
            <span className="hidden sm:inline">Register / Log In</span>
            <span className="sm:hidden">Login</span>
          </Button>
        </Link>
      </div>

      {/* Main Navigation Bar */}
      <div className="min-h-[80px] sm:h-[100px] lg:h-[100px] bg-white shadow-lg w-full flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 gap-4 sm:gap-6 lg:gap-10">
        {/* Logo and School Name */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          <Link to="/" className="shrink-0">
            <img 
              src={logo} 
              alt="ESAT-B Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
            />
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-[#3B60C9] font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
              Ex-Students Association Of Textile Engineering College,Barishal (ESAT-B)
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[#3B60C9] font-medium hover:underline flex items-center gap-1 text-sm xl:text-base whitespace-nowrap"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#3B60C9] p-2 hover:bg-gray-100 rounded transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 px-3 sm:px-4 py-3 sm:py-4 border-t border-gray-200">
          <nav className="flex flex-col gap-2 sm:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[#3B60C9] font-medium hover:bg-gray-50 flex items-center justify-between py-2 sm:py-2.5 px-2 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-sm sm:text-base">{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
