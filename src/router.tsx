import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { HomepageLayout } from '@/layouts/HomepageLayout'
import { UserSpaceLayout } from '@/layouts/UserSpaceLayout'
import { Homepage } from '@/components/Homepage'
import { Registration } from '@/components/Registration'
import { Login } from '@/components/Login'
import { About } from '@/components/About'
import { Scholarship } from '@/components/Scholarship'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'
import { MessageFromPresident } from '@/components/MessageFromPresident'
import { MessageFromGeneralSecretary } from '@/components/MessageFromGeneralSecretary'

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster position="top-right" richColors />
    </>
  ),
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
      <About />
    </HomepageLayout>
  ),
})

// Message from President route
const presidentMessageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/president',
  component: () => (
    <HomepageLayout>
      <MessageFromPresident />
    </HomepageLayout>
  ),
})

// Message from General Secretary route
const secretaryMessageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/secretary',
  component: () => (
    <HomepageLayout>
      <MessageFromGeneralSecretary />
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
import { MakePayment } from '@/components/MakePayment'

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

// Make Payment route
const makePaymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/make-payment',
  component: () => (
    <UserSpaceLayout title="Payment Page" subtitle="Select your purpose and make your payment">
      <MakePayment />
    </UserSpaceLayout>
  ),
})

// Scholarship route
const scholarshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/scholarship',
  component: () => (
    <HomepageLayout>
      <Scholarship />
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

// Privacy Policy route
const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: () => (
    <HomepageLayout>
      <PrivacyPolicy />
    </HomepageLayout>
  ),
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  presidentMessageRoute,
  secretaryMessageRoute,
  scholarshipRoute,
  newsEventsRoute,
  membershipRoute,
  contactRoute,
  privacyPolicyRoute,
  loginRoute,
  registerRoute,
  dashboardRoute,
  profileRoute,
  paymentRoute,
  makePaymentRoute,
])

// Create router
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
