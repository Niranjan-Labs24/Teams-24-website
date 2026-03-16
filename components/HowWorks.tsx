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
    <section id="how-it-works" className="w-full bg-white py-8 md:py-12 xl:py-[3vw] px-4 sm:px-6 lg:px-8 xl:px-[2vw] overflow-hidden">
      <div className="max-w-7xl xl:max-w-none xl:w-[90vw] mx-auto">
        <div className="text-center mb-10 md:mb-16 xl:mb-[4vw]">
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[56px] xl:text-[4vw] font-normal tracking-[-0.04em] leading-[1.1] xl:leading-[4.2vw] text-[#1A1A1A] mb-4 xl:mb-[1vw]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How Teams 24 Works
          </h2>
          <p className="text-[#8E8E93] text-lg md:text-xl xl:text-[1.3vw] font-medium">
            Need content here....
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-[3vw]">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
             
              <div className="w-16 h-16 xl:w-[5vw] xl:h-[5vw] rounded-full xl:rounded-[2.5vw] border xl:border-[0.2vw] border-[#E5E5EA] flex items-center justify-center mb-8 xl:mb-[2vw] bg-white transition-all duration-300 group-hover:border-[#007AFF] group-hover:shadow-[0_0_20px_rgba(0,122,255,0.1)]">
                <span className="text-xl xl:text-[1.5vw] font-semibold text-[#1A1A1A] tracking-tight">{step.number}</span>
              </div>

           
              <h3 
                className="text-2xl md:text-[32px] xl:text-[2vw] font-normal text-[#1A1A1A] mb-4 xl:mb-[1vw] leading-tight tracking-[-0.02em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {step.title}
              </h3>

              <p className="text-[#8E8E93] text-base md:text-lg xl:text-[1.2vw] mb-10 xl:mb-[2.5vw] max-w-[280px] xl:max-w-[18vw] leading-relaxed xl:leading-[1.8]">
                {step.description}
              </p>

              <div className="relative w-full aspect-[369/252] rounded-[32px] xl:rounded-[2vw] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-[#F2F2F7] transition-transform duration-500 group-hover:scale-[1.02]">
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
