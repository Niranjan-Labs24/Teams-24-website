import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImageData } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  index: number;
  title: string;
  stat: string;
  statLabel: string;
  image: StaticImageData;
  image2?: StaticImageData;
  gradient: string;
}

const ScrollSection = ({
  index,
  title,
  stat,
  statLabel,
  image,
  image2,
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
    });

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
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {title}
              </h2>
            </div>
          </div>

          <div className="space-y-2">
            <div className="w-12 sm:w-16 h-1 bg-primary rounded-full" />
            <div className="flex items-baseline gap-2">
              <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                {stat}
              </div>
              <div className="text-white text-base sm:text-lg text-muted-foreground">
                {statLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div ref={mobileContentRef} className="lg:hidden space-y-8 w-full">
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
          </div>

          {/* Image Section */}
          <div ref={mobileImageRef} className="relative">
            {image2 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 animate-float">
                  <img
                    src={image.src}
                    alt={title}
                    className="w-full h-auto rounded-xl sm:rounded-2xl"
                  />
                </div>
                <div 
                  className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 animate-float" 
                  style={{ animationDelay: '0.2s' }}
                >
                  <img
                    src={image2.src}
                    alt={`${title} testimonial`}
                    className="w-full h-auto rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 animate-float">
                <img
                  src={image.src}
                  alt={title}
                  className="w-full h-auto rounded-xl sm:rounded-2xl"
                />
              </div>
            )}
          </div>

          {/* Stat Section */}
          <div className="space-y-2">
            <div className="w-12 sm:w-16 h-1 bg-primary rounded-full" />
            <div className="flex items-baseline gap-2">
              <div className="text-white text-4xl sm:text-5xl font-bold">
                {stat}
              </div>
              <div className="text-white text-base sm:text-lg text-muted-foreground">
                {statLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image(s) - Desktop */}
        <div ref={desktopImageRef} className="hidden lg:block relative">
          {image2 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 animate-float">
                <img
                  src={image.src}
                  alt={title}
                  className="w-full h-auto rounded-xl sm:rounded-2xl"
                />
              </div>
              <div 
                className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 animate-float" 
                style={{ animationDelay: '0.2s' }}
              >
                <img
                  src={image2.src}
                  alt={`${title} testimonial`}
                  className="w-full h-auto rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-2xl sm:rounded-3xl p-1 sm:p-2 animate-float">
              <img
                src={image.src}
                alt={title}
                className="w-full h-auto rounded-xl sm:rounded-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;