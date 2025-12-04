"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ✅ Responsive icon positions
const icons = [
  { id: 1, src: "/icon1.png", className: "top-[10%] left-[5%] sm:top-[10%] sm:left-[8%] md:top-[8%] md:left-[12%]" },
  { id: 2, src: "/icon2.png", className: "top-[14%] right-[6%] sm:top-[12%] sm:right-[10%] md:top-[10%] md:right-[14%]" },
  { id: 3, src: "/icon3.png", className: "top-[38%] right-[3%] sm:top-[40%] sm:right-[5%] md:top-[35%] md:right-[8%]" },
  { id: 4, src: "/icon4.png", className: "bottom-[30%] left-[5%] sm:bottom-[28%] sm:left-[10%] md:bottom-[25%] md:left-[12%]" },
  { id: 5, src: "/icon5.png", className: "bottom-[18%] right-[10%] sm:bottom-[15%] sm:right-[12%] md:bottom-[12%] md:right-[16%]" },
  { id: 6, src: "/icon6.png", className: "bottom-[8%] left-[45%] sm:bottom-[6%] sm:left-[50%] md:bottom-[6%] md:left-[52%]" },
];

// Updated content with 4 lines
const lines = [
  "At Teams 24, we eliminate startup",
  "hiring complexity with precision-",
  "assembled teams. No recruitment",
  "chaos, just immediate execution power.",
];

export default function WhatWeDeliver() {
  const [activeLines, setActiveLines] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 🌀 Enhanced floating animation for icons
  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: -15,
          duration: 2 + (index * 0.3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      }
    });
  }, []);

  // ✨ Scroll-triggered text animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set up scroll trigger for the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Calculate active lines based on scroll progress
          if (self.direction === 1) { // Scrolling down
            if (progress < 0.25) {
              setActiveLines(1);
            } else if (progress < 0.5) {
              setActiveLines(2);
            } else if (progress < 0.75) {
              setActiveLines(3);
            } else {
              setActiveLines(4);
            }
          } else { // Scrolling up
            if (progress > 0.75) {
              setActiveLines(4);
            } else if (progress > 0.5) {
              setActiveLines(3);
            } else if (progress > 0.25) {
              setActiveLines(2);
            } else {
              setActiveLines(1);
            }
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Function to handle icon ref assignment (FIXED)
  const setIconRef = (index: number) => (el: HTMLDivElement | null) => {
    iconsRef.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center font-[Manrope] bg-white"
    >
      <div className="relative w-full lg:max-w-[1388px] min-h-screen lg:rounded-[32px] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 py-16 px-4 sm:px-6 md:px-10">
      {/* 🌀 Floating icons with enhanced floating animation */}
      {icons.map((item, idx) => (
        <div
          key={item.id}
          ref={setIconRef(idx)}
          className={`absolute opacity-70 transition-all duration-300 ${item.className}`}
        >
          <div className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[34px] md:h-[34px]">
            <Image
              src={item.src}
              alt={`icon-${item.id}`}
              width={34}
              height={34}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}

      {/* 🧩 Main Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center text-center gap-6 max-w-[850px] mx-auto">
        {/* Section Heading */}
        <div className="text-gray-800 text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
          What we deliver
        </div>

        {/* Scroll-triggered Text Block */}
        <div className="flex flex-col gap-3 sm:gap-4 text-center w-full">
          {lines.map((line, idx) => (
            <div key={idx} className="relative overflow-hidden">
              {/* Watermark text (always visible) */}
              <p className="text-[20px] sm:text-[28px] md:text-[42px] font-bold text-gray-300 tracking-[-0.03em] leading-[28px] sm:leading-[38px] md:leading-[54px] select-none">
                {line}
              </p>

              {/* Animated black text overlay */}
              <p
                className={`absolute inset-0 text-[20px] sm:text-[28px] md:text-[42px] font-bold tracking-[-0.03em] leading-[28px] sm:leading-[38px] md:leading-[54px] transition-all duration-500 ${
                  idx < activeLines ? "text-gray-900 opacity-100" : "text-gray-300 opacity-0"
                }`}
              >
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}