import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Download } from 'lucide-react'
import { MembershipCertificate } from './certificate/MembershipCertificate'
import { useAuthStore } from '@/stores/authStore'
import { generateCertificate } from '@/lib/certificateGenerator'
import { toast } from 'sonner'
import { Button } from './ui/button'

export function Certificate() {
  const navigate = useNavigate()
  const { fetchUser, isAuthenticated, isLoading, user } = useAuthStore()
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      if (!isAuthenticated) {
        try {
          await fetchUser()
        } catch (error) {
          navigate({ to: '/login' })
        }
      }
    }

    loadUser()
  }, [fetchUser, isAuthenticated, navigate])

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
