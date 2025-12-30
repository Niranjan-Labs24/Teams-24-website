"use client";

import { useState, useEffect } from "react";
import { StaticImageData } from 'next/image';
import { VideoPlayer } from './ui/video-player';
import { cn } from "@/lib/utils";

interface MediaAsset {
  type: 'video' | 'image';
  src: string | StaticImageData;
  poster?: string;
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
  activeIndex: number;
  sectionProgress: number;
}

const Counter = ({ value, active }: { value: string, active: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericMatch = value.match(/\d+/);
  const numericPart = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    if (!active) {
      setDisplayValue(0);
      return;
    }

    const start = 0;
    const end = numericPart;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Power2 easeOut
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      
      const currentCount = Math.floor(easeProgress * end);
      setDisplayValue(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [active, numericPart]);

  return <span>{displayValue}{suffix}</span>;
};

const ScrollSection = ({
  index,
  totalSections,
  title,
  stat,
  statLabel,
  desktopMedia,
  mobileMedia,
  gradient,
  activeIndex,
  sectionProgress,
}: ScrollSectionProps) => {
  const isActive = activeIndex === index;

  const renderVisual = (mediaItems: MediaAsset[], isMobile: boolean = false) => {
    if (!mediaItems || mediaItems.length === 0) return null;

    if (mediaItems.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-2 sm:gap-4 aspect-video w-full">
          {mediaItems.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 overflow-hidden w-full h-full"
            >
              {item.type === 'video' ? (
                <VideoPlayer
                  src={item.src as string}
                  poster={item.poster}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img
                  src={typeof item.src === 'string' ? item.src : (item.src as StaticImageData).src}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      );
    }

    
    const item = mediaItems[0];
    return (
      <div className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 overflow-hidden aspect-video w-full">
        {item.type === 'video' ? (
          <VideoPlayer
            src={item.src as string}
            poster={item.poster}
            className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={typeof item.src === 'string' ? item.src : (item.src as StaticImageData).src}
            alt={title}
            className="w-full h-auto rounded-xl sm:rounded-2xl"
          />
        )}
      </div>
    );
  };
  
  const renderProgressIndicator = () => (
    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 w-fit">
      {Array.from({ length: totalSections }).map((_, i) => {
        const indexVal = i + 1;
        const isCurrent = indexVal === activeIndex;
        const isCompleted = indexVal < activeIndex;

       
        const widthClass = isCurrent ? "w-10 sm:w-16" : "w-2";
        
        return (
          <div
            key={i}
            className={`h-2 rounded-full bg-white/30 overflow-hidden transition-all duration-300 ${widthClass}`}
          >
          
            {(isCurrent || isCompleted) && (
                 <div 
                    className="h-full bg-white transition-all duration-300 ease-linear"
                    style={{ 
                        width: isCompleted ? '100%' : (isCurrent ? `${sectionProgress * 100}%` : '0%') 
                    }}
                 />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      className="relative h-screen w-screen flex-shrink-0 flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-24 lg:pt-36"
    >
     
      <div
        className={`absolute inset-0 ${gradient} opacity-20 blur-3xl`}
        style={{ transform: "scale(1.5)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full flex-1">
      
        <div className="hidden lg:block space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="text-white text-muted-foreground text-lg sm:text-xl font-mono">
                [{index.toString().padStart(2, "0")}]
              </div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
            </div>
            
           
             <div className="pt-4 pb-4">
               {renderProgressIndicator()}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-col">
                <div className="text-white text-4xl sm:text-5xl font-bold">
                  <Counter value={stat} active={isActive} />
                </div>
                <div className="text-white text-base sm:text-lg text-muted-foreground">
                  {statLabel}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-3 sm:space-y-4 w-full">
          {/* Title Section */}
          <div className="space-y-2 sm:space-y-3">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-white text-muted-foreground text-base sm:text-lg font-mono">
                [{index.toString().padStart(2, "0")}]
              </div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                {title}
              </h2>
            </div>
           
             <div className="pt-2 pb-2">
               {renderProgressIndicator()}
            </div>
          </div>

         
          <div className="relative">
            {renderVisual(mobileMedia, true)}
          </div>

         
          <div className="space-y-2 sm:space-y-3">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex flex-col">
                <div className="text-white text-4xl sm:text-5xl font-bold">
                  <Counter value={stat} active={isActive} />
                </div>
                <div className="text-white text-base sm:text-lg text-muted-foreground">
                  {statLabel}
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="hidden lg:block relative">
           {renderVisual(desktopMedia, false)}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
