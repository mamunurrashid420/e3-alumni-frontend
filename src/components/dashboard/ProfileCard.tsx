import { Edit } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'

export function ProfileCard() {
  const { user } = useAuthStore()
  
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
        <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <span className="text-2xl font-bold text-black/70">{initials}</span>
        </div>
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
