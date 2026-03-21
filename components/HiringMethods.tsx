"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function HiringMethods() {
  const rows = [
    {
      label: "Annual team costs",
      traditional: "$500k-750k",
      teams24: "<$200k",
    },
    {
      label: "Recruitment period",
      traditional: "2-4 months",
      teams24: "48-72hours",
    },
    {
      label: "Client success rate",
      traditional: "33%",
      teams24: "94%",
    },
    {
      label: "Future benefit",
      traditional: "NIL",
      teams24: "Ongoing Network",
    }
  ]

  return (
    <section className="w-full bg-white py-24 xl:py-[6vw] font-manrope selection:bg-blue-100" id="hiring-methods">
      <div className="w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto px-6 md:px-12 lg:px-16 xl:px-0">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20 xl:mb-[5vw]">
          <h2 
            className="text-[32px] md:text-[48px] xl:text-[3.2vw] font-normal text-center tracking-[-0.06em] leading-[1.1] xl:leading-[1.1] text-[#1A1A1A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A radically better way to build your team
          </h2>
        </div>

        
        <div className="relative isolate">
          
          <div className="grid grid-cols-12 items-end mb-0 h-16 md:h-24 xl:h-[6vw]">
            
            <div className="col-span-4"></div>
            
           
            <div className="col-span-4 pb-2 md:pb-6 xl:pb-[1.5vw] text-center">
              <span 
                className="text-[#222222] font-normal leading-tight block tracking-[-0.06em]"
                style={{ 
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(16px, 1.72vw, 30px)",
                  lineHeight: "clamp(18px, 1.88vw, 32px)" 
                }}
              >
                Traditional hiring methods
              </span>
            </div>
            
            {/* Teams24 Header - Blue Gradient Card */}
            <div className="col-span-4 relative h-full">
               <div 
                  className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-1 md:gap-3 xl:gap-[0.8vw] shadow-sm"
                  style={{
                    height: "clamp(60px, 7.6vw, 120px)",
                    background: "linear-gradient(90deg, #40A4FF 0%, #C4E2FF 100%)",
                    borderTopLeftRadius: "clamp(12px, 1.88vw, 32px)",
                    borderTopRightRadius: "clamp(12px, 1.88vw, 32px)",
                    borderWidth: "0.5px 0.5px 0px 0.5px",
                    borderStyle: "solid",
                    borderColor: "#00000014"
                  }}
               >
                  <div className="relative w-24 h-6 md:w-48 md:h-12 xl:w-[12vw] xl:h-[3vw]">
                    <Image 
                      src="/logos/NavLogo.webp" 
                      alt="Teams24" 
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
               </div>
            </div>
          </div>

          {/* Table Body Card */}
          <div 
            className="border border-gray-200 rounded-2xl md:rounded-tr-none xl:rounded-[1.5vw] shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)] overflow-hidden relative z-20"
            style={{ backgroundColor: "#00000003" }}
          >
            {rows.map((row, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-12 items-stretch group ${
                  idx !== rows.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Mobile Label (Hidden on Desktop usually, but here distinct) */}
                <div 
                  className="col-span-4 p-3 md:p-8 xl:p-[2.5vw] md:pl-10 xl:pl-[3vw] flex items-center border-b md:border-b-0 border-gray-200 md:border-r"
                  style={{ backgroundColor: "#00000003" }}
                >
                  <span 
                    className="text-[#13131380] font-semibold tracking-[-0.02em]"
                    style={{ 
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(14px, 1.41vw, 24px)",
                      lineHeight: "clamp(18px, 1.88vw, 32px)"
                    }}
                  >
                    {row.label}
                  </span>
                </div>

                {/* Traditional Value */}
                <div 
                  className="col-span-4 p-3 md:p-8 xl:p-[2.5vw] flex items-center justify-center md:border-r border-gray-200"
                  style={{ backgroundColor: "#00000003" }}
                >
                  <span 
                    className="text-[#131313] font-semibold tracking-[-0.02em] text-center w-full"
                    style={{ 
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(16px, 1.56vw, 28px)",
                      lineHeight: "clamp(20px, 1.88vw, 32px)"
                    }}
                  >
                    {row.traditional}
                  </span>
                </div>

                {/* Teams24 Value */}
                <div 
                  className="col-span-4 p-3 md:p-8 xl:p-[2.5vw] md:pl-12 xl:pl-[3.5vw] flex items-center justify-start backdrop-blur-[32px] transition-colors"
                  style={{ backgroundColor: "#00000003" }}
                >
                   <div className="flex items-center gap-1.5 md:gap-3 xl:gap-[0.8vw]">
                      <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 xl:w-[2vw] xl:h-[2vw] text-white fill-[#00C065] flex-shrink-0" />
                      <span 
                        className="text-[#131313] font-semibold tracking-[-0.02em]"
                        style={{ 
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "clamp(16px, 1.56vw, 28px)",
                          lineHeight: "clamp(20px, 1.88vw, 32px)"
                        }}
                      >
                        {row.teams24}
                      </span>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual Fix for Header Connection */}
          {/* On desktop, the header sits on top. The body connects. */}
          
        </div>
      </div>
    </section>
  )
}
