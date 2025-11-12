
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Card {
  img: string;
  subtitle: string;
  title: string;
  tag: string;
}

const cards: Card[] = [
  {
    img: "/engineer.png",
    subtitle: "Specflicks",
    title: "Hire a Full-Stack Engineer in 2 weeks",
    tag: "5X Faster to hire",
  },
  {
    img: "/designer.png",
    subtitle: "PixelWorld",
    title: "UI/UX Designers ready in 10 days",
    tag: "80% Interview rate",
  },
  {
    img: "/marketer.png",
    subtitle: "Brandify",
    title: "Hire Digital Marketers instantly",
    tag: "Top Rated Talent",
  },
];

export default function HeroSection(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getCircularIndex = (index: number): number =>
    (index + cards.length) % cards.length;

  return (
    <section 
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: "url('/background-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* LEFT TEXT CONTENT */}
      <div className="flex-1 max-w-[707px] space-y-8 mt-20 lg:mt-0 text-center lg:text-left relative z-10">
        {/* Main Heading */}
        <h1 className="text-[40px] lg:text-[64px] font-manrope font-bold leading-[56px] lg:leading-[72px] tracking-[-0.02em] text-white">
          Flexibility of a freelancer <br /> with commitment of an employee
        </h1>
        
        {/* Subtitle */}
        <p className="font-manrope font-medium text-[22px] leading-[32px] tracking-[-0.02em] text-white opacity-100">
          Hiring can be as easier as shopping
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-8 pt-8">
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-manrope font-medium text-[18px] leading-[28px] hover:bg-gray-200 transition-all duration-300 shadow-lg">
            Build your team
          </button>
          <p className="font-manrope font-medium text-[16px] leading-[24px] text-gray-300 flex items-center gap-2">
            <span className="text-lg">☎️</span> Book a free discovery call
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - CAROUSEL */}
      <div className="flex-1 w-full mt-16 lg:mt-0 flex justify-center lg:justify-end relative z-10">

        {/* 🟩 Vertical Scroll Indicator (Desktop only) */}
        <div className="hidden lg:flex flex-col absolute right-[-30px] top-1/2 -translate-y-1/2 items-center gap-2 z-20">
          {cards.map((_, i) => (
            <motion.div
              key={i}
              className="w-[4px] h-[40px] rounded-full bg-white/20 overflow-hidden"
            >
              <motion.div
                animate={{
                  height: currentIndex === i ? "100%" : "0%",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full bg-white"
              />
            </motion.div>
          ))}
        </div>

        {/* 🟦 Horizontal Indicator (Mobile + Tablet only) */}
        <div className="flex lg:hidden justify-center gap-2 absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-20">
          {cards.map((_, i) => (
            <motion.div
              key={i}
              className="h-[4px] w-[40px] rounded-full bg-white/20 overflow-hidden"
            >
              <motion.div
                animate={{
                  width: currentIndex === i ? "100%" : "0%",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full bg-white"
              />
            </motion.div>
          ))}
        </div>

        {/* 🖥️ Desktop Carousel - BOTTOM → MIDDLE → TOP */}
        <div className="hidden lg:flex flex-col items-center justify-center relative h-[700px] w-[350px] overflow-visible">
          {cards.map((card, i) => {
            const circularIndex = getCircularIndex(currentIndex - i);
            let y = 0,
              scale = 1,
              opacity = 1,
              zIndex = 10;

            // 🟢 BOTTOM → MIDDLE → TOP FLOW
            if (circularIndex === 0) {
              y = 340; // Bottom position (next card)
              scale = 0.85;
              opacity = 0.7;
              zIndex = 1;
            } else if (circularIndex === 1) {
              y = 0; // Middle position (current active card)
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (circularIndex === 2) {
              y = -340; // Top position (previous card)
              scale = 0.85;
              opacity = 0.7;
              zIndex = 1;
            }

            return (
              <motion.div
                key={i}
                animate={{ y, scale, opacity, zIndex }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-[280px] h-[340px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority={circularIndex === 1}
                />
              </motion.div>
            );
          })}
        </div>

        {/* 📱 Mobile & Tablet Carousel - LEFT → MIDDLE → RIGHT */}
        <div className="flex lg:hidden items-center justify-center relative w-full h-[380px] overflow-visible">
          {cards.map((card, i) => {
            const circularIndex = getCircularIndex(currentIndex - i);
            let x = 0,
              scale = 1,
              opacity = 1,
              zIndex = 10;

            // 🟢 LEFT → MIDDLE → RIGHT FLOW
            if (circularIndex === 0) {
              x = -220; // Left position (previous card)
              scale = 0.8;
              opacity = 0.7;
              zIndex = 5;
            } else if (circularIndex === 1) {
              x = 0; // Middle position (current active card)
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (circularIndex === 2) {
              x = 220; // Right position (next card)
              scale = 0.8;
              opacity = 0.7;
              zIndex = 5;
            }

            return (
              <motion.div
                key={i}
                animate={{ x, scale, opacity, zIndex }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-[200px] h-[280px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-xl"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority={circularIndex === 1}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}