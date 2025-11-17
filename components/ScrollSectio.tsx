import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImageData } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  index: number;
  title: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  image: StaticImageData;
  image2?: StaticImageData;
  gradient: string;
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

    <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left Content */}
      <div ref={contentRef} className="space-y-8">
        <div className="space-y-4">
          {/* REMOVED the commented "Ideal for" section from here */}
          <div className="space-y-2">
            <div className="text-white text-muted-foreground text-lg font-mono">
              [{index.toString().padStart(2, "0")}]
            </div>
            <h2 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h2>
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-16 h-1 bg-primary rounded-full" />
          <div className="flex items-baseline gap-2">
            <div className="text-white text-6xl font-bold gradient-text bg-gradient-to-r from-primary to-accent">
              {stat}
            </div>
            <div className="text-white text-lg text-muted-foreground">{statLabel}</div>
          </div>
        </div>

        <p className="text-white text-xl text-muted-foreground max-w-lg">{subtitle}</p>
      </div>

      {/* Right Image(s) */}
      <div ref={imageRef} className="relative">
        {image2 ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-3xl p-2 animate-float">
              <img
                src={image.src}
                alt={title}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="glass-card rounded-3xl p-2 animate-float" style={{ animationDelay: '0.2s' }}>
              <img
                src={image2.src}
                alt={`${title} testimonial`}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-2 animate-float">
            <img
              src={image.src}
              alt={title}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        )}
      </div>
    </div>
  </section>
);
};

export default ScrollSection;
