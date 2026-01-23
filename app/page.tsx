// 




import WhatWeDeliver  from "@/components/what-we-deliver"
import { ProblemWeSolve } from "@/components/problem-we-solve"
import { WhatWeOffer } from "@/components/what-we-offer"
import  Testimonials  from "@/components/testimonials"
import { Careers } from "@/components/careers"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import  IdealForSection from "@/components/IdealForSection"
import HowItWorks from "@/components/HowItWorks"
import HeroSection from "@/components/HeroSection"
import HeroTablet from "@/components/hero-tablet"
import GlassmorphicNavbar from "@/components/glassmorphic-navbar"

export default function Home() {


  return (
    <>
      {/* Global Fixed Navbar */}
      <GlassmorphicNavbar />
      
      {/* Main container */}
      <div className="lg:block hidden">
        <HeroSection/>
      </div>
      <div className="md:block lg:hidden hidden">
        <HeroTablet />
      </div>
      <div className="md:hidden block">
        <HeroSection />
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