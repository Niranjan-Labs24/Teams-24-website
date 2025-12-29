"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ScrollSection from "./ScrollSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const IdealForSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  

  const [activeIndex, setActiveIndex] = useState(1);
  const [sectionProgress, setSectionProgress] = useState(0);

 
  const lastUpdateTime = useRef(0);
  const UPDATE_THROTTLE = 100; 
  const sections = [
    {
      index: 1,
      title: "Growth-stage startups seeking rapid scale",
      subtitle:
        "Build your core team faster with dedicated talent partners who understand startup velocity.",
      stat: "50+",
      statLabel: "startups hiring",
      desktopMedia: [
        { type: "video" as const, src: "/video/1stcard(L).mp4", poster: "/video/idealposter/indx1.png" }
      ],
      mobileMedia: [
        { type: "video" as const, src: "/video/1stcard(L).mp4", poster: "/video/idealposter/indx1.png" }
      ],
      gradient: "bg-gradient-blue-purple",
    },
    {
      index: 2,
      title: "Visionary founders ready to build without boundaries",
      subtitle:
        "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team.",
      stat: "70%",
      statLabel: "hiring success",
      desktopMedia: [
        { type: "video" as const, src: "/video/secondCard(L).mp4", poster: "/video/idealposter/indx2.png" },
        { type: "image" as const, src: "/video/SecondcardImage(L).png" }
      ],
      mobileMedia: [
        { type: "video" as const, src: "/video/secondCard(L).mp4", poster: "/video/idealposter/indx2.png" },
        { type: "image" as const, src: "/video/SecondcardImage(L).png" }
      ],
      gradient: "bg-gradient-cyan-yellow",
    },
    {
      index: 3,
      title: "Entrepreneurs who value speed over bureaucracy",
      subtitle:
        "Skip the endless meetings and paperwork. Get matched with pre-vetted talent in days, not months.",
      stat: "3x",
      statLabel: "faster to hire",
      desktopMedia: [
        { type: "video" as const, src: "/video/ThirdCard(L).mp4", poster: "/video/idealposter/indx3.png" }
      ],
      mobileMedia: [
        { type: "video" as const, src: "/video/ThirdCard(L).mp4", poster: "/video/idealposter/indx3.png" }
      ],
      gradient: "bg-gradient-orange-pink",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const totalSections = sections.length;
    
    const scrollTrigger = ScrollTrigger.create({
      id: "ideal-for-scroll",
      trigger: container,
      start: "top top",
      end: `+=${totalSections * 100}%`, 
      pin: true,
      scrub: true, 
      onUpdate: (self) => {
        const p = Math.min(0.9999, Math.max(0, self.progress));
        const totalProgress = p * totalSections;
        
        let currentIndex = Math.floor(totalProgress) + 1;
        const localProgress = (totalProgress % 1);
        
        
        if (track) {
            const xPos = -(currentIndex - 1) * 100;
            track.style.transform = `translateX(${xPos}vw)`; 
        }
        
        
        const now = Date.now();
        if (now - lastUpdateTime.current >= UPDATE_THROTTLE) {
          setActiveIndex(currentIndex);
          setSectionProgress(localProgress);
          lastUpdateTime.current = now;
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [sections.length]);

  return (
    <section id="what-we-do" ref={containerRef} className="relative bg-black h-screen overflow-hidden">

        <div className="absolute top-0 left-0 right-0 z-40 px-6 lg:px-12 pt-10 lg:pt-14 pointer-events-none">
            <div className="container mx-auto">
            <div className="flex flex-col gap-4">
                <div className="text-white text-sm font-medium tracking-wider">
                Ideal for
                </div>
                <hr className="w-full border-t border-white/30" />
            </div>
            </div>
        </div>

        
        <div 
            ref={trackRef}
            className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
            style={{ width: `${sections.length * 100}vw` }} 
        >
            {sections.map((section) => (
                <ScrollSection 
                    key={section.index} 
                    {...section} 
                    totalSections={sections.length} 
                    activeIndex={activeIndex}
                    sectionProgress={sectionProgress}
                />
            ))}
        </div>
    </section>
  );
};

export default IdealForSection;
