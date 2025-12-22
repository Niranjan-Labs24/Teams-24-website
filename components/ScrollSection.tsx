"use client";

import { StaticImageData } from 'next/image';

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
  activeIndex: number;
  sectionProgress: number;
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
  activeIndex,
  sectionProgress,
}: ScrollSectionProps) => {

  const renderVisual = (mediaItems: MediaAsset[], isMobile: boolean = false) => {
    if (!mediaItems || mediaItems.length === 0) return null;

    
    if (mediaItems.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {mediaItems.map((item, idx) => (
            <div 
              key={idx}
              className={`glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 ${
                isMobile ? 'max-h-[12rem] sm:max-h-[16rem]' : ''
              }`}
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

    // Single item
    const item = mediaItems[0];
    return (
      <div className={`glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 ${
        isMobile ? 'max-h-[16rem] sm:max-h-[20rem]' : ''
      }`}>
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

        // Width logic:
        const widthClass = isCurrent ? "w-10 sm:w-16" : "w-2";
        
        return (
          <div
            key={i}
            className={`h-2 rounded-full bg-white/30 overflow-hidden transition-all duration-300 ${widthClass}`}
          >
             {/* Fill part */}
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
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${gradient} opacity-20 blur-3xl`}
        style={{ transform: "scale(1.5)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full flex-1">
        {/* Left Content - Desktop */}
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
            
             {/* Progress Indicator */}
             <div className="pt-4 pb-4">
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
             {/* Progress Indicator */}
             <div className="pt-2 pb-2">
               {renderProgressIndicator()}
            </div>
          </div>

          {/* Media Section */}
          <div className="relative">
            {renderVisual(mobileMedia, true)}
          </div>

          {/* Stat Section */}
          <div className="space-y-2 sm:space-y-3">
            <div className="space-y-1 sm:space-y-2">
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
        <div className="hidden lg:block relative">
           {renderVisual(desktopMedia, false)}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
