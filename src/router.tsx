import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { HomepageLayout } from '@/layouts/HomepageLayout'
import { UserSpaceLayout } from '@/layouts/UserSpaceLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { Homepage } from '@/components/Homepage'

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
  component: () => (
    <AuthLayout>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#3B60C9]">Log In</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B60C9]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B60C9]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#3B60C9] hover:bg-[#2d4fa8] text-white py-2 px-4 rounded-md transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </AuthLayout>
  ),
})

// Register route
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: () => (
    <AuthLayout>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#3B60C9]">Register</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B60C9]"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B60C9]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B60C9]"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#3B60C9] hover:bg-[#2d4fa8] text-white py-2 px-4 rounded-md transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </AuthLayout>
  ),
})

// Dashboard route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <UserSpaceLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Welcome</h2>
            <p className="text-gray-600">Welcome to your dashboard</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p className="text-gray-600">Manage your profile</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-600">Update your settings</p>
          </div>
        </div>
      </div>
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
])

// Create router
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
