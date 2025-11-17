import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  index: number;
  title: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  image: string | StaticImageData;
  image2?: string | StaticImageData;
  gradient: string;
  currentIndex: number;
  totalSections: number;
}

const ScrollSection = ({
  index,
  title,
  subtitle,
  stat,
  statLabel,
  image,
  image2,
  gradient,
  currentIndex,
  totalSections,
}: ScrollSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const imageEl = imageRef.current;

    if (!section || !content || !imageEl) return;

    // Pin section during scroll
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    });

    // Only fade out if not the last section
    if (index < totalSections) {
      // Fade out content when scrolling away
      gsap.fromTo(
        content,
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

      // Scale and fade out image
      gsap.fromTo(
        imageEl,
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
  }, [index, totalSections]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden py-8 md:py-12 lg:py-20"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${gradient} opacity-10`} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div ref={contentRef} className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start w-full max-w-7xl mx-auto">
          
          {/* Header Section - Ideal for + Horizontal Line */}
          <div className="lg:col-span-12 flex items-center gap-4 lg:gap-6 w-full mb-6 lg:mb-12 px-4 lg:px-0">
            {/* Ideal for text */}
            <div 
              className="text-gray-400 font-semibold tracking-[-2%] leading-[32px] whitespace-nowrap"
              style={{
                fontSize: 'clamp(18px, 4vw, 24px)',
                lineHeight: '32px',
                fontFamily: 'Urbanist, sans-serif',
              }}
            >
              Ideal for
            </div>
            
            {/* Horizontal line */}
            <div 
              className="w-full h-[2px] bg-gray-600 hidden lg:block"
              style={{
                maxWidth: '1300px'
              }}
            />
          </div>

          {/* Part 1: Index, Title (and Index Indicator for desktop) */}
          <div 
            className="lg:col-span-5 space-y-6 lg:space-y-12 w-full px-4 lg:px-0"
            style={{
              maxWidth: '450px'
            }}
          >
            <div className="space-y-6 lg:space-y-12">
              {/* Index Number */}
              <div 
                className="text-gray-400 font-semibold tracking-[-3%] leading-[40px]"
                style={{
                  fontSize: 'clamp(18px, 3vw, 22px)',
                  lineHeight: '40px',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                [{index.toString().padStart(2, "0")}]
              </div>

              {/* Title */}
              <h2 
                className="font-bold text-white tracking-[-4%] leading-tight"
                style={{
                  fontSize: 'clamp(28px, 5vw, 42px)',
                  lineHeight: 'clamp(32px, 5vw, 46px)',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                {title}
              </h2>

              {/* Index Indicator for Desktop */}
              <div 
                className="rounded-[72px] bg-gray-800/50 p-4 hidden lg:block"
                style={{
                  width: '144px',
                  height: '40px',
                }}
              >
                <div className="flex items-center gap-2 h-full">
                  {[...Array(totalSections)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i + 1 === currentIndex
                          ? "bg-blue-500 w-12"
                          : "bg-gray-600 w-8"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: Images */}
          <div className="lg:col-span-7 w-full px-4 lg:px-0 flex justify-center lg:justify-start">
            {image2 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full max-w-2xl lg:max-w-none">
                <div 
                  className="glass-card rounded-[32px] border-2 border-white/20 animate-float overflow-hidden bg-[#FBFBFB0D]"
                  style={{ 
                    width: '100%',
                    maxWidth: '734px',
                    height: 'clamp(250px, 35vh, 502px)',
                    maxHeight: '502px'
                  }}
                >
                  <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={734}
                    height={502}
                    priority
                  />
                </div>
                <div 
                  className="glass-card rounded-[32px] border-2 border-white/20 animate-float overflow-hidden bg-[#FBFBFB0D]"
                  style={{ 
                    width: '100%',
                    maxWidth: '734px',
                    height: 'clamp(250px, 35vh, 502px)',
                    maxHeight: '502px',
                    animationDelay: '0.2s'
                  }}
                >
                  <Image
                    src={image2}
                    alt={`${title} testimonial`}
                    className="w-full h-full object-cover"
                    width={734}
                    height={502}
                    priority
                  />
                </div>
              </div>
            ) : (
              <div 
                className="glass-card rounded-[32px] border-2 border-white/20 animate-float overflow-hidden bg-[#FBFBFB0D] w-full"
                style={{ 
                  maxWidth: '734px',
                  height: 'clamp(300px, 40vh, 502px)',
                  maxHeight: '502px'
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  width={734}
                  height={502}
                  priority
                />
              </div>
            )}

            {/* Index Indicator for Mobile/Tablet - Below Images */}
            <div 
              className="rounded-[72px] bg-gray-800/50 p-4 lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2"
              style={{
                width: '144px',
                height: '40px',
              }}
            >
              <div className="flex items-center gap-2 h-full">
                {[...Array(totalSections)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i + 1 === currentIndex
                        ? "bg-blue-500 w-12"
                        : "bg-gray-600 w-8"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Part 3: Stats and State Label */}
          <div 
            className="lg:col-span-5 space-y-2 lg:space-y-4 w-full px-4 lg:px-0 mt-6 lg:mt-0"
            style={{
              maxWidth: '152px'
            }}
          >
            {/* Stat Number */}
            <div 
              className="font-semibold text-white tracking-[-5%] leading-[56px]"
              style={{
                fontSize: 'clamp(48px, 8vw, 64px)',
                lineHeight: '56px',
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              {stat}
            </div>

            {/* Stat Label */}
            <div 
              className="font-semibold text-gray-400 tracking-[-1%] leading-[32px]"
              style={{
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: '32px',
                fontFamily: 'Urbanist, sans-serif',
              }}
            >
              {statLabel}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScrollSection;