import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GamingLinks } from "@/components/gaming-links"
import { VideoSection } from "@/components/video-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GamingLinks />
      <FeaturesSection />
      <VideoSection />
      <StatsSection />
      <Footer />
    </main>
  )
}
