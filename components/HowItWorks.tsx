"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import step01Card from "@/assets/step-01-card.png";
import step02Card from "@/assets/step-02-card.png";
import step03Card from "@/assets/step-03-card.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Define your vision",
    description: "Strategic session to blueprint your success",
    image: step01Card,
  },
  {
    id: "02",
    title: "Evaluate from the curated",
    description: "Handpicked experts integrated and ready",
    image: step02Card,
  },
  {
    id: "03",
    title: "Start building",
    description: "on a flexible subscription model",
    image: step03Card,
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      stepRefs.current.forEach((step, index) => {
        if (!step) return;

        const content = step.querySelector(".step-content");
        const sidebar = step.querySelector(".step-sidebar");
        const image = step.querySelector(".step-image");
        const text = step.querySelector(".step-text");

        if (!content || !sidebar || !image || !text) return;

        if (index === 0) {
          gsap.set([content, sidebar, image, text], { y: 0, opacity: 1 });
        } else {
          gsap.set([content, sidebar, image, text], { y: 100, opacity: 0 });
        }

        // Pin each step section
        ScrollTrigger.create({
          trigger: step,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Fade & transition between steps
        ScrollTrigger.create({
          trigger: step,
          start: "top bottom",
          end: "top top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set([content, sidebar, image, text], {
              y: 100 * (1 - progress),
              opacity: progress,
            });

            if (index > 0 && stepRefs.current[index - 1]) {
              const prevContent = stepRefs.current[index - 1]?.querySelector(".step-content");
              if (prevContent) gsap.set(prevContent, { opacity: 1 - progress });
            }
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black text-white font-[Manrope]">
      {/* Sticky header scoped to section */}
      <div className="sticky top-0 z-30 bg-black/95 backdrop-blur-sm py-6 px-6 border-b border-white/20">
        <h2 className="text-lg md:text-xl font-normal tracking-wide">How it works</h2>
      </div>

      {/* Steps */}
      {steps.map((step, index) => (
        <section
          key={step.id}
          ref={(el) => {
            if (el) stepRefs.current[index] = el;
          }}
          className="relative h-screen w-full flex items-center justify-center px-4 md:px-12 pt-16 sm:pt-20 md:pt-24 lg:pt-28"
          style={{ zIndex: 10 + index }}
        >
          <div className="step-content w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Sidebar (desktop only) */}
            <div className="hidden lg:flex step-sidebar flex-col gap-8 flex-shrink-0">
              {steps.map((s) => (
                <div key={s.id} className="flex items-center gap-4">
                  <div
                    className={`text-lg transition-all duration-500 ${
                      step.id === s.id ? "font-semibold text-white" : "font-light text-gray-500"
                    }`}
                  >
                    Step {s.id}
                  </div>
                  <div
                    className={`h-px transition-all duration-500 ${
                      step.id === s.id ? "w-24 bg-white" : "w-16 bg-gray-700"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Center Image - Reduced sizes for laptop/desktop */}
            <div className="step-image flex items-center justify-center flex-1 lg:mx-8">
              <Image
                src={step.image}
                alt={`Step ${step.id}`}
                width={500}
                height={500}
                className="object-contain rounded-2xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[400px]"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>

            {/* Right Text - Responsive sizing */}
            <div className="step-text w-full max-w-[400px] space-y-4 text-center lg:text-left flex-shrink-0">
              <div className="text-sm font-light tracking-widest text-gray-400">[{step.id}]</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      <div className="h-screen" />
    </div>
  );
};

export default HowItWorks;