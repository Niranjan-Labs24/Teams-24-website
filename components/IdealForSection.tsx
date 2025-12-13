"use client";

import { useEffect, useRef } from "react";
import ScrollSection from "./ScrollSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import section1Visual from "@/assets/section1-visual.png";
import candidatesCard from "@/assets/candidates-card.png";
import testimonialCard from "@/assets/testimonial-card.png";
import rolesVisual from "@/assets/roles-visual.png";

gsap.registerPlugin(ScrollTrigger);

const IdealForSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      index: 1,
      title: "Growth-stage startups seeking rapid scale",
      subtitle:
        "Build your core team faster with dedicated talent partners who understand startup velocity.",
      stat: "50+",
      statLabel: "startups hiring",
      desktopMedia: [
        { type: "video" as const, src: "/video/1stcard(L).mp4" }
      ],
      mobileMedia: [
        { type: "video" as const, src: "/video/1stcard(M).mp4" }
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
        { type: "video" as const, src: "/video/secondCard(L).mp4" },
        { type: "image" as const, src: "/video/SecondcardImage(L).png" }
      ],
      mobileMedia: [
        { type: "video" as const, src: "/video/secondCard(M).mp4" },
        { type: "image" as const, src: "/video/SecondCardImage(m).png" }
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
        { type: "video" as const, src: "/video/ThirdCard(L).mp4" }
      ],
      mobileMedia: [
        { type: "video" as const, src: "/video/thirdCard(M).mp4" }
      ],
      gradient: "bg-gradient-orange-pink",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;

    if (!container || !header) return;

    // Pin the header only within the IdealForSection area
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${(sections.length - 1) * 100}%`, 
      pin: header,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="what-we-do">
    <div ref={containerRef} className="relative bg-black min-h-screen">
     <div
  ref={headerRef}
  className="sticky top-0 left-0 right-0 z-40 bg-black 
             pt-24      
             md:pt-28    
             lg:pt-32   
             xl:pt-36  
             pb-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-4">
            <div className="text-white text-sm font-medium tracking-wider">
              Ideal for
            </div>
            <hr className="w-full border-t border-white/30" />
          </div>
        </div>
      </div>

      {/* Scroll Sections */}
      {sections.map((section) => (
        <ScrollSection key={section.index} {...section} totalSections={sections.length} />
      ))}
    </div>
    </section>
  );
};

export default IdealForSection;
