"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ✅ Responsive icon positions
const icons = [
  { id: 1, src: "/icon1.png", className: "top-[10%] left-[5%] sm:top-[10%] sm:left-[8%] md:top-[8%] md:left-[12%]" },
  { id: 2, src: "/icon2.png", className: "top-[14%] right-[6%] sm:top-[12%] sm:right-[10%] md:top-[10%] md:right-[14%]" },
  { id: 3, src: "/icon3.png", className: "top-[38%] right-[3%] sm:top-[40%] sm:right-[5%] md:top-[35%] md:right-[8%]" },
  { id: 4, src: "/icon4.png", className: "bottom-[30%] left-[5%] sm:bottom-[28%] sm:left-[10%] md:bottom-[25%] md:left-[12%]" },
  { id: 5, src: "/icon5.png", className: "bottom-[18%] right-[10%] sm:bottom-[15%] sm:right-[12%] md:bottom-[12%] md:right-[16%]" },
  { id: 6, src: "/icon6.png", className: "bottom-[8%] left-[45%] sm:bottom-[6%] sm:left-[50%] md:bottom-[6%] md:left-[52%]" },
];

const lines = [
  "At Teams 24, we eliminate startup hiring complexity with precision-assembled teams.",
  "No recruitment chaos, just immediate execution power.",
];

export default function WhatWeDeliver() {
  const [lineProgress, setLineProgress] = useState<number[]>([0, 0]);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 🔁 Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          startLineByLineAnimation();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  // ✨ Animate each line one by one
  const startLineByLineAnimation = () => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setLineProgress((prev) => {
            const updated = [...prev];
            updated[index] = i;
            return updated;
          });
          i++;
          if (i >= line.length) clearInterval(interval);
        }, 25);
      }, index * 1200);
    });
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center font-[Manrope] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 py-16 px-4 sm:px-6 md:px-10"
    >
      {/* 🌀 Floating icons with subtle floating animation */}
      {icons.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute opacity-70 transition-all duration-300 animate-float-slow delay-[${idx * 500}ms] ${item.className}`}
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
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-[850px] mx-auto">
        {/* Section Heading */}
        <div className="text-gray-800 text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
          What we deliver
        </div>

        {/* Animated Text Block */}
        <div className="flex flex-col gap-4 sm:gap-6 text-center w-full">
          {lines.map((line, idx) => (
            <div key={idx} className="relative overflow-hidden">
              {/* Watermark text */}
              <p className="text-[20px] sm:text-[28px] md:text-[42px] font-bold text-gray-300 tracking-[-0.03em] leading-[28px] sm:leading-[38px] md:leading-[54px] select-none whitespace-pre-line">
                {line}
              </p>

              {/* Animated black text overlay */}
              <p
                className="absolute inset-0 text-[20px] sm:text-[28px] md:text-[42px] font-bold text-gray-900 tracking-[-0.03em] leading-[28px] sm:leading-[38px] md:leading-[54px] whitespace-pre-line overflow-hidden"
                style={{
                  maskImage: `linear-gradient(to right, black ${
                    (lineProgress[idx] / line.length) * 100
                  }%, transparent ${(lineProgress[idx] / line.length) * 100}%)`,
                  WebkitMaskImage: `linear-gradient(to right, black ${
                    (lineProgress[idx] / line.length) * 100
                  }%, transparent ${(lineProgress[idx] / line.length) * 100}%)`,
                }}
              >
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
