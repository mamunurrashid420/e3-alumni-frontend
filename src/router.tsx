import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { HomepageLayout } from '@/layouts/HomepageLayout'
import { UserSpaceLayout } from '@/layouts/UserSpaceLayout'
import { Homepage } from '@/components/Homepage'
import { Registration } from '@/components/Registration'
import { Login } from '@/components/Login'

// Root route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// Homepage route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <HomepageLayout>
      <Homepage />
    </HomepageLayout>
  ),
})

// About route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <HomepageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-gray-600">Learn more about the Jahapur Secondary School Alumni Association.</p>
      </div>
    </HomepageLayout>
  ),
})

// Login route
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
})

// Register route
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: () => <Registration />,
})

import { Dashboard } from '@/components/Dashboard'
import { Profile } from '@/components/Profile'
import { Payment } from '@/components/Payment'

// Dashboard route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <UserSpaceLayout title="Dashboard" subtitle="User Information And Details">
      <Dashboard />
    </UserSpaceLayout>
  ),
})

// Profile route
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: () => (
    <UserSpaceLayout title="User Profile" subtitle="User Information And Details">
      <Profile />
    </UserSpaceLayout>
  ),
})

// Payment route
const paymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/payment',
  component: () => (
    <UserSpaceLayout title="Payment List" subtitle="Payment Information And Details">
      <Payment />
    </UserSpaceLayout>
  ),
})

// Scholarship route
const scholarshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/scholarship',
  component: () => (
    <HomepageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Scholarship</h1>
        <p className="text-gray-600">Information about scholarships available to alumni and students.</p>
      </div>
    </HomepageLayout>
  ),
})

// News & Events route
const newsEventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/news-events',
  component: () => (
    <HomepageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">News & Events</h1>
        <p className="text-gray-600">Stay updated with the latest news and events from the alumni association.</p>
      </div>
    </HomepageLayout>
  ),
})

// Membership route
const membershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/membership',
  component: () => (
    <HomepageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Membership</h1>
        <p className="text-gray-600">Join the alumni association and become a member.</p>
      </div>
    </HomepageLayout>
  ),
})

// Contact route
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <HomepageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-gray-600">Get in touch with the alumni association.</p>
      </div>
    </HomepageLayout>
  ),
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  scholarshipRoute,
  newsEventsRoute,
  membershipRoute,
  contactRoute,
  loginRoute,
  registerRoute,
  dashboardRoute,
  profileRoute,
  paymentRoute,
])

// Create router
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
