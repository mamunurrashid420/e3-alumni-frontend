import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import logoImage from '@/assets/alumni/logo.jpg'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Scholarship', href: '/scholarship' },
    { label: 'News & Events', href: '/news-events' },
    { label: 'Membership', href: '/membership' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const aboutMenuItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Message from the President', href: '/about/president' },
    { label: 'Message from the General Secretary', href: '/about/secretary' },
  ]

  return (
    <header className="relative w-full">
      {/* Top Blue Bar */}
      <div className="h-7 sm:h-8 bg-[#3B60C9] w-full flex items-center justify-end gap-2 px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80">
        <Link to="/register">
          <Button
            variant="outline"
            size="sm"
            className="bg-white text-[#3B60C9] hover:bg-gray-100 border-0 h-5 sm:h-6 text-[10px] sm:text-xs px-2 sm:px-3"
          >
            <span className="hidden sm:inline">Apply for Membership</span>
            <span className="sm:hidden">Apply</span>
          </Button>
        </Link>
        <Link to="/login">
          <Button
            variant="outline"
            size="sm"
            className="bg-white text-[#3B60C9] hover:bg-gray-100 border-0 h-5 sm:h-6 text-[10px] sm:text-xs px-2 sm:px-3"
          >
            <span className="hidden sm:inline">Log In</span>
            <span className="sm:hidden">Login</span>
          </Button>
        </Link>
      </div>

      {/* Main Navigation Bar */}
      <div className="min-h-[70px] sm:h-[90px] lg:h-[100px] bg-white shadow-lg w-full flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 gap-4 sm:gap-6 lg:gap-10">
        {/* Logo and School Name */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 sm:border-3 md:border-4 border-[#3B60C9] bg-white flex items-center justify-center shrink-0 overflow-hidden">
            <img 
              src={logoImage} 
              alt="JSSAA Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-[#3B60C9] font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
              JAHAPUR SECONDARY SCHOOL
            </h1>
            <p className="text-[#3B60C9] text-[10px] sm:text-xs md:text-sm">ALUMNI ASSOCIATION</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-[#3B60C9] font-medium hover:underline flex items-center gap-1 text-sm xl:text-base whitespace-nowrap cursor-pointer">
                      {item.label}
                      <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[200px]">
                    {aboutMenuItems.map((menuItem) => (
                      <DropdownMenuItem
                        key={menuItem.href}
                        onClick={() => navigate({ to: menuItem.href })}
                        className="cursor-pointer text-[#3B60C9]"
                      >
                        {menuItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={item.href}
                to={item.href}
                className="text-[#3B60C9] font-medium hover:underline flex items-center gap-1 text-sm xl:text-base whitespace-nowrap"
              >
                {item.label}
              </Link>
            )
          })}
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
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="flex flex-col">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-[#3B60C9] font-medium hover:bg-gray-50 flex items-center justify-between py-2 sm:py-2.5 px-2 rounded transition-colors w-full text-left">
                          <span className="text-sm sm:text-base">{item.label}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="min-w-[200px] ml-2">
                        {aboutMenuItems.map((menuItem) => (
                          <DropdownMenuItem
                            key={menuItem.href}
                            onClick={() => {
                              navigate({ to: menuItem.href })
                              setIsMobileMenuOpen(false)
                            }}
                            className="cursor-pointer text-[#3B60C9]"
                          >
                            {menuItem.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )
              }
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[#3B60C9] font-medium hover:bg-gray-50 flex items-center justify-between py-2 sm:py-2.5 px-2 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sm sm:text-base">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
