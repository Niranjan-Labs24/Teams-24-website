"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { loadFramerMotion } from "@/lib/animation-loaders";

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
  const [MotionComponent, setMotionComponent] = useState<typeof import("framer-motion").motion.div | null>(null);

  useEffect(() => {
    const loadMotion = async () => {
      const { motion } = await loadFramerMotion();
      setMotionComponent(() => motion.div);
    };
    loadMotion();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getCircularIndex = (index: number): number =>
    (index + cards.length) % cards.length;

  return (
    <section className="bg-white w-full flex justify-center lg:px-6 2xl:px-0">
      <div className="lg:hidden w-full min-h-screen bg-white flex justify-center">
        <div className="w-full relative min-h-screen flex flex-col">
          
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <Image
              src="/background-image.png"
              alt="Background"
              fill
              priority
              quality={90}
              className="object-cover"
            />
          
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-8 h-full">
          
              <h1 
                className="font-manrope font-bold text-[28px] leading-[28px] tracking-[-0.06em] text-white text-center w-[330px] mb-4"
              >
                Flexibility of a freelancer with commitment of an employee
              </h1>
              
          
              <p className="font-manrope font-medium text-[16px] leading-[24px] text-gray-200 text-center mb-6">
                Hiring can be as easier as shopping
              </p>
            
              <button 
                onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
                className="px-8 py-4 bg-white text-black rounded-2xl font-manrope font-medium text-[18px] leading-[28px] hover:bg-gray-200 transition-all duration-300 shadow-lg mb-3"
              >
                Build your team
              </button>
              
              
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/logo5.png"
                  alt="Logo"
                  width={14}
                  height={14}
                  className="shrink-0"
                />
                <p className="font-manrope font-medium text-sm leading-[20px] text-gray-200 text-center">
                  Book a free discovery call
                </p>
              </div>
 
              <div className="relative w-full h-[300px] flex items-center justify-center overflow-visible">
                {cards.map((card, i) => {
                  const circularIndex = getCircularIndex(currentIndex - i);
                  let x = 0,
                    scale = 1,
                    opacity = 1,
                    zIndex = 10;
 
                  if (circularIndex === 0) {
                    x = -200; 
                    scale = 0.8;
                    opacity = 0.6;
                    zIndex = 1;
                  } else if (circularIndex === 1) {
                    x = 0;
                    scale = 1;
                    opacity = 1;
                    zIndex = 10;
                  } else if (circularIndex === 2) {
                    x = 200; 
                    scale = 0.8;
                    opacity = 0.6;
                    zIndex = 1;
                  }
 
                  if (MotionComponent) {
                    return (
                      <MotionComponent
                        key={i}
                        animate={{ x, scale, opacity, zIndex }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute w-[200px] h-[250px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-xl"
                      >
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="object-cover"
                          priority={i === 0}
                          quality={80}
                          sizes="200px"
                        />
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
                      className="absolute w-[200px] h-[250px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-xl"
                    >
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={i === 0}
                        quality={80}
                        sizes="200px"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center mt-8">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 w-fit">
                  {cards.map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-full transition-all duration-300 ${
                        currentIndex === i ? "w-8 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="hidden lg:block relative w-full lg:max-w-[86rem] lg:h-[57rem] lg:mt-7 lg:rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/background-image.png"
            alt="Background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-between px-20">
          <div className="flex-1 max-w-[44rem] space-y-8">
            <h1 className="text-[4rem] font-manrope font-bold leading-[1.125] tracking-[-0.02em] text-white">
              Flexibility of a freelancer <br /> with commitment of an employee
            </h1>
            
          
            <p className="font-manrope font-medium text-base leading-[1.5] text-gray-300">
              Hiring can be as easier as shopping
            </p>


            <div className="flex flex-col items-start gap-4 pt-8">
              <button 
                onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
                className="px-8 py-4 bg-white text-black rounded-2xl font-manrope font-medium text-lg leading-[1.55] hover:bg-gray-200 transition-all duration-300 shadow-lg"
              >
                Build your team
              </button>
              
              <div className="flex items-center gap-3 max-w-[18rem]">
                <Image
                  src="/logo5.png"
                  alt="Logo"
                  width={14}
                  height={14}
                  className="shrink-0"
                />
                <p className="font-manrope font-medium text-sm leading-[1.4] text-gray-300">
                  Book a free discovery call
                </p>
              </div>
            </div>
          </div>

        
          <div className="flex-1 flex justify-end relative">
           
         
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
               <div className="inline-flex flex-col items-center gap-2 px-2 py-3 rounded-full border border-white/10 bg-white/5 h-fit">
                {cards.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      currentIndex === i ? "h-8 w-1.5 bg-white" : "h-1.5 w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            
            <div className="flex flex-col items-center justify-center relative h-[43.75rem] w-[22rem] overflow-visible mr-24">
              {cards.map((card, i) => {
                const circularIndex = getCircularIndex(currentIndex - i);
                let y = 0,
                  scale = 1,
                  opacity = 1,
                  zIndex = 10;

                if (circularIndex === 0) {
                  y = 460;
                  scale = 0.85;
                  opacity = 0.7;
                  zIndex = 1;
                } else if (circularIndex === 1) {
                  y = 0; 
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                } else if (circularIndex === 2) {
                  y = -460;
                  scale = 0.85;
                  opacity = 0.7;
                  zIndex = 1;
                }

                if (MotionComponent) {
                  return (
                    <MotionComponent
                      key={i}
                      animate={{ y, scale, opacity, zIndex }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute w-[24rem] h-[30rem] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl"
                    >
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={i === 0}
                        quality={80}
                        sizes="384px"
                      />
                    </MotionComponent>
                  );
                }

                return (
                  <div
                    key={i}
                    style={{
                      transform: `translateY(${y}px) scale(${scale})`,
                      opacity,
                      zIndex,
                      transition: "all 0.8s ease-in-out",
                    }}
                    className="absolute w-[24rem] h-[30rem] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl"
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      quality={80}
                      sizes="384px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
