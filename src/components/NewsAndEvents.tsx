import { NewsAndEventsEventsSection } from '@/components/ui/homepage/NewsAndEventsEventsSection'
import { RecentNewsSection } from '@/components/ui/homepage/RecentNewsSection'

export function NewsAndEvents() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <NewsAndEventsEventsSection />
      <RecentNewsSection />
    </div>
  )
}
