"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Niranjan Venugopal",
    title: "CEO Specflicks",
    quote:
      "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team. The entire process was seamless, from the initial consultation to the final onboarding. We were able to scale our operations significantly faster than we anticipated, thanks to their dedicated support and deep understanding of our needs.",
    videoId: "okh85F29Gjg",
    image: "/testimonials/memoji1.png",
  },
  {
    name: "Sarah Chen",
    title: "Founder TechStart",
    quote:
      "The speed at which teams24 deployed our team was incredible. No recruitment chaos, just immediate execution power. We managed to launch our product three months ahead of schedule because we had the right talent in place from day one. Their vetting process is top-notch, ensuring we only saw candidates who were a perfect cultural and technical fit.",
    videoId: "TUKk3sptrt0",
    image: "/testimonials/memoji2.png",
  },
  {
    name: "Michael Roberts",
    title: "COO GlobalTech",
    quote:
      "Best decision we made for scaling our engineering team. The quality and commitment exceeded all expectations. We were struggling to find senior developers who could hit the ground running, but teams24 connected us with experts who started delivering value within their first week. It’s not just a service; it feels like a true partnership invested in our growth.",
    videoId: "vzVbqXVID-Y",
    image: "/testimonials/memoji3.png",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section className="w-full bg-black text-white font-[Manrope] py-16 px-6 lg:px-12 relative flex justify-center">
      <div className="max-w-[90rem] w-full">
        {/* Header matched to Ideal For component */}
        <div className="flex flex-col gap-4 mb-10 lg:mb-16">
            <div className="text-white text-sm font-medium tracking-wider">
            What our clients say
            </div>
            <hr className="w-full border-t border-white/30" />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
            {/* Testimonial Card - Expanded width, centered, larger text */}
            <div className="w-full max-w-6xl">
                <div className="bg-[rgba(255,255,255,0.02)] rounded-[2rem] p-8 lg:p-16 relative w-full border border-white/5 mx-auto">
                    <div className="flex flex-col gap-8">
                        <div className="text-gray-500 text-6xl lg:text-7xl leading-none font-serif opacity-50">"</div>
                        {/* Font matched to HowItWorks Title */}
                        {/* text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight tracking-tight */}
                        <p className="text-white font-normal text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl leading-tight tracking-tight pl-2 line-clamp-3 md:line-clamp-4">
                        {t.quote}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-4 pl-2">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                            />
                            <div>
                                <p className="font-bold text-lg">{t.name}</p>
                                <p className="text-gray-400 text-sm">{t.title}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation and Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-8 px-4 gap-6">
                     <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Go to testimonial ${idx + 1}`}
                            onClick={() => setCurrent(idx)}
                            className={`rounded-full transition-all duration-300 ${
                            idx === current
                                ? "w-10 h-3 bg-white"
                                : "w-3 h-3 bg-white/20 hover:bg-white/40"
                            }`}
                        />
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button
                        onClick={prev}
                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95">
                        <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                        onClick={next}
                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95">
                        <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
