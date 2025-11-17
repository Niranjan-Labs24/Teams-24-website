// 
"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import  ImageCarousel  from "@/components/image-carousel"
import WhatWeDeliver  from "@/components/what-we-deliver"
import { ProblemWeSolve } from "@/components/problem-we-solve"
import { WhatWeOffer } from "@/components/what-we-offer"
import  Testimonials  from "@/components/testimonials"
import { Careers } from "@/components/careers"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { IdealForSection} from "@/components/IdealForSection"
import HowItWorks from "@/components/HowItWorks"
import  GlassmorphicNavbar from "@/components/glassmorphic-navbar"
import HeroSection from "@/components/HeroSection"
export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Main container */}
      
            <div className="relative w-full min-h-screen overflow-hidden bg-black">
              {/* Glassmorphic navbar */}
           <GlassmorphicNavbar /> 
              <HeroSection/>
              
             
            </div>

      {/* Scroll sections */}
      
      <WhatWeDeliver />
      <IdealForSection />
      <ProblemWeSolve />
      <HowItWorks />
      <WhatWeOffer />
      <Testimonials /> 
      <Careers />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  )
}