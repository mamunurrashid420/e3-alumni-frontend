import { useRef, useState } from 'react'
import { Edit, Camera, Loader2 } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import { apiClient } from '@/api/client'
import { AuthenticatedImage } from '@/components/AuthenticatedImage'
import { toast } from 'sonner'

export function ProfileCard() {
  const { user, setUser } = useAuthStore()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const userName = user?.name || 'Member'
  const initials = getInitials(userName)
  const memberId = user?.member_id || 'N/A'
  const primaryMemberType = user?.primary_member_type || 'N/A'
  const secondaryMemberType = user?.secondary_member_type
  const photoUrl = user?.profile?.photo ?? null

  const handlePhotoClick = () => {
    if (isUploading) return
    fileInputRef.current?.click()
  }

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!user?.profile) {
      toast.error('Profile not available. Please complete your profile first.')
      e.target.value = ''
      return
    }
    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      toast.error('Please choose a JPG or PNG image')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be under 5MB')
      return
    }
    try {
      setIsUploading(true)
      const updated = await apiClient.updateMemberProfile({ photo: file })
      setUser(updated)
      toast.success('Photo updated')
    } catch (err: unknown) {
      const message = err && typeof err === 'object' && 'message' in err ? String((err as { message: unknown }).message) : 'Failed to update photo'
      toast.error(message)
    } finally {
      setIsUploading(false)
      e.target.value = ''
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-black">Profile</h3>
        <Link
          to="/profile"
          className="text-black/70 hover:text-[#3B60C9] transition-colors"
        >
          <Edit className="w-5 h-5" />
        </Link>
      </div>

      <div className="text-center">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          className="hidden"
          onChange={handlePhotoChange}
          disabled={isUploading}
        />
        <button
          type="button"
          onClick={handlePhotoClick}
          disabled={isUploading}
          className="relative w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#3B60C9] focus:ring-offset-2 disabled:opacity-60"
        >
          {photoUrl ? (
            <AuthenticatedImage
              src={photoUrl}
              alt={userName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl font-bold text-black/70">{initials}</span>
          )}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            {isUploading ? (
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            ) : (
              <Camera className="w-8 h-8 text-white" />
            )}
          </span>
        </button>
        <h4 className="text-lg font-bold text-black mb-1">{userName}</h4>
        <p className="text-sm text-black/70 mb-1">Member ID: {memberId}</p>
        <div className="text-sm text-black/60">
          <p>{primaryMemberType}</p>
          {secondaryMemberType && (
            <p className="mt-1">{secondaryMemberType.name}</p>
          )}
        </div>
      </div>
    </div>
  )
}
