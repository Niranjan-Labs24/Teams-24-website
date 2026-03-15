"use client"

import Image from "next/image"

export default function IdealFor() {
  const cards = [
    {
      img: "/idealfor/1.webp",
      text: "Growth-stage startups seeking rapid scale",
      statValue: "50+",
      statLabel: "startups hiring",
      dotColor: "bg-orange-400"
    },
    {
      img: "/idealfor/2.webp",
      text: "Visionary founders ready to build without boundaries",
      statValue: "70%",
      statLabel: "hiring success",
      dotColor: "bg-blue-500"
    },
    {
      img: "/idealfor/3.webp",
      text: "Engineering teams requiring specialized consistency",
      statValue: "3X",
      statLabel: "fast to hire",
      dotColor: "bg-purple-400"
    }
  ]

  return (
    <section className="w-full flex flex-col items-center py-10 md:py-16 xl:py-[4vw] bg-white px-4 xl:px-[2vw]">
      <h2 
        className="text-[32px] md:text-4xl xl:text-[2.6vw] font-normal text-center mb-10 md:mb-12 xl:mb-[3vw] tracking-tight text-[#1A1A1A] xl:leading-[1.4]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Who is it ideal for?
      </h2>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-[2.5vw] w-full max-w-[1219px] xl:max-w-none xl:w-[90vw] mx-auto"
      >
        {cards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-4 xl:p-[1.5vw] bg-white rounded-[32px] xl:rounded-[2vw] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="relative w-full aspect-[369/252] mb-6 xl:mb-[1.5vw]">
              <Image 
                src={card.img} 
                alt={`Ideal for ${index + 1}`} 
                fill
                className="object-cover rounded-2xl xl:rounded-[1vw]"
              />
            </div>
            
            <p className="text-lg md:text-xl xl:text-[1.3vw] text-center font-medium text-[#1A1A1A] max-w-[90%] md:max-w-[80%] xl:max-w-[85%] mb-8 xl:mb-[2vw] leading-tight xl:leading-[1.5]">
              {card.text}
            </p>

            <div className="mt-auto flex items-center gap-3 xl:gap-[0.8vw] px-6 xl:px-[1.5vw] py-2 xl:py-[0.5vw] rounded-full xl:rounded-[2vw] border border-gray-100 bg-white shadow-sm">
              <div className="flex items-baseline gap-1 xl:gap-[0.2vw]">
                <span className="text-xl xl:text-[1.3vw] font-bold text-[#1A1A1A]">{card.statValue}</span>
                <span className="text-xs xl:text-[0.7vw] text-gray-500 font-medium uppercase tracking-wide">{card.statLabel}</span>
              </div>
              <div className={`w-8 h-8 xl:w-[2vw] xl:h-[2vw] rounded-full ${card.dotColor} shadow-inner bg-gradient-to-br from-white/20 to-transparent`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
