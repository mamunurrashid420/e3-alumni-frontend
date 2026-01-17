import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logo from '@/assets/static/logo.png'

export function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { emailOrPhone, password, rememberMe })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Background Image with Overlay */}
      <div className="hidden lg:flex lg:w-[40%] relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col p-8 w-full">
          {/* Go Back Link */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors self-start mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go back</span>
          </Link>

          {/* Logo and School Info */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <img 
                src={logo} 
                alt="ESAT-B Logo" 
                className="w-20 h-20 object-contain mx-auto"
              />
            </div>
            <h1 className="text-white text-3xl font-bold uppercase text-center mb-2">
              Ex-Students Association Of Textile Engineering College,Barishal (ESAT-B)
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 lg:w-[60%] bg-white relative overflow-y-auto flex items-center justify-center">
        {/* Form Content */}
        <div className="w-full max-w-md p-8 lg:p-12">
          {/* Mobile Go Back Link */}
          <Link 
            to="/" 
            className="lg:hidden flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go back</span>
          </Link>

          {/* Title and Subtitle */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              Log in to your account
            </h1>
            <p className="text-sm lg:text-base">
              Enter credentials to login to your profile
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email or Phone */}
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium mb-2">
                Email or Phone
              </label>
              <Input
                id="emailOrPhone"
                type="text"
                placeholder="Enter email/phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
                className="w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "w-11 h-6 rounded-full transition-colors duration-200 ease-in-out",
                      rememberMe ? "bg-[#3B60C9]" : "bg-gray-300"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out",
                        rememberMe ? "translate-x-5" : "translate-x-0"
                      )}
                    />
                  </div>
                </div>
                <span className="text-sm">Remember Me</span>
              </label>
              <button
                type="button"
                onClick={() => {
                  // TODO: Implement forgot password functionality
                  console.log('Forgot password clicked')
                }}
                className="text-sm hover:text-[#3B60C9] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-[#3B60C9] hover:bg-[#2d4fa8] text-white py-2.5 rounded-md transition-colors font-medium"
            >
              Login
            </Button>

            {/* Footer */}
            <div className="text-center pt-4">
              <p className="text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#3B60C9] hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
