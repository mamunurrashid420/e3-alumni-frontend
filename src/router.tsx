import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { HomepageLayout } from '@/layouts/HomepageLayout'
import { UserSpaceLayout } from '@/layouts/UserSpaceLayout'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Homepage } from '@/components/Homepage'
import { Registration } from '@/components/Registration'
import { Login } from '@/components/Login'
import { About } from '@/components/About'
import { Scholarship } from '@/components/Scholarship'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'
import { MessageFromPresident } from '@/components/MessageFromPresident'
import { MessageFromGeneralSecretary } from '@/components/MessageFromGeneralSecretary'
import { History } from '@/components/History'
import { MissionAndVision } from '@/components/MissionAndVision'
import { NewsAndEvents } from '@/components/NewsAndEvents'
import { Contact } from '@/components/Contact'
import { Membership } from '@/components/Membership'

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

// History route
const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/history',
  component: () => (
    <HomepageLayout>
      <History />
    </HomepageLayout>
  ),
})

// Mission & Vision route
const missionVisionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/mission-vision',
  component: () => (
    <HomepageLayout>
      <MissionAndVision />
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
import { SelfDeclaration } from '@/components/SelfDeclaration'
import { Certificate } from '@/components/Certificate'

// Dashboard route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <ProtectedRoute>
      <UserSpaceLayout title="Dashboard" subtitle="User Information And Details">
        <Dashboard />
      </UserSpaceLayout>
    </ProtectedRoute>
  ),
})

// Profile route
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: () => (
    <ProtectedRoute>
      <UserSpaceLayout title="User Profile" subtitle="User Information And Details">
        <Profile />
      </UserSpaceLayout>
    </ProtectedRoute>
  ),
})

// Payment route
const paymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/payment',
  component: () => (
    <ProtectedRoute>
      <UserSpaceLayout title="Payment List" subtitle="Payment Information And Details">
        <Payment />
      </UserSpaceLayout>
    </ProtectedRoute>
  ),
})

// Make Payment route (Dashboard Layout - for logged-in users)
const makePaymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/make-payment',
  component: () => (
    <ProtectedRoute>
      <UserSpaceLayout title="Payment Page" subtitle="Select your purpose and make your payment">
        <MakePayment showMemberId={false} />
      </UserSpaceLayout>
    </ProtectedRoute>
  ),
})

// Make Payment route (Homepage Layout - for public users)
const makePaymentPublicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/donate',
  component: () => (
    <HomepageLayout>
      <MakePayment showMemberId={true} />
    </HomepageLayout>
  ),
})

// Self Declaration route
const selfDeclarationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/self-declaration',
  component: () => (
    <ProtectedRoute>
      <UserSpaceLayout title="Self Declaration" subtitle="Submit your self-declaration form">
        <SelfDeclaration />
      </UserSpaceLayout>
    </ProtectedRoute>
  ),
})

// Certificate route
const certificateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/certificate',
  component: () => (
    <ProtectedRoute>
      <UserSpaceLayout title="Membership Certificate" subtitle="View and download your membership certificate">
        <Certificate />
      </UserSpaceLayout>
    </ProtectedRoute>
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
      <NewsAndEvents />
    </HomepageLayout>
  ),
})

// Membership route
const membershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/membership',
  component: () => (
    <HomepageLayout>
      <Membership />
    </HomepageLayout>
  ),
})

// Contact route
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <HomepageLayout>
      <Contact />
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
  historyRoute,
  missionVisionRoute,
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
  makePaymentPublicRoute,
  selfDeclarationRoute,
  certificateRoute,
])

// Create router
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
