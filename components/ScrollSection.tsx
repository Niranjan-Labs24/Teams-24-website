"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImageData } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface MediaAsset {
  type: 'video' | 'image';
  src: string | StaticImageData;
}

interface ScrollSectionProps {
  index: number;
  totalSections: number;
  title: string;
  stat: string;
  statLabel: string;
  desktopMedia: MediaAsset[];
  mobileMedia: MediaAsset[];
  gradient: string;
}

const ScrollSection = ({
  index,
  totalSections,
  title,
  stat,
  statLabel,
  desktopMedia,
  mobileMedia,
  gradient,
}: ScrollSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const desktopImageRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const desktopContent = desktopContentRef.current;
    const mobileContent = mobileContentRef.current;
    const desktopImage = desktopImageRef.current;
    const mobileImage = mobileImageRef.current;

    if (!section) return;

    // Pin section during scroll
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      onEnter: () => playVideos(),
      onEnterBack: () => playVideos(),
    });

    const playVideos = () => {
      // Dynamically find all video elements within this section and play them
      const videos = section.querySelectorAll('video');
      videos.forEach((video) => {
        video.currentTime = 0;
        video.play().catch(() => {});
      });
    };

    // Fade out desktop content when scrolling away
    if (desktopContent) {
      gsap.fromTo(
        desktopContent,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );
    }

    // Fade out mobile content when scrolling away
    if (mobileContent) {
      gsap.fromTo(
        mobileContent,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );
    }

    // Scale and fade out desktop image
    if (desktopImage) {
      gsap.fromTo(
        desktopImage,
        { scale: 1, opacity: 1 },
        {
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );
    }

    // Scale and fade out mobile image
    if (mobileImage) {
      gsap.fromTo(
        mobileImage,
        { scale: 1, opacity: 1 },
        {
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderVisual = (mediaItems: MediaAsset[], isMobile: boolean = false) => {
    if (!mediaItems || mediaItems.length === 0) return null;

    // Grid layout for 2 items
    if (mediaItems.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {mediaItems.map((item, idx) => (
            <div 
              key={idx}
              className={`glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 ${
                isMobile && index === 2 ? 'h-[250px] sm:h-[300px]' : ''
              }`}
              style={{ animationDelay: idx === 1 ? '0.2s' : '0s' }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src as string}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={typeof item.src === 'string' ? item.src : item.src.src}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      );
    }

    // Single item
    const item = mediaItems[0];
    return (
      <div className={`glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2`}>
        {item.type === 'video' ? (
          <video
            src={item.src as string}
            className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={typeof item.src === 'string' ? item.src : item.src.src}
            alt={title}
            className="w-full h-auto rounded-xl sm:rounded-2xl"
          />
        )}
      </div>
    );
  };
  
  const renderProgressIndicator = () => (
    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 w-fit">
      {Array.from({ length: totalSections }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i + 1 === index ? "w-8 sm:w-12 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${gradient} opacity-20 blur-3xl`}
        style={{ transform: "scale(1.5)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content - Desktop */}
        <div ref={desktopContentRef} className="hidden lg:block space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-white text-muted-foreground text-sm sm:text-lg font-mono">
                [{index.toString().padStart(2, "0")}]
              </div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
            </div>
            
             {/* Progress Indicator */}
             <div className="pt-2">
              {renderProgressIndicator()}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-col">
                <div className="text-white text-4xl sm:text-5xl font-bold">
                  {stat}
                </div>
                <div className="text-white text-base sm:text-lg text-muted-foreground">
                  {statLabel}
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div ref={mobileContentRef} className="lg:hidden space-y-6 w-full">
          {/* Title Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-white text-muted-foreground text-sm sm:text-lg font-mono">
                [{index.toString().padStart(2, "0")}]
              </div>
              <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
                {title}
              </h2>
            </div>
             {/* Progress Indicator */}
             <div className="pt-1">
              {renderProgressIndicator()}
            </div>
          </div>

          {/* Media Section */}
          <div ref={mobileImageRef} className="relative">
            {renderVisual(mobileMedia, true)}
          </div>

          {/* Stat Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-col">
                <div className="text-white text-4xl sm:text-5xl font-bold">
                  {stat}
                </div>
                <div className="text-white text-base sm:text-lg text-muted-foreground">
                  {statLabel}
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Right Image(s) - Desktop */}
        <div ref={desktopImageRef} className="hidden lg:block relative">
           {renderVisual(desktopMedia, false)}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;