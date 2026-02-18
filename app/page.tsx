"use client"

import TrustBar from "@/components/trust-bar"
import dynamic from "next/dynamic"

const HiringMethods = dynamic(() => import("@/components/HiringMethods"), { 
  ssr: false,
  loading: () => <div className="w-full bg-white animate-pulse" style={{ height: "719px" }} />
});

const ProfileMarquee = dynamic(() => import("@/components/ProfileMarquee").then(mod => mod.ProfileMarquee), { 
  ssr: false,
  loading: () => <section className="w-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden" style={{ height: "362px" }} />
});


import  Testimonials  from "@/components/testimonials"
import { Careers } from "@/components/careers"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import HeroSection from "@/components/HeroSection"
import HeroTablet from "@/components/hero-tablet"
import GlassmorphicNavbar from "@/components/glassmorphic-navbar"
import IdealFor from "@/components/IdealFor"
import HowWorks from "@/components/HowWorks"
import Solutions from "@/components/Solutions"

export default function Home() {


  return (
    <main className="min-h-screen">
      <GlassmorphicNavbar />

      <HeroSection />
       <TrustBar />
      <Solutions />
      <HowWorks />
      <IdealFor />
      <HiringMethods />
      <ProfileMarquee />
      <Careers />
      <Testimonials /> 
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}