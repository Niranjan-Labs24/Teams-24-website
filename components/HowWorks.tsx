"use client"

import Image from "next/image"

export default function HowWorks() {
  const steps = [
    {
      number: "01",
      title: "Define your vision",
      description: "Strategic session to blueprint your success",
      img: "/HowWorks/Frame 2147225361 (4).webp" 
    },
    {
      number: "02",
      title: "Evaluate from the curated",
      description: "Handpicked experts integrated and ready",
      img: "/HowWorks/Frame 2147225361 (5).webp"
    },
    {
      number: "03",
      title: "Start building",
      description: "on a flexible & transparent subscription model",
      img: "/HowWorks/Frame 2147225361@4x.webp"
    }
  ]

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[56px] font-normal tracking-[-0.04em] leading-[1.1] text-[#1A1A1A] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How teams24 works
          </h2>
          <p className="text-[#8E8E93] text-lg md:text-xl font-medium">
            Need content here....
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
             
              <div className="w-16 h-16 rounded-full border border-[#E5E5EA] flex items-center justify-center mb-8 bg-white transition-all duration-300 group-hover:border-[#007AFF] group-hover:shadow-[0_0_20px_rgba(0,122,255,0.1)]">
                <span className="text-xl font-semibold text-[#1A1A1A] tracking-tight">{step.number}</span>
              </div>

           
              <h3 
                className="text-2xl md:text-[32px] font-normal text-[#1A1A1A] mb-4 leading-tight tracking-[-0.02em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {step.title}
              </h3>

              <p className="text-[#8E8E93] text-base md:text-lg mb-10 max-w-[280px] leading-relaxed">
                {step.description}
              </p>

              <div className="relative w-full aspect-[369/252] rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-[#F2F2F7] transition-transform duration-500 group-hover:scale-[1.02]">
                 <Image 
                  src={step.img} 
                  alt={step.title} 
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
