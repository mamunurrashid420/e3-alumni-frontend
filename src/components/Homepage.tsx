import { HeroSection } from '@/components/ui/homepage/HeroSection'
import { GetTogetherBanner } from '@/components/ui/homepage/GetTogetherBanner'
import { AboutUsSection } from '@/components/ui/homepage/AboutUsSection'
import { OurResponsibilitySection } from '@/components/ui/homepage/OurResponsibilitySection'
import { StatisticsSection } from '@/components/ui/homepage/StatisticsSection'
import { RecentJobsSection } from '@/components/ui/homepage/RecentJobsSection'
import { ProgramsSection } from '@/components/ui/homepage/ProgramsSection'
import { GallerySection } from '@/components/ui/homepage/GallerySection'
import { ScholarshipSection } from '@/components/ui/homepage/ScholarshipSection'
import { CommunitySection } from '@/components/ui/homepage/CommunitySection'
import { HealthSection } from '@/components/ui/homepage/HealthSection'
import { RecentNewsSection } from '@/components/ui/homepage/RecentNewsSection'
import { UpcomingEventsSection } from '@/components/ui/homepage/UpcomingEventsSection'

export function Homepage() {
  return (
    <div className="relative w-full">
      <HeroSection />
      <GetTogetherBanner />
      {/* Spacer to account for absolutely positioned HeroSection and GetTogetherBanner */}
      <div style={{ height: '1000px' }} />
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
