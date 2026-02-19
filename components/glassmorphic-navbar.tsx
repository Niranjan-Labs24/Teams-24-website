"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { loadFramerMotion } from "@/lib/animation-loaders";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function GlassmorphicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [MotionComponents, setMotionComponents] = useState<{
    motion: typeof import("framer-motion").motion;
    AnimatePresence: typeof import("framer-motion").AnimatePresence;
  } | null>(null);

  
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

  const toggleMenu = async () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    
    if (nextState && !MotionComponents) {
      const modules = await loadFramerMotion({ includeAnimatePresence: true });
      setMotionComponents({
        motion: modules.motion,
        AnimatePresence: modules.AnimatePresence!,
      });
    }
  };

  const navigationLinks = [
    { name: "For companies", id: "for-companies" },
    { name: "For talent", id: "for-talent" }
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
  };

  const handleGetInTouch = () => {
    window.open('https://cal.com/sasharay/30min', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-4 md:top-6 left-1/2 -translate-x-1/2
          z-[9999]
          flex items-center justify-between
          rounded-[100px]
          border border-white/10
          backdrop-blur-[20px]
          px-4 md:px-6 lg:px-7 py-2.5
          w-[95%] md:w-[92%] max-w-7xl
          transition-all duration-500 ease-in-out
          ${isHidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}
        `}
        style={{
          background: "rgba(0, 0, 0, 0.4)",
          WebkitBackdropFilter: "blur(40px)",
          backdropFilter: "blur(40px)",
        }}
      >
        {/* Left Section - Logo + Name */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Teams24 Logo"
            width={18} 
            height={18}
            className="object-contain"
          />
          <div className="hidden lg:flex items-baseline text-white font-[Dyson Sans Modern]">
            <span
              className="text-lg tracking-[-0.05em] leading-[10px] font-normal"
              style={{ marginRight: "2px" }}
            >
              Teams
            </span>
            <span className="text-lg tracking-[-0.05em] leading-[10px] font-normal">
              24
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center md:gap-6 lg:gap-12 text-white">
          {navigationLinks.map((link, i) => (
            <div key={i} className="relative group">
              <button
                onClick={() => handleSmoothScroll(link.id)}
                className="flex items-center gap-1.5 whitespace-nowrap text-[0.9375rem] font-medium font-[Manrope] tracking-tight hover:opacity-80 transition cursor-pointer py-2"
              >
                {link.name}
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-[10001]">
                <div 
                  className="border border-white/10 rounded-[32px] p-8 min-w-[500px] shadow-2xl backdrop-blur-xl"
                  style={{ 
                    background: "linear-gradient(180deg, #184BB4 0%, #1A2251 100%)",
                  }}
                >
                  {link.id === "for-companies" ? (
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col">
                        <h3 className="text-white text-xl font-medium tracking-tight mb-1">Explore dream team</h3>
                        <p className="text-white/40 text-sm font-medium">Find talents across 30+ technologies</p>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {[
                          "Full-stack development",
                          "Programmers",
                          "App",
                          "ExpressJS",
                          "NodeJS",
                          "iOS",
                          "Software",
                          "Full-stack development",
                          "Programmers",
                          "App",
                          "Django",
                          "Full stack",
                          "Data Analyst",
                          "Automation"
                        ].map((tag, index) => (
                          <Link
                            key={index}
                            href={`/hire/${tag.toLowerCase().replace(/ /g, "-")}`}
                            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md text-white/90 text-[13px] font-medium transition-colors whitespace-nowrap"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href="https://careers.teams24.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col gap-2 p-2"
                    >
                      <span className="text-white text-lg font-medium">Careers</span>
                      <span className="text-white/40 text-sm">Join our global network of elite talent.</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <button
          onClick={handleGetInTouch}
          className="
            hidden md:block
            bg-[#FFFFFF] text-black
            rounded-[3.875rem]
            md:px-8 lg:px-12 py-3.5
            font-[Manrope] font-semibold text-[0.9375rem] tracking-tight
            whitespace-nowrap
            border border-transparent
            hover:bg-[#f5f5f5]
            transition-all duration-300
            cursor-pointer
          "
        >
          Hire your dream team
        </button>

        <div className="md:hidden flex items-center pr-2">
          <button onClick={toggleMenu} className="text-white relative w-6 h-6 flex flex-col justify-center items-end gap-1.5 focus:outline-none">
            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-6 absolute rotate-45" : "w-6"}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-6 absolute -rotate-45" : "w-4"}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay - Moved outside <nav> to prevent clipping and ensure visibility */}
      {MotionComponents && (
        <MotionComponents.AnimatePresence>
          {isOpen && (
            <MotionComponents.motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              className="
                fixed top-[2%] left-[2.5%]
                w-[95%] h-[96%]
                flex flex-col
                pt-8 px-6 pb-12
                md:hidden
                z-[10000]
                overflow-y-auto
                rounded-[48px]
                border border-white/10
                shadow-2xl
              "
              style={{
                backgroundColor: "#1A2251",
              }}
            >
              {/* Background Image inside overlay to match Hero */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/back/background.png"
                  alt="Background"
                  fill
                  className="object-cover opacity-100"
                  priority
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#184BB4]/60 to-[#1A2251]/90 z-[1]" />
              </div>

              {/* Content Wrapper to stay above background */}
              <div className="relative z-[2] flex flex-col h-full">
                {/* Header inside overlay */}
                <div className="flex items-center justify-between mb-16 px-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      alt="Teams24 Logo"
                      width={22} 
                      height={22}
                      className="object-contain"
                    />
                    <div className="flex items-baseline text-white font-[Dyson Sans Modern]">
                      <span className="text-xl tracking-[-0.05em] leading-[10px] font-normal" style={{ marginRight: "2px" }}>Teams</span>
                      <span className="text-xl tracking-[-0.05em] leading-[10px] font-normal">24</span>
                    </div>
                  </div>
                  <button onClick={toggleMenu} className="text-white relative w-6 h-6 flex flex-col justify-center items-end gap-1.5 focus:outline-none">
                    <span className="h-[2px] bg-white transition-all duration-300 w-6 absolute rotate-45"></span>
                    <span className="h-[2px] bg-white transition-all duration-300 w-6 absolute -rotate-45"></span>
                  </button>
                </div>

                <div className="flex flex-col gap-12 flex-1">
                  {/* For Companies Section */}
                  <div className="flex flex-col gap-8 w-full px-2">
                    <div className="flex items-center justify-between group">
                      <button 
                        className="text-white text-3xl font-[Manrope] font-normal tracking-tight flex items-center gap-2"
                        onClick={() => handleSmoothScroll("for-companies")}
                      >
                        For companies <ChevronDown size={28} className="opacity-70 group-hover:rotate-180 transition-transform" />
                      </button>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col">
                         <h3 className="text-white text-2xl font-medium tracking-tight mb-1">Explore dream team</h3>
                         <p className="text-white/40 text-base font-medium">Find talents across 30+ technologies</p>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {[
                          "Full-stack development",
                          "Programmers",
                          "App",
                          "ExpressJS",
                          "NodeJS",
                          "iOS",
                          "Software",
                          "Full-stack development",
                          "Programmers",
                          "App",
                          "Django",
                          "Full stack",
                          "Data Analyst",
                          "Automation"
                        ].map((tag, idx) => (
                          <Link 
                            key={idx} 
                            href={`/hire/${tag.toLowerCase().replace(/ /g, "-")}`}
                            onClick={() => setIsOpen(false)}
                            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md text-white/90 text-[14px] font-medium transition-colors"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10 px-2" />

                  {/* For Talent */}
                  <div className="flex flex-col gap-8 w-full px-2">
                    <button 
                      onClick={() => {
                        handleSmoothScroll("for-talent");
                        setIsOpen(false);
                      }}
                      className="text-white text-3xl font-[Manrope] font-normal tracking-tight flex items-center gap-2"
                    >
                      For talent <ChevronDown size={28} className="opacity-70" />
                    </button>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-auto px-2">
                  <button
                    onClick={handleGetInTouch}
                    className="
                      bg-white text-black
                      rounded-full px-12 py-5
                      font-[Manrope] font-semibold text-xl
                      hover:bg-[#f5f5f5]
                      transition-all duration-300
                      w-full
                      text-center
                      cursor-pointer
                    "
                  >
                    Hire your dream team
                  </button>
                </div>
              </div>
            </MotionComponents.motion.div>
          )}
        </MotionComponents.AnimatePresence>
      )}
    </>
  );
}
