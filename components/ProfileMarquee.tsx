"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const profiles = [
  { name: "Jack Davies", company: "Amazon", exp: "7+ years exp", image: "/testimonials/Frame 2147225466 (1).webp" },
  { name: "Anna Lewis", company: "Airbnb", exp: "5+ years exp", image: "/testimonials/Frame 2147225466 (2).webp" },
  { name: "Brendon Charles", company: "Apple", exp: "10+ years exp", image: "/testimonials/Frame 2147225466 (3).webp" },
  { name: "Emma thomson", company: "IBM", exp: "5+ years exp", image: "/testimonials/Frame 2147225466 (4).webp" },
  { name: "Spencer Johnson", company: "Microsoft", exp: "5+ years exp", image: "/testimonials/Frame 2147225466 (5).webp" },
  { name: "Ashley Vance", company: "Meta", exp: "8+ years exp", image: "/testimonials/Frame 2147225466 (6).webp" },
  { name: "Jake Thomson", company: "IBM", exp: "5+ years exp", image: "/testimonials/Frame 2147225466 (7).webp" },
  { name: "Sarah Jenkins", company: "Google", exp: "6+ years exp", image: "/testimonials/Frame 2147225466 (8).webp" },
  { name: "Michael Chen", company: "Netflix", exp: "9+ years exp", image: "/testimonials/Frame 2147225466 (9).webp" },
]

const ProfileCard = ({ profile }: { profile: typeof profiles[0] }) => (
  <div className="flex items-center gap-4 xl:gap-[1.2vw] bg-white/80 backdrop-blur-sm border border-[#0000000A] px-6 xl:px-[1.8vw] py-3 xl:py-[0.8vw] rounded-full xl:rounded-[2vw] shadow-sm whitespace-nowrap mx-4 xl:mx-[1vw]">
    <div className="w-12 h-12 xl:w-[3vw] xl:h-[3vw] rounded-full overflow-hidden border-2 xl:border-[0.2vw] border-white shadow-sm flex-shrink-0 relative">
      <Image src={profile.image} alt={profile.name} fill className="object-cover" />
    </div>
    <div className="flex flex-col">
      <span className="text-[#1A1A1A] font-bold text-base xl:text-[1.2vw] leading-none">{profile.name}</span>
      <div className="text-[#1A1A1A]/50 text-xs xl:text-[0.9vw] mt-1 xl:mt-[0.3vw] font-medium flex items-center">
        <span>{profile.company}</span>
        <span className="mx-1.5 xl:mx-[0.4vw]">•</span>
        <span>{profile.exp}</span>
      </div>
    </div>
  </div>
)

const MarqueeRow = ({ direction = "left", speed = 40, offset = 0 }: { direction?: "left" | "right", speed?: number, offset?: number }) => {
  const duplicatedProfiles = [...profiles, ...profiles, ...profiles]
  
  return (
    <div className="flex overflow-hidden py-4 xl:py-[1.2vw] select-none">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity
        }}
        style={{ marginLeft: `${offset}px` }}
      >
        {duplicatedProfiles.map((p, i) => (
          <ProfileCard key={i} profile={p} />
        ))}
      </motion.div>
    </div>
  )
}

export function ProfileMarquee() {
  return (
    <section 
      className="w-full bg-[#FAFAFA] overflow-hidden flex items-center justify-center h-[362px] xl:h-[28vw]"
    >
      <div className="w-full max-w-[1438px] xl:max-w-none xl:w-[95vw] mx-auto px-6 xl:px-[2vw] flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col gap-1 xl:gap-[0.5vw]">
          {/* Gradient overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-40 xl:w-[15vw] bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 xl:w-[15vw] bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
          
          <MarqueeRow direction="left" speed={60} />
          <MarqueeRow direction="right" speed={70} offset={-100} />
          <MarqueeRow direction="left" speed={55} offset={50} />
        </div>
      </div>
    </section>
  )
}
