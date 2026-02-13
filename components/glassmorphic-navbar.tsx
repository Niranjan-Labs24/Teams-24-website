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
    window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-4 md:top-6 left-1/2 -translate-x-1/2
        z-[9999]
        flex items-center justify-between
        rounded-[100px]
        border border-white/10
        backdrop-blur-[20px]
        px-4 md:px-6 lg:px-7 py-2.5
        transition-all duration-500 ease-in-out
        w-[95%] md:w-[92%] max-w-7xl
        opacity-100 translate-y-0
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
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-[#0A0B1A] border border-white/10 rounded-2xl p-4 min-w-[220px] shadow-2xl backdrop-blur-xl">
                {link.id === "for-companies" ? (
                  <div className="flex flex-col gap-2">
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider px-2 mb-1">Hire</p>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        "Full Stack Developer",
                        "Frontend Developer",
                        "Backend Developer",
                        "Mobile App Developer",
                        "UI/UX Designer",
                        "DevOps Engineer",
                        "Data Scientist",
                        "Product Manager"
                      ].map((role, index) => (
                        <Link
                          key={index}
                          href={`/hire/${role.toLowerCase().replace(/ /g, "-")}`}
                          className="flex items-center px-3 py-2 rounded-xl hover:bg-white/10 transition-colors text-[14px] text-white/90 font-medium text-left whitespace-nowrap"
                        >
                          {role}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href="https://careers.teams24.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-[14px] text-white/90 font-medium whitespace-nowrap"
                  >
                    Careers
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
                absolute top-[5rem] right-0
                w-[min(90vw,320px)]
                flex flex-col items-start
                py-6 px-6 gap-6
                rounded-[32px]
                border border-white/10
                md:hidden
                max-h-[80vh] overflow-y-auto
              "
              style={{
                background: "linear-gradient(135deg, #1d3372 0%, #252b57 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              {navigationLinks.map((link, i) => (
                <div key={i} className="w-full">
                  {link.id === "for-companies" ? (
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider px-2">Hire</p>
                      <div className="flex flex-col gap-1 pl-2">
                        {[
                          "Full Stack Developer",
                          "Frontend Developer",
                          "Backend Developer",
                          "Mobile App Developer",
                          "UI/UX Designer",
                          "DevOps Engineer",
                          "Data Scientist",
                          "Product Manager"
                        ].map((role, index) => (
                          <Link
                            key={index}
                            href={`/hire/${role.toLowerCase().replace(/ /g, "-")}`}
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 text-[14px] py-1 hover:text-white transition-colors"
                          >
                            {role}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        handleSmoothScroll(link.id);
                        setIsOpen(false);
                      }}
                      className="text-white text-[15px] font-[Manrope] tracking-[-0.02em] hover:opacity-80 transition cursor-pointer w-full text-left py-2"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
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
                Hire your dream team
              </button>
            </MotionComponents.motion.div>
          )}
        </MotionComponents.AnimatePresence>
      ) : (
        isOpen && (
          <div
            className="
              absolute top-[5rem] right-0
              w-[min(90vw,320px)]
              flex flex-col items-start
              py-6 px-6 gap-6
              rounded-[32px]
              border border-white/10
              md:hidden
              max-h-[80vh] overflow-y-auto
            "
            style={{
              background: "linear-gradient(135deg, #1d3372 0%, #252b57 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            {navigationLinks.map((link, i) => (
              <div key={i} className="w-full">
                {link.id === "for-companies" ? (
                  <div className="flex flex-col gap-2 w-full">
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider px-2">Hire</p>
                    <div className="flex flex-col gap-1 pl-2">
                      {[
                        "Full Stack Developer",
                        "Frontend Developer",
                        "Backend Developer",
                        "Mobile App Developer",
                        "UI/UX Designer",
                        "DevOps Engineer",
                        "Data Scientist",
                        "Product Manager"
                      ].map((role, index) => (
                        <Link
                          key={index}
                          href={`/hire/${role.toLowerCase().replace(/ /g, "-")}`}
                          onClick={() => setIsOpen(false)}
                          className="text-white/80 text-[14px] py-1 hover:text-white transition-colors"
                        >
                          {role}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleSmoothScroll(link.id);
                      setIsOpen(false);
                    }}
                    className="text-white text-[15px] font-[Manrope] tracking-[-0.02em] hover:opacity-80 transition cursor-pointer w-full text-left py-2"
                  >
                    {link.name}
                  </button>
                )}
              </div>
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
              Hire your dream team
            </button>
          </div>
        )
      )}
    </nav>
  );
}