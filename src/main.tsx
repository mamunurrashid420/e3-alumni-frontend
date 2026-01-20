import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import './index.css'
import { router } from './router'
import { useAuthStore } from './stores/authStore'
import { apiClient } from './api/client'

// Initialize auth on app startup
function App() {
  const { fetchUser, isAuthenticated } = useAuthStore()

  useEffect(() => {
    // Only fetch user if we have a token but no user data
    if (apiClient.isAuthenticated() && !isAuthenticated) {
      fetchUser().catch(() => {
        // Silently fail - user will be redirected if needed
      })
    }
  }, [fetchUser, isAuthenticated])

  return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
