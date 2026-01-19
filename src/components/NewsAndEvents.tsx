import { RecentNewsSection } from '@/components/ui/homepage/RecentNewsSection'
import { UpcomingEventsSection } from '@/components/ui/homepage/UpcomingEventsSection'

export function NewsAndEvents() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <RecentNewsSection />
      <UpcomingEventsSection />
    </div>
  )
}
