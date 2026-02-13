"use client"

import { CheckCircle2 } from "lucide-react"

export default function ComparisonSection() {
  const rows = [
    {
      label: "Annual team costs",
      traditional: "$1.63M+",
      teams24: "< $500k",
    },
    {
      label: "Recruitment period",
      traditional: "6 - 12 months",
      teams24: "48 - 72 hours",
    },
    {
      label: "Client success rate",
      traditional: "33%",
      teams24: "94%",
    },
    {
      label: "Future benefits",
      traditional: "NIL",
      teams24: "Ongoing network",
    }
  ]

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 font-manrope" id="comparison">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
            A radically better way to build your team
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          {/* Header Row - Hidden on Mobile, Custom stacking for desktop */}
          <div className="hidden md:grid grid-cols-[1.2fr,1fr,1.2fr] border-b border-slate-100">
            {/* Empty Top Left */}
            <div className="p-10 bg-white"></div>

            {/* Traditional Header */}
            <div className="p-10 bg-[#F9FAFB] flex items-end justify-center">
              <span className="text-slate-600 font-medium text-lg text-center leading-tight">
                Traditional hiring methods
              </span>
            </div>

            {/* Teams24 Header - Gradient */}
            <div className="relative p-0">
               <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]"></div>
               <div className="relative z-10 h-full w-full flex flex-col items-center justify-center py-10 px-6">
                  {/* Logo */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className="grid grid-cols-3 gap-[2px] w-5 h-5 opacity-90">
                       {[...Array(9)].map((_, i) => (
                         <div key={i} className="bg-white rounded-[0.5px] w-full h-full" style={{ opacity: i % 2 === 0 ? 1 : 0.7 }} />
                       ))}
                    </div>
                    <span className="text-white font-bold text-2xl tracking-tight">Teams24</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr,1.2fr] group">
                {/* Label */}
                <div className="p-6 md:p-10 flex items-center bg-white border-b md:border-b-0 border-slate-50 transition-colors group-hover:bg-slate-50/30">
                  <span className="text-slate-500 font-medium text-lg md:text-xl">
                    {row.label}
                  </span>
                </div>

                {/* Traditional Value */}
                <div className="p-6 md:p-10 flex items-center justify-between md:justify-center bg-[#F9FAFB] group-hover:bg-[#f1f5f9] transition-colors">
                  <span className="md:hidden text-slate-400 text-sm font-medium">Traditional</span>
                  <span className="text-slate-900 font-bold text-lg md:text-xl tracking-tight">
                    {row.traditional}
                  </span>
                </div>

                {/* Teams24 Value */}
                <div className="p-6 md:p-10 flex items-center justify-between md:justify-start px-8 md:px-12 bg-white transition-colors group-hover:bg-slate-50/30">
                   <span className="md:hidden text-blue-500 text-sm font-bold">Teams24</span>
                   <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white fill-[#10B981]" />
                      </div>
                      <span className="text-slate-900 font-bold text-lg md:text-xl tracking-tight">
                        {row.teams24}
                      </span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
