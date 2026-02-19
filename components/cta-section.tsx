"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { loadGSAP } from "@/lib/animation-loaders";

export function CTASection() {
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);

  const logos = [
    {
      name: "Salesforce",
      src: "/logos/salesforce.png",
      style: {
        width: "clamp(40px, 4.8vw, 68px)",
        height: "clamp(28px, 3.3vw, 48px)",
        top: "9%",
        left: "10%",
        rotate: "15deg",
      },
    },
    {
      name: "Microsoft",
      src: "/logos/microsoft.png",
      style: {
        width: "clamp(24px, 2.8vw, 34px)",
        height: "clamp(24px, 2.8vw, 34px)",
        top: "8%",
        left: "30%",
        rotate: "-15deg",
      },
    },
    {
      name: "Adobe",
      src: "/logos/adobe.png",
      style: {
        width: "clamp(26px, 3vw, 34px)",
        height: "clamp(36px, 4.4vw, 47px)",
        top: "12%",
        left: "68%",
        rotate: "15deg",
      },
    },
    {
      name: "SAP",
      src: "/logos/sap.png",
      style: {
        width: "clamp(48px, 5vw, 66px)",
        height: "clamp(24px, 3vw, 33px)",
        top: "20%",
        left: "91%",
        rotate: "-15deg",
      },
    },
  {
    name: "Figma",
    src: "/logos/figma.png",
    style: {
      width: "clamp(22px, 2.6vw, 30px)",
      height: "clamp(33px, 3.8vw, 45px)",
      top: "78%",
      left: "8%",
      rotate: "15deg",
    },
  },
  {
    name: "Netflix",
    src: "/logos/netflix.png",
    style: {
      width: "clamp(32px, 4vw, 50px)",
      height: "clamp(32px, 4vw, 50px)",
      top: "48%",
      left: "5%",
      rotate: "15deg",
    },
  },
  {
    name: "Node",
    src: "/logos/node.png",
    style: {
      width: "clamp(40px, 5vw, 60px)",
      height: "clamp(25px, 3.5vw, 36px)",
      top: "65%",
      left: "22%",
      rotate: "-15deg",
    },
  },
  {
    name: "React",
    src: "/logos/react.png",
    style: {
      width: "clamp(32px, 3.8vw, 47px)",
      height: "clamp(32px, 3.8vw, 47px)",
      top: "75%",
      left: "38%",
      rotate: "-15deg",
    },
  },
  {
    name: "Python",
    src: "/logos/python.png",
    style: {
      width: "clamp(32px, 3.8vw, 47px)",
      height: "clamp(33px, 3.9vw, 48px)",
      top: "64%",
      left: "70%",
      rotate: "15deg",
    },
  },
  {
    name: "AWS",
    src: "/logos/aws.png",
    style: {
      width: "clamp(28px, 3.8vw, 47px)",
      height: "clamp(20px, 2.5vw, 29px)",
      top: "86%",
      left: "80%",
      rotate: "-15deg",
    },
  },
  {
    name: "Montserrat",
    src: "/logos/montserrat.png",
    style: {
      width: "clamp(28px, 3.6vw, 43px)",
      height: "clamp(28px, 3.6vw, 43px)",
      top: "60%",
      left: "90%",
      rotate: "-30deg",
    },
  },
];

  useEffect(() => {
    const section = logosRef.current[0]?.parentElement?.parentElement;
    let ctx: any = null;
    let observer: IntersectionObserver | null = null;

    const initLogoAnimations = async () => {
      const { gsap } = await loadGSAP();
      ctx = gsap.context(() => {
        logosRef.current.forEach((el, index) => {
          if (!el) return;
          
          // Set initial rotation through GSAP to avoid conflict with CSS transform
          const initialRotate = parseInt(logos[index].style.rotate) || 0;
          gsap.set(el, { rotation: initialRotate });

          gsap.to(el, {
            x: "random(-10, 10)",
            y: "random(-8, 8)",
            rotation: `${initialRotate} + random(-5, 5)`,
            scale: "random(0.95, 1.05)",
            duration: "random(2, 3)",
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            force3D: true,
            autoRound: false,
          });
        });
      });
    };

    if (section) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            initLogoAnimations();
            observer?.disconnect();
          }
        },
        { rootMargin: "200px" }
      );
      observer.observe(section);
    }

    return () => {
      if (ctx) ctx.revert();
      if (observer) observer.disconnect();
    };
  }, []);


  return (
    <section
      className="
        relative 
        w-full 
        max-w-[79rem] 
        mx-auto 
        h-[42rem] md:h-[35rem] 
        overflow-hidden 
        rounded-[2.5rem] 
        border border-[#0000000A]
        px-4 sm:px-6 md:px-8 
        flex items-center justify-center
        mt-10
        shadow-sm
      "
      style={{
        background: `
          radial-gradient(circle at 85% 10%, rgba(191, 219, 254, 0.5) 0%, transparent 50%),
          radial-gradient(circle at 10% 15%, rgba(251, 207, 232, 0.3) 0%, transparent 40%),
          radial-gradient(circle at 50% 75%, rgba(255, 237, 213, 0.6) 0%, transparent 45%),
          linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)
        `
      }}
    >

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            ref={(el) => {
              logosRef.current[index] = el;
            }}
            className="absolute opacity-80 md:opacity-90 hover:opacity-100 transition-opacity duration-300 will-change-transform"
            style={{
              width: logo.style.width,
              height: logo.style.height,
              top: logo.style.top,
              left: logo.style.left,
              transform: "translate3d(0, 0, 1px)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              filter: "blur(0px)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={200}
              height={200}
              quality={100}
              unoptimized={true}
              className="w-full h-full object-contain"
              style={{
                imageRendering: "auto",
              }}
              priority
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center">
          <p
            className="
              text-[#1A1A1A]/60
              font-semibold
              text-base sm:text-lg
              tracking-tight
              text-center
              font-manrope
            "
          >
            Ready to Transform Your Startup?
          </p>
        </div>

        <div
          className="
            max-w-[58rem] 
            w-full
            px-2
          "
        >
          <h2
            className="
              text-[#1A1A1A]
              font-extrabold
              font-manrope
              text-[2.25rem] sm:text-[3rem] md:text-[3.5rem]
              leading-[1.05]
              tracking-tighter
              text-center
            "
          >
            Empowerment begins with a single decision.
            <br className="hidden md:block" />
            Your complete team awaits.
          </h2>
        </div>

        <button 
          onClick={() => window.open('https://cal.com/sasharay/30min', '_blank', 'noopener,noreferrer')}
          className="
            mt-8
            px-10 sm:px-12
            h-[3.75rem] sm:h-[4.25rem]
            bg-[#0F0F0F] 
            text-white 
            font-manrope
            font-semibold 
            text-lg sm:text-xl
            rounded-full 
            border-[3px] border-[#FFFFFF1A] 
            shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
            hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] 
            hover:bg-black
            hover:scale-[1.03]
            transition-all duration-300
          "
        >
          Hire your dream team
        </button>
      </div>
    </section>
  );
}
