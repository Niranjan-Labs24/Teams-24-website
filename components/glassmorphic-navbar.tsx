"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_CONTENT } from "@/lib/navConst";

export default function GlassmorphicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"companies" | "talent">("companies");
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const hiddenSections = ["what-we-do", "how-it-works", "problem-we-solve"];

  useEffect(() => {
    const visibilityMap = new Map<string, boolean>();
    
    const updateVisibility = () => {
      const isAnyVisible = Array.from(visibilityMap.values()).some(v => v);
      setIsHidden(isAnyVisible);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        visibilityMap.set(entry.target.id, entry.isIntersecting);
      });
      updateVisibility();
    }, {
      threshold: 0.1,
      rootMargin: "-80px 0px 0px 0px"
    });

    const observeElements = () => {
      const sectionElements = hiddenSections.map(id => document.getElementById(id)).filter(Boolean);
      sectionElements.forEach(el => observer.observe(el!));
      return sectionElements.length;
    };

    const count = observeElements();
    
    if (count < hiddenSections.length) {
      setTimeout(observeElements, 500);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
      {/* Dimmed background when mega menu is open */}
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
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[9999] hidden md:block w-[95vw] lg:w-[90vw] xl:w-[85vw] max-w-[1287px]"
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        {/* SHARED BACKGROUND CONTAINER */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ height: 64, opacity: 0 }}
              animate={{ height: 321, opacity: 1 }}
              exit={{ height: 64, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full rounded-[32px] overflow-hidden border border-white/20 z-0"
            >
              <Image 
                src="/background Nav.png" 
                alt="Shared Background" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.nav
          initial={false}
          animate={{
            y: isHidden ? -100 : 0,
            opacity: isHidden ? 0 : 1,
            backgroundColor: isMegaMenuOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.4)",
            backdropFilter: isMegaMenuOpen ? "blur(0px)" : "blur(40px)",
            borderColor: isMegaMenuOpen ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.1)",
            borderRadius: isMegaMenuOpen ? "32px 32px 0px 0px" : "100px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`
            relative z-10
            w-full h-[64px]
            flex items-center justify-between
            px-6 lg:px-8 xl:px-16
            border
          `}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Image src="/logo.png" alt="Teams24 Logo" width={18} height={18} className="object-contain" />
            <div className="flex items-baseline text-white font-[Dyson Sans Modern]">
              <span className="text-lg tracking-[-0.05em] leading-[10px] font-normal" style={{ marginRight: "2px" }}>Teams</span>
              <span className="text-lg tracking-[-0.05em] leading-[10px] font-normal">24</span>
            </div>
          </Link>

          {/* Nav Links - Hover trigger */}
          <div className="flex items-center gap-6 lg:gap-12 text-white">
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
                  flex items-center gap-1.5 whitespace-nowrap text-[0.9375rem] font-medium font-[Manrope] tracking-tight hover:opacity-80 transition cursor-pointer py-2
                  ${(isMegaMenuOpen && activeCategory === (link.id === "for-companies" ? "companies" : "talent")) ? "opacity-100" : "opacity-90"}
                `}
              >
                {link.name}
                <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 ${isMegaMenuOpen && activeCategory === (link.id === "for-companies" ? "companies" : "talent") ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleGetInTouch}
            className="
              bg-[#FFFFFF] text-black
              rounded-[3.875rem]
              px-8 lg:px-12 h-11
              font-[Manrope] font-semibold text-[0.9375rem] tracking-tight
              whitespace-nowrap border border-transparent
              hover:bg-[#f5f5f5] transition-all duration-300 cursor-pointer
            "
          >
            Hire your dream team
          </button>
        </motion.nav>

        {/* Separated Mega Menu Content - CONTENTS ONLY */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 w-full h-[257px] overflow-hidden"
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
              <div className="px-6 lg:px-8 xl:px-12 py-8 flex h-full items-start gap-8 lg:gap-12 pt-[15px]">
                <div className="w-[35%] lg:w-[30%] shrink-0 pt-6">
                  <h3 className="text-white text-[18px] lg:text-[22px] font-normal leading-[1.3] tracking-[-7%] mb-1" style={{ fontFamily: "Space Grotesk" }}>
                    {NAV_CONTENT[activeCategory].heading}
                  </h3>
                  <p className="text-[#FFFFFF4D] text-[11px] lg:text-[12px] font-normal leading-[1.4]" style={{ fontFamily: "Manrope" }}>
                    {NAV_CONTENT[activeCategory].subheading}
                  </p>
                </div>

                <div className="flex-1 pt-8 flex flex-wrap gap-y-3 gap-x-4">
                  {NAV_CONTENT[activeCategory].tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/hire/${tag.toLowerCase().replace(/ /g, "-")}`}
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="
                        flex items-center justify-center
                        px-5 h-[36.64px]
                        rounded-[82.56px] border border-[#FFFFFF1C]
                        bg-[#FFFFFF08]
                        hover:bg-white/10 transition-all
                        w-fit
                      "
                    >
                      <span className="text-white text-[14.86px] font-semibold leading-[19.82px] tracking-[-2%]" style={{ fontFamily: "Manrope" }}>
                        {tag}
                      </span>
                    </Link>
                  ))}
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
          ${isHidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}
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
                      {NAV_CONTENT.talent.tags.map((tag, idx) => (
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
                </div>

                <button onClick={handleGetInTouch} className="mt-auto mb-12 bg-white text-black rounded-full py-5 text-xl font-semibold">Hire your dream team</button>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
