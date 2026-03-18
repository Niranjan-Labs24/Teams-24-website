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
    <section className="relative w-full min-h-[70vh] lg:min-h-[45rem] flex flex-col items-center justify-start text-center pt-[160px] sm:pt-[200px] xl:pt-[18vw] pb-20 xl:pb-[5vw] overflow-hidden rounded-b-[clamp(40px,6.25vw,100px)] bg-[#0A0B1A]">
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
      <div className="relative z-10 w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto flex flex-col items-center gap-8 md:gap-12 xl:gap-[3.5vw] px-6 md:px-12 lg:px-16 xl:px-0">
        <h1 
          className="text-[#FFFFFF] font-[400] tracking-[-0.07em] mx-auto overflow-visible"
          style={{ 
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(24px, 4vw, 80px)",
            lineHeight: "1.1",
            maxWidth: "95vw"
          }}
        >
          {displayHeadline.includes(",") ? (
            <>
              <span className="block mb-2 sm:mb-0">
                {displayHeadline.split(",")[0]},
              </span>
              <span className="block xl:whitespace-nowrap">
                {displayHeadline.slice(displayHeadline.indexOf(",") + 1).trim()}
              </span>
            </>
          ) : displayHeadline.includes(":") ? (
            <>
              <span className="block mb-2 sm:mb-0">
                {displayHeadline.split(":")[0]}:
              </span>
              <span className="block xl:whitespace-nowrap">
                {displayHeadline.split(":")[1].trim()}
              </span>
            </>
          ) : (
            displayHeadline
          )}
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl xl:text-[1.3vw] max-w-[800px] xl:max-w-[55vw] font-medium opacity-90">
          {displaySubheading}
        </p>

        <div className="flex flex-col items-center gap-8 xl:gap-[2.5vw] mt-6 xl:mt-[2vw]">
          {/* Standardized Trust Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[13px] xl:gap-[1vw]">
            <div className="flex -space-x-3 flex-shrink-0">
              {[
                "/testimonials/Frame 2147225466 (1).webp",
                "/testimonials/Frame 2147225466 (2).webp",
                "/testimonials/Frame 2147225466 (3).webp",
                "/testimonials/Frame 2147225466 (4).webp"
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
          
          <div className="flex flex-col items-center gap-[10px] xl:gap-[1vw] mt-10 xl:mt-[3vw]">
            <button 
              onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
              className="bg-white text-black transition-all duration-300 hover:bg-gray-100 shadow-[0_4px_20px_rgba(255,255,255,0.2)] whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center opacity-100"
              style={{
                width: "clamp(180px, 22.26vw, 450px)",
                height: "clamp(50px, 6.25vw, 120px)",
                padding: "clamp(12px, 1.875vw, 36px) clamp(28px, 4.375vw, 84px)",
                borderRadius: "62px",
                border: "clamp(1px, 0.234vw, 5px) solid #13131326",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(14px, 1.406vw, 28px)",
                lineHeight: "clamp(24px, 2.5vw, 48px)",
                letterSpacing: "-0.03em",
                textAlign: "center",
              }}
            >
              {primaryCta}
            </button>
            
            <button 
              onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-1.5 xl:gap-[0.5vw] group"
            >
              <div className="relative w-3.5 h-3.5 xl:w-[1vw] xl:h-[1vw] flex-shrink-0">
                <Image
                  src="/icons/right.png"
                  alt="Discovery Call Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p 
                className="font-semibold text-white/70 group-hover:text-white transition-colors lg:text-[12px] xl:text-[1vw] lg:leading-[20px] xl:leading-[1.5] whitespace-nowrap"
                style={{
                    fontFamily: "Manrope, sans-serif",
                    letterSpacing: "-0.01em",
                }}
              >
                {secondaryCta}
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
