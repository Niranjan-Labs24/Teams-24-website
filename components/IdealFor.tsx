"use client"

import Image from "next/image"

export default function IdealFor() {
  const cards = [
    {
      img: "/idealfor/1.webp",
      text1: "Growth-stage startups",
      text2: "seeking rapid scale",
      statValue: "50+",
      statLabel1: "startups",
      statLabel2: "hiring",
      dotColor: "bg-orange-400"
    },
    {
      img: "/idealfor/2.webp",
      text1: "Visionary founders ready to",
      text2: "build without boundaries",
      statValue: "70%",
      statLabel1: "hiring",
      statLabel2: "success",
      dotColor: "bg-blue-500"
    },
    {
      img: "/idealfor/3.webp",
      text1: "Entrepreneurs who value",
      text2: "speed over bureaucracy",
      statValue: "3X",
      statLabel1: "fast to",
      statLabel2: "hire",
      dotColor: "bg-purple-400"
    }
  ]

  return (
    <section className="w-full flex flex-col items-center py-10 md:py-16 xl:py-[4vw] bg-white">
      <div className="w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto px-6 md:px-12 lg:px-16 xl:px-0 flex flex-col items-center">
      <div className="text-center mb-10 md:mb-12 xl:mb-[3.5vw]">
        <h2 
          className="font-normal tracking-[-0.04em] text-[#1A1A1A]"
          style={{ 
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 2.8vw, 80px)",
            lineHeight: "1.1"
          }}
        >
          Who is it ideal for?
        </h2>
      </div>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-[2.5vw] w-full max-w-[1219px] xl:max-w-none xl:w-full mx-auto"
      >
        {cards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-2 xl:p-[0.6vw] pb-10 md:pb-12 xl:pb-[3.5vw] bg-white rounded-[32px] xl:rounded-[2vw] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="relative w-full aspect-[369/252] mb-6 md:mb-8 xl:mb-[1.8vw]">
              <Image 
                src={card.img} 
                alt={`Ideal for ${index + 1}`} 
                fill
                className="object-cover rounded-2xl xl:rounded-[1vw]"
              />
            </div>
            
            <p className="text-[20px] md:text-2xl xl:text-[1.7vw] text-center font-normal text-[#1A1A1A] max-w-[95%] md:max-w-[90%] xl:max-w-[90%] mb-10 xl:mb-[2.5vw] leading-[1.2] xl:leading-[1.2]">
              <span className="block text-gray-700">{card.text1}</span>
              <span className="block font-semibold">{card.text2}</span>
            </p>

            <div className="mt-auto flex items-center px-8 xl:px-[2vw] py-4 xl:py-[1.1vw] rounded-full xl:rounded-[4vw] border border-gray-100 bg-white shadow-md w-fit">
              <div className="flex items-center gap-4 xl:gap-[0.5vw]">
                <span 
                  className="font-medium text-[#131313] tracking-[-0.03em] leading-none"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(24px, 2.34vw, 40px)", 
                    height: "clamp(26px, 2.5vw, 42px)",
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {card.statValue}
                </span>
                <div className="flex flex-col justify-center">
                  <span 
                    className="font-semibold text-[#00000066] tracking-[-0.05em] whitespace-nowrap"
                    style={{ 
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(12px, 1.25vw, 20px)",
                      lineHeight: "clamp(11px, 1.17vw, 19px)" 
                    }}
                  >
                    {card.statLabel1}
                  </span>
                  <span 
                    className="font-semibold text-[#00000066] tracking-[-0.05em] whitespace-nowrap"
                    style={{ 
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(12px, 1.25vw, 20px)",
                      lineHeight: "clamp(11px, 1.17vw, 19px)" 
                    }}
                  >
                    {card.statLabel2}
                  </span>
                </div>
              </div>
              <div className={`relative w-10 h-10 xl:w-[2.8vw] xl:h-[2.8vw] rounded-full ml-10 md:ml-12 xl:ml-[4vw] ${card.dotColor} shadow-inner overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
