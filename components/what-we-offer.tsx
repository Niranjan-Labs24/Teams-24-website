"use client"

import { useState } from "react"

const capabilities = [
  {
    title: "Full-stack development",
    description: "Product Excellence Full-stack development from concept to launch",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "UI/UX Designers",
    description: "Executive Leadership Fractional CXOs with proven scale experience",
    color: "from-orange-400 to-orange-500",
  },
  {
    title: "Automation",
    description: "Customer Success 5-star experience architects",
    color: "from-red-400 to-red-500",
  },
  {
    title: "Growth Marketing",
    description: "Growth Acceleration Marketing teams that drive 0 to 100K users",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "B2B Sales Specialist",
    description: "Operational Mastery Systems that scale without breaking",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Customer Success",
    description: "Customer Success 5-star experience architects",
    color: "from-rose-400 to-rose-500",
  },
  {
    title: "Flowgrammers",
    description: "Financial Protection CFO-level strategy and compliance",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Full stack design",
    description: "Operational Mastery Systems that scale without breaking",
    color: "from-slate-600 to-slate-700",
  },
  {
    title: "Data Analyst",
    description: "Executive Leadership Fractional CXOs with proven scale experience",
    color: "from-yellow-600 to-yellow-700",
  },
]

export function WhatWeOffer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 px-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-600 mb-4">What we offer</p>
          <div className="border-t border-black pt-8">
            <h2 className="text-5xl md:text-6xl font-bold text-black">Our core capabilities</h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-8 rounded-2xl border border-gray-200 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "border-gray-400 bg-gray-50 shadow-lg transform scale-105"
                  : "hover:border-gray-300 bg-white"
              }`}
            >
              {/* Colored circle */}
              <div className={`w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${capability.color}`} />

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">{capability.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
