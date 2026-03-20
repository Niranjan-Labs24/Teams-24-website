"use client"

import Image from "next/image"

export default function HowWorks() {
  const steps = [
    {
      number: "01",
      title: <>Define your<br/>vision</>,
      description: <>Strategic session to blueprint<br/>your success</>,
      img: "/HowWorks/Frame 2147225361 (4).webp" 
    },
    {
      number: "02",
      title: <>Evaluate from the<br/>curated</>,
      description: <>Handpicked experts integrated<br/>and ready</>,
      img: "/HowWorks/Frame 2147225361 (5).webp"
    },
    {
      number: "03",
      title: <>Start<br/>building</>,
      description: <>on a flexible & transparent<br/>subscription model</>,
      img: "/HowWorks/Frame 2147225361@4x.webp"
    }
  ]

  return (
    <section id="how-it-works" className="w-full bg-white py-8 md:py-12 xl:py-[3vw] overflow-hidden">
      <div className="w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto px-6 md:px-12 lg:px-16 xl:px-0">
        <div className="text-center mb-10 md:mb-16 xl:mb-[4vw]">
          <h2 
            className="font-normal tracking-[-0.04em] text-[#1A1A1A] mb-4 xl:mb-[1vw]"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 2.8vw, 80px)",
              lineHeight: "1.1"
            }}
          >
            How Teams 24 Works
          </h2>
          <p className="text-[#8E8E93] text-lg md:text-xl xl:text-[1.3vw] font-medium">
          We kept it simple. You talk to us, we find the right people, they start building.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 xl:gap-[2vw]">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group h-full">
             
              <div className="w-[75px] h-[75px] xl:w-[6vw] xl:h-[6vw] rounded-full xl:rounded-[3vw] border-[0.5px] xl:border-[0.05vw] border-[#D1D1D6] flex items-center justify-center mb-8 xl:mb-[2vw] bg-white transition-all duration-300 group-hover:border-[#007AFF] group-hover:shadow-[0_0_20px_rgba(0,122,255,0.1)]">
                <span className="text-[30px] xl:text-[2.4vw] font-medium text-[#1A1A1A] tracking-[-0.04em]">{step.number}</span>
              </div>

           
              <h3 
                className="whitespace-nowrap text-[32px] md:text-[42px] xl:text-[3vw] font-normal text-[#1A1A1A] mb-1 md:mb-2 xl:mb-[0.4vw] leading-[1] tracking-[0em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {step.title}
              </h3>

              <p className="text-[#8E8E93] text-[18px] md:text-[20px] xl:text-[1.5vw] mb-6 md:mb-8 xl:mb-[1.8vw] leading-[1.3] px-2 w-full max-w-[400px] xl:max-w-none xl:w-[24vw]">
                {step.description}
              </p>

              <div 
                  className="mt-auto relative w-full mx-auto max-w-[345px] xl:max-w-none xl:w-[26.9vw] aspect-[345/252] rounded-[16px] xl:rounded-[1.25vw] border-[1.01px] xl:border-[0.08vw] border-[#FFFFFF33] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-[#FBFBFB0D] transition-transform duration-500 group-hover:scale-[1.02]"
              >
                 <Image 
                  src={step.img} 
                  alt={`Step ${step.number}`} 
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
