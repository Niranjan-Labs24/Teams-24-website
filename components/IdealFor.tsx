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
    <section className="w-full flex flex-col items-center py-10 md:py-16 bg-white px-4">
      <h2 
        className="text-[32px] md:text-4xl font-normal text-center mb-10 md:mb-12 tracking-tight text-[#1A1A1A]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Who is it ideal for?
      </h2>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full max-w-[1219px] mx-auto"
      >
        {cards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-[32px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="relative w-full aspect-[369/252] mb-6">
              <Image 
                src={card.img} 
                alt={`Ideal for ${index + 1}`} 
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            
            <p className="text-lg md:text-xl text-center font-medium text-[#1A1A1A] max-w-[90%] md:max-w-[80%] mb-8 leading-tight">
              {card.text}
            </p>

            <div className="mt-auto flex items-center gap-3 px-6 py-2 rounded-full border border-gray-100 bg-white shadow-sm">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-[#1A1A1A]">{card.statValue}</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{card.statLabel}</span>
              </div>
              <div className={`w-8 h-8 rounded-full ${card.dotColor} shadow-inner bg-gradient-to-br from-white/20 to-transparent`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
