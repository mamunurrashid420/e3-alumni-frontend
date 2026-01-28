import { useEffect, useState, useRef } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Download } from 'lucide-react'
import { MembershipCertificate } from './certificate/MembershipCertificate'
import { useAuthStore } from '@/stores/authStore'
import { generateCertificate } from '@/lib/certificateGenerator'
import { apiClient } from '@/api/client'
import { toast } from 'sonner'
import { Button } from './ui/button'

export function Certificate() {
  const navigate = useNavigate()
  const { fetchUser, isLoading, user } = useAuthStore()
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false)
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    // Only run once on mount
    if (hasInitializedRef.current) {
      return
    }
    hasInitializedRef.current = true

    // If user already exists and has membership_application, don't fetch
    if (user?.membership_application) {
      return
    }

    // If we have a token, fetch fresh user data (to get membership_application)
    if (apiClient.isAuthenticated() && !isLoading) {
      fetchUser().catch(() => {
        navigate({ to: '/login' })
      })
    } else if (!apiClient.isAuthenticated()) {
      // If not authenticated, redirect to login
      navigate({ to: '/login' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  const handleDownloadCertificate = async () => {
    if (!user) {
      toast.error('User data not available. Please try again.')
      return
    }

    if (!user.member_id) {
      toast.error('Member ID is missing. Please contact support.')
      return
    }

    setIsGeneratingCertificate(true)
    try {
      await generateCertificate(user)
      toast.success('Certificate downloaded successfully!')
    } catch (error) {
      console.error('Certificate generation error:', error)
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to generate certificate. Please try again.'
      )
    } finally {
      setIsGeneratingCertificate(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#3B60C9]"></div>
          <p className="mt-4 text-gray-600">Loading certificate...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-gray-600">User data not available. Please try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Download Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleDownloadCertificate}
          disabled={isGeneratingCertificate}
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          {isGeneratingCertificate ? 'Generating...' : 'Download Certificate'}
        </Button>
      </div>

      {/* Certificate Display */}
      <div className="flex justify-center bg-gray-100 p-4 md:p-6 rounded-lg overflow-auto">
        <div 
          className="origin-top mx-auto"
          style={{
            transform: 'scale(0.85)',
            transformOrigin: 'top center',
            width: '297mm',
            height: '210mm',
            minWidth: '297mm',
            minHeight: '210mm',
          }}
        >
          <MembershipCertificate user={user} />
        </div>
      </div>
    </div>
  )
}
