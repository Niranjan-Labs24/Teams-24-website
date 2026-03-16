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
        className="fixed top-4 md:top-6 xl:top-[1.5vw] left-1/2 -translate-x-1/2 z-[9999] hidden md:block w-[95vw]"
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
              className="absolute inset-0 rounded-[32px] xl:rounded-[2.5vw] overflow-hidden border border-white/20 z-0 bg-black/40 backdrop-blur-[40px]"
            />
          )}
        </AnimatePresence>

        <motion.nav
          initial={false}
          animate={{
            backgroundColor: isMegaMenuOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.4)",
            backdropFilter: isMegaMenuOpen ? "blur(0px)" : "blur(40px)",
            borderColor: isMegaMenuOpen ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.1)",
            borderRadius: isMegaMenuOpen ? "32px 32px 0px 0px" : "100px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`
            relative z-10
            w-full
            flex items-center justify-between
            border
            h-[60px] lg:h-[72px] xl:h-[5.5vw]
            gap-4 lg:gap-8 xl:gap-[2.5vw]
            pl-4 lg:pl-6 xl:pl-[2.5vw]
            pr-4 lg:pr-6 xl:pr-[2vw]
          `}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-1.5 lg:gap-2 xl:gap-[0.5vw] hover:opacity-80 transition-opacity cursor-pointer shrink-0">
            <Image src="/logo.png" alt="Teams24 Logo" width={48} height={48} className="object-contain w-[20px] lg:w-[26px] xl:w-[2.2vw] h-auto" />
            <div className="flex items-baseline text-white font-[Dyson Sans Modern]">
              <span className="text-lg lg:text-xl xl:text-[1.8vw] tracking-[-0.05em] leading-[1] font-normal" style={{ marginRight: "0.1vw" }}>Teams </span>
              <span className="text-lg lg:text-xl xl:text-[1.8vw] tracking-[-0.05em] leading-[1] font-normal">24</span>
            </div>
          </Link>

          {/* Nav Links - Hover trigger */}
          <div className="flex items-center justify-center flex-1 gap-4 lg:gap-8 xl:gap-[3vw] text-white shrink-0">
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
                  flex items-center gap-1.5 xl:gap-[0.4vw] whitespace-nowrap text-[0.875rem] lg:text-[1rem] xl:text-[1.2vw] font-medium font-[Manrope] tracking-tight hover:opacity-80 transition cursor-pointer py-2 xl:py-[0.5vw]
                  ${(isMegaMenuOpen && activeCategory === (link.id === "for-companies" ? "companies" : "talent")) ? "opacity-100" : "opacity-90"}
                `}
              >
                {link.name}
                <ChevronDown size={16} className={`opacity-70 transition-transform duration-300 ${isMegaMenuOpen && activeCategory === (link.id === "for-companies" ? "companies" : "talent") ? "rotate-180" : ""} w-[12px] lg:w-[14px] xl:w-[1vw] xl:h-[1vw]`} />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleGetInTouch}
            className="
              bg-[#FFFFFF] text-black
              rounded-[3.875rem] xl:rounded-[3vw]
              px-6 lg:px-9 xl:px-[2.5vw]
              h-8 lg:h-10 xl:h-[2.8vw]
              font-[Manrope] font-semibold 
              text-[0.9375rem] lg:text-[1rem] xl:text-[1vw]
              tracking-[-0.03em] whitespace-nowrap border border-transparent
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
                  width: 'calc(100% - 60px)',
                  height: '0px',
                  top: '20px',
                  left: '30px',
                  borderTop: '0.75px solid rgba(255, 255, 255, 0.10)' // #FFFFFF1A
                }}
              />

              {/* Mega Menu Content */}
              <div className="px-6 lg:px-8 xl:px-[4vw] py-8 lg:py-10 xl:py-[3vw] flex items-start gap-8 lg:gap-12 xl:gap-[3vw] pt-[15px] lg:pt-[20px] xl:pt-[1.5vw] pb-[30px] lg:pb-[40px] xl:pb-[3vw]">
                <div className="w-[35%] lg:w-[30%] shrink-0 pt-6 xl:pt-[1.5vw]">
                  <h3 className="text-white text-[20px] lg:text-[24px] xl:text-[2vw] font-normal leading-[1.3] xl:leading-[1.2] tracking-[-7%] mb-1 lg:mb-2 xl:mb-[0.5vw]" style={{ fontFamily: "Space Grotesk" }}>
                    {NAV_CONTENT[activeCategory].heading}
                  </h3>
                  <p className="text-[#FFFFFF4D] text-[12px] lg:text-[14px] xl:text-[1.1vw] font-normal leading-[1.4]" style={{ fontFamily: "Manrope" }}>
                    {NAV_CONTENT[activeCategory].subheading}
                  </p>
                </div>

                <div className="flex-1 pt-8 xl:pt-[2.5vw] flex flex-wrap gap-y-3 lg:gap-y-4 xl:gap-y-[1vw] gap-x-4 lg:gap-x-5 xl:gap-x-[1.2vw]">
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
                          px-5 lg:px-6 xl:px-[2vw] h-[36.64px] lg:h-[42px] xl:h-[3.5vw]
                          rounded-[82.56px] xl:rounded-[4vw] border border-[#FFFFFF1C] xl:border-[0.1vw]
                          bg-[#FFFFFF08]
                          hover:border-[#184BB4] hover:bg-white/10 transition-all
                          w-fit
                        "
                      >
                        <span className="text-white text-[14.86px] lg:text-[16px] xl:text-[1.2vw] font-semibold leading-[19.82px] xl:leading-[1.5] tracking-[-2%]" style={{ fontFamily: "Manrope" }}>
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
        <Link href="/" className="flex items-center gap-2 font-[Dyson Sans Modern]">
          <Image src="/logo.png" alt="Logo" width={18} height={18} />
          <span className="text-white text-lg">Teams 24</span>
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
            className="fixed inset-0 z-[10000] bg-[#1A2251] md:hidden flex flex-col pt-8 px-6 overflow-y-auto"
          >
             <div className="absolute inset-0 z-0">
                <Image src="/back/background.png" alt="Background" fill className="object-cover opacity-100" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-[#184BB4]/60 to-[#1A2251]/90 z-[1]" />
              </div>

              <div className="relative z-[2] flex flex-col h-full">
                <div className="flex items-center justify-between mb-16">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={22} height={22} />
                    <span className="text-white text-xl font-[Dyson Sans Modern]">Teams 24</span>
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
