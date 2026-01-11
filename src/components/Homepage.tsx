import { HeroSection } from '@/components/ui/homepage/HeroSection'
import { GetTogetherBanner } from '@/components/ui/homepage/GetTogetherBanner'
import { AboutUsSection } from '@/components/ui/homepage/AboutUsSection'
import { OurResponsibilitySection } from '@/components/ui/homepage/OurResponsibilitySection'
import { StatisticsSection } from '@/components/ui/homepage/StatisticsSection'
import { RecentJobsSection } from '@/components/ui/homepage/RecentJobsSection'
import { GallerySection } from '@/components/ui/homepage/GallerySection'
import { ScholarshipSection } from '@/components/ui/homepage/ScholarshipSection'
import { CommunitySection } from '@/components/ui/homepage/CommunitySection'
import { HealthSection } from '@/components/ui/homepage/HealthSection'
import { RecentNewsSection } from '@/components/ui/homepage/RecentNewsSection'
import { UpcomingEventsSection } from '@/components/ui/homepage/UpcomingEventsSection'

export function Homepage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <HeroSection />
      <GetTogetherBanner />
      {/* Spacer to account for overlapping GetTogetherBanner */}
      {/* <div className="h-[200px] md:h-[250px] lg:h-[300px]" /> */}
      <AboutUsSection />
      <OurResponsibilitySection />
      <StatisticsSection />
      <RecentJobsSection />
      {/* <ProgramsSection /> */}
      <GallerySection />
      <ScholarshipSection />
      <CommunitySection />
      <HealthSection />
      <RecentNewsSection />
      <UpcomingEventsSection />
    </div>
  )
}
