"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const profiles = [
  { name: "Jack Davies", company: "Amazon", exp: "7+ years exp", image: "/testimonials/memoji1.png" },
  { name: "Anna Lewis", company: "Airbnb", exp: "5+ years exp", image: "/testimonials/memoji2.png" },
  { name: "Brendon Charles", company: "Apple", exp: "10+ years exp", image: "/testimonials/memoji3.png" },
  { name: "Emma thomson", company: "IBM", exp: "5+ years exp", image: "/testimonials/memoji1.png" },
  { name: "Spencer Johnson", company: "Microsoft", exp: "5+ years exp", image: "/testimonials/memoji2.png" },
  { name: "Ashley Vance", company: "Meta", exp: "8+ years exp", image: "/testimonials/memoji3.png" },
  { name: "Jake Thomson", company: "IBM", exp: "5+ years exp", image: "/testimonials/memoji1.png" },
]

const ProfileCard = ({ profile }: { profile: typeof profiles[0] }) => (
  <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-[#0000000A] px-6 py-3 rounded-full shadow-sm whitespace-nowrap mx-4">
    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
      <Image src={profile.image} alt={profile.name} width={48} height={48} className="object-cover" />
    </div>
    <div className="flex flex-col">
      <span className="text-[#1A1A1A] font-bold text-base leading-none">{profile.name}</span>
      <div className="text-[#1A1A1A]/50 text-xs mt-1 font-medium">
        <span>{profile.company}</span>
        <span className="mx-1.5">•</span>
        <span>{profile.exp}</span>
      </div>
    </div>
  </div>
)

const MarqueeRow = ({ direction = "left", speed = 40, offset = 0 }: { direction?: "left" | "right", speed?: number, offset?: number }) => {
  const duplicatedProfiles = [...profiles, ...profiles, ...profiles]
  
  return (
    <div className="flex overflow-hidden py-4 select-none">
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
      className="w-full bg-[#FAFAFA] overflow-hidden flex items-center justify-center"
      style={{ height: "362px" }}
    >
      <div className="w-full max-w-[1438px] mx-auto px-6 flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col gap-1">
          {/* Gradient overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
          
          <MarqueeRow direction="left" speed={60} />
          <MarqueeRow direction="right" speed={70} offset={-100} />
          <MarqueeRow direction="left" speed={55} offset={50} />
        </div>
      </div>
    </section>
  )
}
