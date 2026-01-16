import { Award, FileText } from 'lucide-react'
import { WelcomeBanner } from './dashboard/WelcomeBanner'
import { InfoCard } from './dashboard/InfoCard'
import { NotificationsSection } from './dashboard/NotificationsSection'
import { SubscriptionSection } from './dashboard/SubscriptionSection'
import { ProfileCard } from './dashboard/ProfileCard'
import { EventsSection } from './dashboard/EventsSection'

export function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard
            icon={
              <Award className="w-12 h-12 text-yellow-500" />
            }
            title="Membership certificate"
            description="The App Is A Great Way To Stay Connected With Your Colleagues And Learn About What They're Working On. You Can Also Use The App"
            actionIcon="download"
            onAction={() => console.log('Download certificate')}
          />
          <InfoCard
            icon={
              <div className="relative">
                <FileText className="w-12 h-12 text-blue-500" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            }
            title="Payment history"
            description="The App Is A Great Way To Stay Connected With Your Colleagues And Learn About What They're Working On. You Can Also Use The App"
            actionIcon="arrow"
            onAction={() => console.log('View payment history')}
          />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NotificationsSection />
          <SubscriptionSection />
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="w-full lg:w-96 space-y-6">
        <ProfileCard />
        <EventsSection />
      </aside>
    </div>
  )
}
