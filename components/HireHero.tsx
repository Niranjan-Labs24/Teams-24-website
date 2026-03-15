"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface HireHeroProps {
  role?: string;
  headline?: string;
  subheading?: string;
  trustBadge?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export default function HireHero({ 
  role = "Fullstack",
  headline,
  subheading,
  trustBadge,
  primaryCta = "Hire your dream developers",
  secondaryCta = "Book a free discovery call"
}: HireHeroProps) {
  const displayHeadline = headline || `Hire ${role} Developers: Affordable, dedicated ${role.toLowerCase()} experts in 72 hours`;
  const displaySubheading = subheading || `Access 100+ expert ${role} developers, engineers and architects from Teams24, handpicked through a 5-hour evaluation process.`;
  const displayTrustBadge = trustBadge || "Trusted by 20+ CEO's and CXO's";

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 xl:px-[2vw] pt-36 sm:pt-40 xl:pt-[10vw] pb-20 xl:pb-[5vw] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/back/background.png"
          alt="Background"
          fill
          className="object-cover object-top sm:object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0B1A]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] xl:max-w-none xl:w-[85vw] mx-auto flex flex-col items-center gap-6 md:gap-8 xl:gap-[2.5vw]">
        <h1 
          className="text-white text-[32px] sm:text-[44px] md:text-[54px] lg:text-[74px] xl:text-[5vw] font-[400] leading-[1.1] sm:leading-[1.0] xl:leading-[1.0] tracking-[-0.07em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {displayHeadline}
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl xl:text-[1.3vw] max-w-[800px] xl:max-w-[55vw] font-medium opacity-90">
          {displaySubheading}
        </p>

        <div className="flex flex-col items-center gap-6 xl:gap-[2vw] mt-4 xl:mt-[1vw]">
          {/* Standardized Trust Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[13px] xl:gap-[1vw]">
            <div className="flex -space-x-3 flex-shrink-0">
              {[
                "/rating/Frame 2147225664.png",
                "/rating/Frame 2147225665.png",
                "/rating/Frame 2147225666.png",
                "/rating/Frame 2147225667.png"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="relative w-8 h-8 sm:w-10 sm:h-10 xl:w-[3vw] xl:h-[3vw] rounded-full border-2 xl:border-[0.15vw] border-white/30 overflow-hidden bg-gray-800"
                >
                  <Image
                    src={src}
                    alt={`Trusted User ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1 sm:whitespace-nowrap">
              <div className="flex gap-0.5 xl:gap-[0.1vw]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 xl:w-[1.5vw] xl:h-[1.5vw] fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-white/70 text-sm sm:text-base xl:text-[1.2vw] font-medium tracking-tight text-center sm:text-left mt-1 xl:mt-[0.2vw]">
                {displayTrustBadge}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 xl:gap-[1.5vw]">
            <button 
              onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
              className="bg-white text-black px-8 py-4 xl:px-[2.5vw] xl:py-[1.2vw] rounded-full xl:rounded-[2vw] font-bold text-lg md:text-xl xl:text-[1.4vw] hover:bg-gray-100 transition-all shadow-xl shadow-white/10"
            >
              {primaryCta}
            </button>
            
            <button 
              onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2 xl:gap-[0.5vw] group text-white/80 hover:text-white transition-colors text-sm xl:text-[1vw] font-semibold"
            >
              <div className="relative w-3.5 h-3.5 xl:w-[1vw] xl:h-[1vw] flex-shrink-0">
                <Image
                  src="/icons/right.png"
                  alt="Discovery Call Icon"
                  fill
                  className="object-contain"
                />
              </div>
              {secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
