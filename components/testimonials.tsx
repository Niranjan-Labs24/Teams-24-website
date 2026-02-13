"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anand",
    title: "Founder, AuraGold",
    quote:
      "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team ...",
  },
  {
    name: "Anand",
    title: "Founder, AuraGold",
    quote:
      "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team ...",
  },
  {
    name: "Anand",
    title: "Founder, AuraGold",
    quote:
      "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team ...",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState<number>(0)

  const next = () => setCurrent((c: number) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c: number) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section 
      className="w-full bg-white text-[#1A1A1A] font-manrope py-10 px-6 lg:px-12 flex items-center justify-center"
      style={{ minHeight: "632px" }}
    >
      <div className="w-full max-w-[1438px] mx-auto flex flex-col items-center">
        {/* Adjusted Heading based on dimensions */}
        <div 
          className="flex items-center justify-center mb-10 md:mb-16 px-4 md:px-8"
          style={{ width: "100%", maxWidth: "1251px" }}
        >
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[56px] font-normal text-center tracking-[-0.06em] leading-[1.1] md:leading-[57px]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="relative bg-[#FAFAFA] rounded-[1.5rem] p-6 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 border border-[#00000005] hover:shadow-sm transition-shadow min-h-[300px] md:min-h-[350px]"
            >
              {/* Top Left Quote */}
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#1A1A1A]/10 fill-[#1A1A1A]/5" />
              
              <p className="text-[#1A1A1A] text-base sm:text-lg leading-relaxed font-medium pr-2 md:pr-4">
                {t.quote}
              </p>

              {/* Bottom Right Quote (Opposite) */}
              <Quote className="absolute bottom-16 right-8 w-8 h-8 text-[#1A1A1A]/10 fill-[#1A1A1A]/5 rotate-180" />
              
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-[#1A1A1A] font-bold">- {t.name}</span>
                <span className="text-[#1A1A1A]/40 text-sm font-medium">{t.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
