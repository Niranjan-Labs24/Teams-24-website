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
        logosRef.current.forEach((el) => {
          if (!el) return;
          gsap.to(el, {
            x: "random(-10, 10)",
            y: "random(-8, 8)",
            rotation: "random(-5, 5)",
            scale: "random(0.95, 1.05)",
            duration: "random(2, 3)",
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
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
        h-[40rem] md:h-[33rem] 
        bg-white 
        overflow-hidden 
        rounded-[2rem] 
        border border-[#00000014]
        px-4 sm:px-6 md:px-8 
        flex items-center justify-center
        mt-20
      "
    >
      <div className="absolute inset-0 pointer-events-none">
        {logos.map((logo, index) => (
          <div
            key={index}
            ref={(el) => {
              logosRef.current[index] = el;
            }}
            className="absolute opacity-30 md:opacity-70 hover:opacity-100 transition-opacity duration-300"
            style={{
              ...logo.style,
              transform: `rotate(${logo.style.rotate})`,
            }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
  <div className="relative z-10 text-center flex flex-col items-center justify-center gap-10 px-4 sm:px-6 md:px-8">

  <div className="max-w-[18.25rem] w-full">
    <p
      className="
        text-gray-700
        font-[600]
        text-[1.1875rem]
        leading-[2rem]
        tracking-[-0.02em]
        text-center
        font-[Manrope]
      "
    >
      Ready to Transform Your Startup?
    </p>

    <div className="flex justify-center mt-4">
      <div className="h-1 w-1/3 bg-black rounded-full"></div>
    </div>
  </div>
  <div
    className="
      max-w-[61rem] 
      w-full
      mt-6
      px-2
    "
  >
    <h2
      className="
        text-black
        font-[700]
        font-[Manrope]
        text-[2rem] sm:text-[2.5rem] md:text-[3rem]
        leading-[2.375rem] sm:leading-[2.75rem] md:leading-[3rem]
        tracking-[-0.04em]
        text-center
      "
    >
      Empowerment begins with a single decision.
      <br />
      Your complete team awaits.
    </h2>
  </div>
  <button 
  onClick={() => window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer')}
    className="
      mt-8
      w-[9.375rem] sm:w-[10.625rem] md:w-[11.875rem]
      h-[3.5rem] sm:h-[4rem] md:h-[4.375rem]
      bg-black 
      text-white 
      font-[Manrope]
      font-semibold 
      text-base sm:text-lg md:text-xl
      rounded-xl 
      border-4 border-[#FFFFFF4D] 
      shadow-lg hover:shadow-xl 
      hover:bg-gray-800 
      transition-all duration-300
    "
  >
    Book a call
  </button>
</div>

    </section>
  );
}
