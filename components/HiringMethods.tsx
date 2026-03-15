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
    <section className="w-full bg-white py-24 xl:py-[6vw] px-4 md:px-8 xl:px-[2vw] font-manrope selection:bg-blue-100" id="hiring-methods">
      <div className="max-w-5xl xl:max-w-none xl:w-[80vw] mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20 xl:mb-[5vw]">
          <h2 
            className="text-[40px] md:text-[60px] xl:text-[4vw] font-normal text-center tracking-[-0.06em] leading-[1.1] xl:leading-[1.1] text-[#1A1A1A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A radically better way to build your team
          </h2>
        </div>

        {/* Comparison Table Layout */}
        <div className="relative isolate">
          
          {/* Header Row */}
          <div className="grid grid-cols-12 items-end mb-0 h-16 md:h-24 xl:h-[6vw]">
            {/* Empty Spacer (Matches Label Col) */}
            <div className="col-span-4"></div>
            
            {/* Traditional Header */}
            <div className="col-span-4 pb-2 md:pb-6 xl:pb-[1.5vw] text-center">
              <span className="text-slate-600 font-medium text-[10px] md:text-lg xl:text-[1.2vw] leading-tight block">
                Traditional hiring methods
              </span>
            </div>
            
            {/* Teams24 Header - Blue Card Top */}
            <div className="col-span-4 relative h-full">
               <div className="absolute inset-x-0 bottom-0 top-1 md:top-2 xl:top-[0.5vw] bg-gradient-to-r from-[#5EA5FF] to-[#98C6FF] rounded-t-lg md:rounded-t-[1.75rem] xl:rounded-t-[1.5vw] shadow-sm z-10 flex items-center justify-center gap-1 md:gap-3 xl:gap-[0.8vw]">
                  <div className="relative w-4 h-4 md:w-8 md:h-8 xl:w-[2.5vw] xl:h-[2.5vw]">
                    <Image 
                      src="/logo.png" 
                      alt="Teams24" 
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="flex items-start">
                    <span className="text-white font-bold text-xs md:text-2xl xl:text-[1.8vw] tracking-tight">Teams 24</span>
                    <span className="text-white text-[6px] md:text-[10px] xl:text-[0.7vw] font-medium mt-0.5 md:mt-1 xl:mt-[0.2vw]">®</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Table Body Card */}
          <div className="bg-white border border-gray-100 rounded-2xl md:rounded-tr-none xl:rounded-[1.5vw] shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)] overflow-hidden relative z-20">
            {rows.map((row, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-12 items-stretch group ${
                  idx !== rows.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                {/* Mobile Label (Hidden on Desktop usually, but here distinct) */}
                <div className="col-span-4 p-3 md:p-8 xl:p-[2.5vw] md:pl-10 xl:pl-[3vw] flex items-center bg-white border-b md:border-b-0 border-gray-50 md:border-r">
                  <span className="text-slate-500 font-medium text-xs md:text-lg xl:text-[1.2vw]">
                    {row.label}
                  </span>
                </div>

                {/* Traditional Value */}
                <div className="col-span-4 p-3 md:p-8 xl:p-[2.5vw] flex items-center justify-center bg-gray-50/50 md:bg-transparent md:border-r border-gray-50">
                  <span className="text-slate-900 font-bold text-sm md:text-xl xl:text-[1.5vw] tracking-tight text-center w-full">
                    {row.traditional}
                  </span>
                </div>

                {/* Teams24 Value */}
                <div className="col-span-4 p-3 md:p-8 xl:p-[2.5vw] md:pl-12 xl:pl-[3.5vw] flex items-center justify-start bg-blue-50/10 md:bg-white transition-colors">
                   <div className="flex items-center gap-1.5 md:gap-3 xl:gap-[0.8vw]">
                      <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 xl:w-[2vw] xl:h-[2vw] text-white fill-[#00C065] flex-shrink-0" />
                      <span className="text-slate-900 font-bold text-sm md:text-xl xl:text-[1.5vw] tracking-tight">
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
