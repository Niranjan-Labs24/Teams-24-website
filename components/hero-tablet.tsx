"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { loadFramerMotion } from "@/lib/animation-loaders";

const cards = [
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

export default function HeroTablet() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [MotionComponent, setMotionComponent] = useState<typeof import("framer-motion").motion.div | null>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { motion } = await loadFramerMotion();
      setMotionComponent(() => motion.div);
    };
    initGSAP();

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCircularIndex = (index: number) => {
    return ((index % cards.length) + cards.length) % cards.length;
  };

  return (
    <div className="hidden md:block lg:hidden w-full min-h-screen bg-white">
      <div className="w-full relative min-h-screen flex flex-col items-center">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
          <Image
            src="/background-image.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-12 pt-36 pb-20 h-full gap-10 w-full">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-manrope font-bold text-5xl md:text-6xl leading-[1.05] tracking-[-0.06em] text-white text-center w-full max-w-[650px]">
              Flexibility of a freelancer with commitment of an employee
            </h1>
            <p className="font-manrope font-medium text-xl leading-[1.4] text-gray-200 text-center">
              Hiring can be as easier as shopping
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
              className="px-10 py-5 bg-white text-black rounded-2xl font-manrope font-semibold text-xl hover:bg-gray-200 transition-all duration-300 shadow-xl"
            >
              Build your team
            </button>
            <div className="flex items-center gap-3">
              <Image src="/logo5.png" alt="Logo" width={18} height={18} />
              <p className="font-manrope font-medium text-base text-gray-200">
                Book a free discovery call
              </p>
            </div>
          </div>

          {/* Carousel with Wide Spread */}
          <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible mt-10">
            {cards.map((card, i) => {
              const circularIndex = getCircularIndex(currentIndex - i);
              let x = 0, scale = 1, opacity = 1, zIndex = 10;

              if (circularIndex === 0) {
                x = -320; // Wide spread to left
                scale = 0.8;
                opacity = 0.5;
                zIndex = 1;
              } else if (circularIndex === 1) {
                x = 0;
                scale = 1.1; // Larger center card
                opacity = 1;
                zIndex = 10;
              } else if (circularIndex === 2) {
                x = 320; // Wide spread to right
                scale = 0.8;
                opacity = 0.5;
                zIndex = 1;
              }

              const cardContent = (
                <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      quality={90}
                      sizes="400px"
                    />
                    {/* Text Content */}
                    <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="font-manrope text-white/60 text-sm mb-2">
                        {card.subtitle}
                      </p>
                      <h2 className="font-manrope text-white text-xl font-semibold leading-tight mb-3">
                        {card.title}
                      </h2>
                      <span className="inline-block px-3 py-1.5 bg-white/20 text-white/80 rounded-full text-xs font-medium backdrop-blur-sm">
                        {card.tag}
                      </span>
                    </div>
                </div>
              );

              if (MotionComponent) {
                return (
                  <MotionComponent
                    key={i}
                    animate={{ x, scale, opacity, zIndex }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-[300px] aspect-[3/4]"
                  >
                    {cardContent}
                  </MotionComponent>
                );
              }

              return (
                <div
                  key={i}
                  style={{
                    transform: `translateX(${x}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: "all 0.8s ease-in-out",
                  }}
                  className="absolute w-[300px] aspect-[3/4]"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 relative z-30">
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full border border-white/10 bg-white/5 w-fit">
              {cards.map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-white" : "w-2.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
