"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
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

export default function Testimonials() {
  const [current, setCurrent] = useState<number>(0)

  const next = () => setCurrent((c: number) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c: number) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section 
      className="w-full bg-white text-[#1A1A1A] font-manrope py-10 px-6 lg:px-12 xl:px-[2vw] flex items-center justify-center min-h-[632px] xl:min-h-[44vw]"
    >
      <div className="w-full max-w-[1438px] xl:max-w-none xl:w-[95vw] mx-auto flex flex-col items-center">
        {/* Adjusted Heading based on dimensions */}
        <div 
          className="flex items-center justify-center mb-10 md:mb-16 xl:mb-[4vw] px-4 md:px-8 xl:px-[2vw] w-full max-w-[1251px] xl:max-w-none xl:w-[85vw]"
        >
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[56px] xl:text-[4vw] font-normal text-center tracking-[-0.06em] leading-[1.1] md:leading-[57px] xl:leading-[4.2vw]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-[2vw] mb-12 xl:mb-[4vw] w-full">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="relative bg-[#FAFAFA] rounded-[1.5rem] xl:rounded-[2vw] p-6 sm:p-8 md:p-10 xl:p-[2.5vw] flex flex-col gap-4 sm:gap-6 xl:gap-[1.5vw] border border-[#00000005] hover:shadow-sm transition-shadow min-h-[300px] md:min-h-[350px] xl:min-h-[22vw]
                before:content-['“'] before:absolute before:top-2 before:left-4 before:text-[60px] md:before:text-[80px] xl:before:text-[5vw] before:leading-none before:text-[#1A1A1A]/10 before:font-serif
                after:content-['”'] after:absolute after:bottom-12 md:after:bottom-16 xl:after:bottom-[5vw] after:right-4 md:after:right-8 xl:after:right-[2vw] after:text-[60px] md:after:text-[80px] xl:after:text-[5vw] after:leading-none after:text-[#1A1A1A]/10 after:font-serif"
            >
              
              <p className="text-[#1A1A1A] text-base sm:text-lg xl:text-[1.2vw] leading-relaxed xl:leading-[1.8] font-medium pr-2 md:pr-4 xl:pr-[1vw] relative z-10">
                {t.quote}
              </p>

              
              <div className="flex items-center gap-2 xl:gap-[0.8vw] mt-auto relative z-10">
                <span className="text-[#1A1A1A] font-bold xl:text-[1.1vw]">- {t.name}</span>
                <span className="text-[#1A1A1A]/40 text-sm xl:text-[0.9vw] font-medium">{t.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 xl:gap-[1.5vw]">
          <button
            onClick={prev}
            className="w-12 h-12 xl:w-[3.5vw] xl:h-[3.5vw] rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 xl:w-[1.5vw] xl:h-[1.5vw]" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 xl:w-[3.5vw] xl:h-[3.5vw] rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          >
            <ChevronRight className="w-6 h-6 xl:w-[1.5vw] xl:h-[1.5vw]" />
          </button>
        </div>
      </div>
    </section>
  )
}
