"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { loadFramerMotion } from "@/lib/animation-loaders";
import { Menu, X } from "lucide-react";

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
    { name: "What we do", id: "what-we-do" },
    { name: "How it works", id: "how-it-works" },
    { name: "Services", id: "services" },
    { name: "Careers", id: "careers" }
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
    window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-11 left-1/2 -translate-x-1/2
        z-[9999]
        flex items-center justify-between
        rounded-[3.75rem]
        border border-white/20
        bg-[#13131333]
        backdrop-blur-[44px]
        px-6 py-2.5
        md:py-3
        transition-all duration-500 ease-in-out
        w-[85%] md:w-[calc(100%-7.5rem)] max-w-7xl
        ${isHidden ? "opacity-0 pointer-events-none translate-y-[-20px]" : "opacity-100 translate-y-0"}
      `}
      style={{
        WebkitBackdropFilter: "blur(44px)",
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

      <div className="hidden md:flex items-center md:gap-6 lg:gap-8 xl:gap-14 text-white">
        {navigationLinks.map((link, i) => (
          <button
            key={i}
            onClick={() => handleSmoothScroll(link.id)}
            className="text-[0.9375rem] font-[500] font-[Manrope] tracking-[-0.02em] leading-[15px] opacity-90 hover:opacity-100 transition cursor-pointer"
          >
            {link.name}
          </button>
        ))}
      </div>

     
      <button
        onClick={handleGetInTouch}
        className="
          hidden md:block
          bg-[#FFFFFF] text-black
          rounded-[3.875rem]
          md:px-6 lg:px-8 xl:px-12 py-3.5
          font-[Manrope] font-semibold text-[0.9375rem] tracking-[-0.03em]
          border border-transparent
          hover:bg-[#f5f5f5]
          transition-all duration-300
          cursor-pointer
        "
      >
        Get in touch
      </button>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {MotionComponents ? (
        <MotionComponents.AnimatePresence>
          {isOpen && (
            <MotionComponents.motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.25 }}
              className="
                absolute top-[4.375rem] right-4
                left-4 md:left-auto md:right-5
                sm:w-[13.75rem]
                bg-[#000000cc] backdrop-blur-[20px]
                flex flex-col items-start
                py-3 px-4 gap-3
                rounded-3xl
                border border-white/10
                md:hidden
              "
            >
              {navigationLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => handleSmoothScroll(link.id)}
                  className="text-white text-[15px] font-[Manrope] tracking-[-0.02em] hover:opacity-80 transition cursor-pointer w-full text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleGetInTouch}
                className="
                  bg-[#FFFFFF] text-black
                  rounded-[3.875rem] px-7 py-2
                  font-[Manrope] font-semibold text-[13px]
                  hover:bg-[#f5f5f5]
                  transition-all duration-300
                  w-full
                  text-center
                  cursor-pointer
                "
              >
                Get in touch
              </button>
            </MotionComponents.motion.div>
          )}
        </MotionComponents.AnimatePresence>
      ) : (
        isOpen && (
          <div
            className="
              absolute top-[4.375rem] right-4
              left-4 md:left-auto md:right-5
              sm:w-[13.75rem]
              bg-[#000000cc] backdrop-blur-[20px]
              flex flex-col items-start
              py-3 px-4 gap-3
              rounded-3xl
              border border-white/10
              md:hidden
            "
          >
            {navigationLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => handleSmoothScroll(link.id)}
                className="text-white text-[15px] font-[Manrope] tracking-[-0.02em] hover:opacity-80 transition cursor-pointer w-full text-left"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={handleGetInTouch}
              className="
                bg-[#FFFFFF] text-black
                rounded-[3.875rem] px-7 py-2
                font-[Manrope] font-semibold text-[13px]
                hover:bg-[#f5f5f5]
                transition-all duration-300
                w-full
                text-center
                cursor-pointer
              "
            >
              Get in touch
            </button>
          </div>
        )
      )}
    </nav>
  );
}