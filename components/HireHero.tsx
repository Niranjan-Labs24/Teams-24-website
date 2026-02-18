"use client";

import Image from "next/image";
import { Sparkle } from "lucide-react";

interface HireHeroProps {
  role?: string;
}

export default function HireHero({ role = "Fullstack" }: HireHeroProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/back/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0B1A]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center gap-6 md:gap-8">
        <h1 
          className="text-white text-[32px] sm:text-[44px] md:text-[54px] lg:text-[74px] font-[400] leading-[1.1] sm:leading-[1.0] tracking-[-0.07em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Hire {role} Developers: Affordable, dedicated {role.toLowerCase()} experts in 72 hours
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl max-w-[800px] font-medium opacity-90">
          Access 100+ expert {role} developers, engineers and architects from Teams24, handpicked through a 5-hour evaluation process.
        </p>

        <div className="flex flex-col items-center gap-6 mt-4">
          <p className="text-white/60 text-sm font-semibold tracking-wider uppercase">
            Trusted by 20+ CEO'S and CXO'S
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-gray-100 transition-all shadow-xl shadow-white/10">
              Hire your dream developers
            </button>
            
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium">
              <Sparkle className="w-4 h-4 text-white/60" />
              Book a free discovery call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
