"use client"

import dynamic from "next/dynamic"

export const HiringMethods = dynamic(() => import("@/components/HiringMethods"), { 
  ssr: false,
  loading: () => <div className="w-full bg-white animate-pulse" style={{ height: "719px" }} />
});

export const ProfileMarquee = dynamic(() => import("@/components/ProfileMarquee").then(mod => mod.ProfileMarquee), { 
  ssr: false,
  loading: () => <section className="w-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden" style={{ height: "362px" }} />
});
