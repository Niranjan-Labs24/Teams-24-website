import TrustBar from "@/components/trust-bar"
import dynamic from "next/dynamic"

import { HiringMethods, ProfileMarquee } from "@/components/ClientWrappers"


import Testimonials from "@/components/testimonials"
import { Careers } from "@/components/careers"
import { FAQHome } from "@/components/FaqHome"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import HeroSection from "@/components/HeroSection"
import GlassmorphicNavbar from "@/components/glassmorphic-navbar"
import IdealFor from "@/components/IdealFor"
import HowWorks from "@/components/HowWorks"
import Solutions from "@/components/Solutions"

export default function Home() {
  return (
    <main className="min-h-screen">
      <link rel="preconnect" href="https://fgelafnlezxfpptosovb.supabase.co" crossOrigin="anonymous" />
      <GlassmorphicNavbar />

      <HeroSection />
      <TrustBar />
      <IdealFor />
      <Solutions />
      <HowWorks />
      <HiringMethods />
      <ProfileMarquee />
      <Careers />
      <Testimonials />
      <FAQHome />
      <CTASection />
      <Footer />
    </main>
  )
}