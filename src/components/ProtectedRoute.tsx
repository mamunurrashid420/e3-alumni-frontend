import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import { apiClient } from '@/api/client'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading, fetchUser } = useAuthStore()

  useEffect(() => {
    const checkAuth = async () => {
      // If we have a token but no user data, try to fetch it
      if (apiClient.isAuthenticated() && !isAuthenticated) {
        try {
          await fetchUser()
        } catch (error) {
          // If fetch fails, redirect to login
          navigate({ to: '/login' })
        }
      } else if (!apiClient.isAuthenticated()) {
        // No token at all, redirect to login
        navigate({ to: '/login' })
      }
    }

    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#3B60C9]"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return <>{children}</>
}
