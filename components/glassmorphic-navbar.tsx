"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { handleSmoothScroll as smoothScroll } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { NAV_CONTENT } from "@/lib/navConst";

export default function GlassmorphicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"companies" | "talent">("companies");
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close mega menu on scroll or click outside
  useEffect(() => {
    const handleScroll = () => {
      if (isMegaMenuOpen) setIsMegaMenuOpen(false);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigationLinks = [
    { name: "For companies", id: "for-companies", hasMegaMenu: true },
    { name: "For talent", id: "for-talent", hasMegaMenu: false }
  ];

  const handleSmoothScroll = (sectionId: string) => {
    const success = smoothScroll(sectionId);
    if (!success) {
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false); 
    setIsMegaMenuOpen(false);
  };

  const handleGetInTouch = () => {
    window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setIsMegaMenuOpen(false);
  };

  return (
    <>
     
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-[9998] pointer-events-none"
          />
        )}
      </AnimatePresence>
      
      {/* Main Navbar Wrapper - Responsive width for 13-inch to 16-inch+ screens */}
      <div 
        className="absolute top-[clamp(32px,3.125vw,80px)] left-1/2 -translate-x-1/2 z-[9999] hidden md:block w-[clamp(1100px,89vw,2200px)] max-w-[95vw]"
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        {/* SHARED BACKGROUND CONTAINER */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ height: isMegaMenuOpen ? "auto" : 0, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[clamp(24px,3vw,48px)] overflow-hidden border border-white/20 z-0 bg-[#131313]/20 backdrop-blur-[54px]"
            />
          )}
        </AnimatePresence>

        <motion.nav
          initial={false}
          animate={{
            backgroundColor: isMegaMenuOpen ? "rgba(0, 0, 0, 0)" : "rgba(19, 19, 19, 0.2)",
            backdropFilter: isMegaMenuOpen ? "blur(0px)" : "blur(54px)",
            borderColor: isMegaMenuOpen ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.1)",
            borderRadius: isMegaMenuOpen ? "clamp(24px,3vw,48px) clamp(24px,3vw,48px) 0px 0px" : "clamp(24px,3vw,48px)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`
            relative z-10
            w-full
            flex items-center justify-between
            border
            h-[clamp(72px,6.66vw,140px)]
            gap-[clamp(16px,2.2vw,48px)]
            pl-[clamp(24px,3.3vw,72px)]
            pr-[clamp(12px,1.4vw,30px)]
          `}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer shrink-0">
            <Image src="/logos/NavLogo.webp" alt="Teams24 Logo" width={200} height={60} className="object-contain w-[clamp(120px,11vw,200px)] h-auto" />
          </Link>

          {/* Nav Links - Hover trigger */}
          <div className="flex items-center justify-center flex-1 gap-6 lg:gap-12 xl:gap-[5vw] text-white shrink-0">
            {navigationLinks.map((link, i) => (
              <button
                key={i}
                onMouseEnter={() => {
                  const category = link.id === "for-companies" ? "companies" : "talent";
                  setActiveCategory(category);
                  setIsMegaMenuOpen(true);
                }}
                onClick={() => {
                  if (link.hasMegaMenu) {
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                  } else {
                    handleSmoothScroll(link.id);
                  }
                }}
                className={`
                  flex items-center gap-[0.4vw] whitespace-nowrap text-[clamp(14px,1.1vw,24px)] font-medium font-[Manrope] tracking-tight hover:opacity-80 transition cursor-pointer py-2
                  ${(isMegaMenuOpen && activeCategory === (link.id === "for-companies" ? "companies" : "talent")) ? "opacity-100" : "opacity-90"}
                `}
              >
                {link.name}
                <ChevronDown size={18} className={`opacity-70 transition-transform duration-300 ${isMegaMenuOpen && activeCategory === (link.id === "for-companies" ? "companies" : "talent") ? "rotate-180" : ""} w-[clamp(10px,1vw,20px)]`} />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleGetInTouch}
            className="
              bg-[#FFFFFF] text-[#131313]
              rounded-[clamp(30px,4.3vw,90px)]
              w-[clamp(160px,13.5vw,280px)] h-[clamp(44px,3.88vw,80px)]
              p-[clamp(10px,1.1vw,24px)_clamp(20px,2vw,44px)]
              flex items-center justify-center gap-[0.5vw]
              font-[Manrope] font-semibold 
              text-[clamp(12px,0.97vw,20px)] leading-[clamp(20px,1.66vw,32px)]
              tracking-[-0.03em] whitespace-nowrap 
              border-[clamp(1px,0.2vw,4px)] border-[#131313]/15
              hover:bg-[#f5f5f5] transition-all duration-300 cursor-pointer shrink-0
            "
          >
            Hire your dream team
          </button>
        </motion.nav>

        {/* Separated Mega Menu Content - CONTENTS ONLY */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 w-full overflow-hidden"
            >
              {/* Divider Line */}
              <div 
                className="absolute"
                style={{
                  width: 'calc(100% - clamp(40px,4.16vw,60px))',
                  height: '0px',
                  top: 'clamp(14px,1.38vw,20px)',
                  left: 'clamp(20px,2.08vw,30px)',
                  borderTop: '0.75px solid rgba(255, 255, 255, 0.10)'
                }}
              />

              {/* Mega Menu Content */}
              <div className="px-[clamp(16px,4vw,64px)] py-[clamp(16px,3vw,48px)] flex items-start gap-[clamp(16px,3vw,48px)] pt-[clamp(24px,2.5vw,40px)] pb-[clamp(24px,3vw,64px)]">
                <div className="w-[30%] shrink-0 pt-[clamp(20px,1.66vw,24px)]">
                  <h3 className="text-white text-[clamp(18px,1.66vw,24px)] font-normal leading-[1.3] tracking-[-0.07em] mb-[clamp(4px,0.5vw,8px)]" style={{ fontFamily: "Space Grotesk" }}>
                    {NAV_CONTENT[activeCategory].heading}
                  </h3>
                  <p className="text-[#FFFFFF4D] text-[clamp(12px,0.97vw,14px)] font-normal leading-[1.4]" style={{ fontFamily: "Manrope" }}>
                    {NAV_CONTENT[activeCategory].subheading}
                  </p>
                </div>

                <div className="flex-1 pt-[clamp(16px,2.5vw,40px)] flex flex-wrap gap-y-[clamp(8px,1vw,16px)] gap-x-[clamp(12px,1.2vw,20px)]">
                  {NAV_CONTENT[activeCategory].tags.map((tag, idx) => {
                    const mappedRoute = tag === "Careers" 
                      ? "/careers" 
                      : `/hire/${tag.toLowerCase().replace(/ /g, "-")}`;
                    
                    return (
                      <Link
                        key={idx}
                        href={mappedRoute}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="
                          flex items-center justify-center
                          px-[clamp(16px,1.66vw,24px)] h-[clamp(36px,3.1vw,44px)]
                          rounded-full border border-[#FFFFFF1C]
                          bg-[#FFFFFF08]
                          hover:border-[#184BB4] hover:bg-white/10 transition-all
                          w-fit
                        "
                      >
                        <span className="text-white text-[clamp(14px,1.1vw,16px)] font-semibold leading-[1.5] tracking-[-2%]" style={{ fontFamily: "Manrope" }}>
                          {tag}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navbar */}
      <nav
        className={`
          md:hidden fixed top-4 left-1/2 -translate-x-1/2
          z-[9999] flex items-center justify-between
          rounded-[100px] border border-white/10 backdrop-blur-[20px]
          px-4 py-2.5 w-[92%] transition-all duration-500
          opacity-100 translate-y-0
        `}
        style={{ background: "rgba(0, 0, 0, 0.4)" }}
      >
        <Link href="/" className="flex items-center">
          <Image src="/logos/NavLogo.webp" alt="Logo" width={100} height={30} className="w-[100px] h-auto" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white relative w-6 h-6 flex flex-col justify-center items-end gap-1.5 focus:outline-none">
          <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-6 absolute rotate-45" : "w-6"}`}></span>
          <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-6 absolute -rotate-45" : "w-4"}`}></span>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-[30px] md:hidden flex flex-col pt-8 px-6 overflow-y-auto"
          >
              <div className="relative z-[2] flex flex-col h-full">
                <div className="flex items-center justify-between mb-16">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                    <Image src="/logos/NavLogo.webp" alt="Logo" width={120} height={36} className="w-[120px] h-auto" />
                  </Link>
                  <button onClick={() => setIsOpen(false)} className="text-white relative w-6 h-6 flex flex-col justify-center items-center">
                    <span className="h-[2px] bg-white w-6 absolute rotate-45"></span>
                    <span className="h-[2px] bg-white w-6 absolute -rotate-45"></span>
                  </button>
                </div>

                <div className="flex flex-col gap-10 flex-1">
                  {/* For Companies */}
                  <div className="flex flex-col gap-4">
                    <button 
                      className="text-white text-3xl font-[Manrope] text-left flex items-center justify-between w-full"
                      onClick={() => handleSmoothScroll("for-companies")}
                    >
                      For companies <ChevronDown size={28} />
                    </button>
                    <div className="flex flex-wrap gap-2">
                      {NAV_CONTENT.companies.tags.map((tag, idx) => (
                        <Link 
                          key={idx} 
                          href={`/hire/${tag.toLowerCase().replace(/ /g, "-")}`} 
                          onClick={() => setIsOpen(false)} 
                          className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/10" />

                  {/* For Talent */}
                  <div className="flex flex-col gap-4">
                    <button 
                      className="text-white text-3xl font-[Manrope] text-left flex items-center justify-between w-full"
                      onClick={() => handleSmoothScroll("for-talent")}
                    >
                      For talent <ChevronDown size={28} />
                    </button>
                    <div className="flex flex-wrap gap-2">
                      {NAV_CONTENT.talent.tags.map((tag, idx) => {
                        const mappedRoute = tag === "Careers" 
                          ? "/careers" 
                          : `/hire/${tag.toLowerCase().replace(/ /g, "-")}`;
                          
                        return (
                          <Link 
                            key={idx} 
                            href={mappedRoute} 
                            onClick={() => setIsOpen(false)} 
                            className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                          >
                            {tag}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button onClick={handleGetInTouch} className="mt-auto mb-12 bg-white text-black rounded-full py-5 text-xl font-semibold">Hire your dream team</button>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
