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
      image: section1Visual,
      gradient: "bg-gradient-blue-purple",
    },
    {
      index: 2,
      title: "Visionary founders ready to build without boundaries",
      subtitle:
        "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team.",
      stat: "70%",
      statLabel: "hiring success",
      image: candidatesCard,
      image2: testimonialCard,
      gradient: "bg-gradient-cyan-yellow",
    },
    {
      index: 3,
      title: "Entrepreneurs who value speed over bureaucracy",
      subtitle:
        "Skip the endless meetings and paperwork. Get matched with pre-vetted talent in days, not months.",
      stat: "3x",
      statLabel: "faster to hire",
      image: rolesVisual,
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
      <div ref={headerRef} className="top-10 left-0 right-0 z-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center">
            <div className="text-white text-muted-foreground text-sm font-medium tracking-wider mr-4">
              Ideal for
            </div>
            <hr className="border-t border-white" />
            {/* <div className="flex-grow h-px bg-gradient-to-r from-white/30 to-transparent"></div> */}
          </div>
        </div>
      </div>

      {/* Scroll Sections */}
      {sections.map((section) => (
        <ScrollSection key={section.index} {...section} />
      ))}
    </div>
    </section>
  );
};

export default IdealForSection;
