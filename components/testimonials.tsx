"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export interface TestimonialItem {
  name: string;
  title: string;
  quote: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Niranjan Venugopal",
    title: "Founder, Specflicks", 
    quote:
      "Teams 24 made it incredibly easy to scale our development. Their commitment and flexibility are exactly what an early-stage startup needs.",
  },
  {
    name: "Sasha Ray",
    title: "Product Lead",
    quote:
      "The discovery call was eye-opening. We had our core team set up in less than 72 hours, which is unheard of in traditional recruitment.",
  },
  {
    name: "Anand",
    title: "Founder, AuraGold",
    quote:
      "We've tried multiple agencies and it didn't work. With Teams 24 we had no timeline constraints or boundaries in setting up our core team.",
  },
]

export default function Testimonials({ items }: { items?: TestimonialItem[] }) {
  const [current, setCurrent] = useState<number>(0)
  
  const displayData = items && items.length > 0 ? items : defaultTestimonials;

  const next = () => setCurrent((c: number) => (c + 1) % displayData.length)
  const prev = () => setCurrent((c: number) => (c - 1 + displayData.length) % displayData.length)

  return (
    <section 
      className="w-full bg-white text-[#1A1A1A] font-manrope py-10 md:py-16 flex items-center justify-center min-h-0 md:min-h-[632px] xl:min-h-[44vw]"
    >
      <div className="w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto flex flex-col items-center px-6 md:px-12 lg:px-16 xl:px-0">
        {/* Adjusted Heading based on dimensions */}
        <div 
          className="flex items-center justify-center mb-10 md:mb-16 xl:mb-[4vw] w-full"
        >
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[56px] xl:text-[4vw] font-normal text-center tracking-[-0.06em] leading-[1.1] md:leading-[57px] xl:leading-[4.2vw]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-[2vw] mb-12 xl:mb-[4vw] w-full">
          {displayData.map((t, idx) => (
            <div 
              key={idx} 
              className="relative bg-[#FAFAFA] rounded-[1.5rem] xl:rounded-[2vw] p-6 sm:p-8 md:p-10 xl:p-[2.5vw] flex flex-col justify-start gap-4 sm:gap-6 xl:gap-[1.5vw] border border-[#00000005] hover:shadow-sm transition-shadow h-auto min-h-fit md:min-h-[350px] xl:min-h-[22vw] overflow-hidden
                before:content-['“'] before:absolute before:top-2 before:left-4 before:text-[60px] md:before:text-[80px] xl:before:text-[5vw] before:leading-none before:text-[#1A1A1A]/10 before:font-serif pointer-events-none
                after:content-['”'] after:absolute after:bottom-2 after:right-4 md:after:bottom-4 md:after:right-6 xl:after:bottom-[2vw] xl:after:right-[2vw] after:text-[60px] md:after:text-[80px] xl:after:text-[5vw] after:leading-none after:text-[#1A1A1A]/10 after:font-serif pointer-events-none"
            >
              
              <p className="text-[#1A1A1A] text-base sm:text-lg xl:text-[1.2vw] leading-relaxed xl:leading-[1.8] font-medium pr-2 md:pr-4 xl:pr-[1vw] relative z-10">
                {t.quote}
              </p>

              
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-1 sm:mt-2 md:mt-auto relative z-10">
                <span className="text-[#1A1A1A] font-bold text-sm sm:text-base xl:text-[1.1vw]">- {t.name}</span>
                <span className="text-[#1A1A1A]/50 text-xs sm:text-sm xl:text-[0.9vw] font-medium">{t.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 xl:gap-[1.5vw]">
          <button
            onClick={prev}
            className="w-12 h-12 xl:w-[3.5vw] xl:h-[3.5vw] rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6 xl:w-[1.5vw] xl:h-[1.5vw]" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 xl:w-[3.5vw] xl:h-[3.5vw] rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6 xl:w-[1.5vw] xl:h-[1.5vw]" />
          </button>
        </div>
      </div>
    </section>
  )
}
