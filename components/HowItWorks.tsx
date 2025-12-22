"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Define your vision",
    description: "Strategic session to blueprint your success",
    videoUrl: "/video/walter.mp4",
  },
  {
    id: "02",
    title: "Evaluate from the curated",
    description: "Handpicked experts integrated and ready",
    videoUrl: "/video/how%20web.mp4",
  },
  {
    id: "03",
    title: "Start building",
    description: "on a flexible subscription model",
    videoUrl: "/video/huddle.mp4",
  },
];

const StepIndicators = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="flex flex-row lg:flex-col lg:min-w-[240px] 2xl:min-w-[320px]">
      {/* Top Line */}
      <div className="hidden lg:block w-full h-[1px] bg-white/20" />
      
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col">
          <div className="flex items-center justify-between py-6 group cursor-pointer">
            <div
              className={`text-base lg:text-lg transition-all duration-300 font-medium ${
                activeStep === index
                  ? "text-white"
                  : "text-gray-500 group-hover:text-gray-300"
              }`}
            >
              Step {step.id}
            </div>
            
            {/* Small Dot */}
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "bg-gray-600 group-hover:bg-gray-400"
              }`}
            />
          </div>
          {/* Bottom Line for each step (effectively separators) */}
          <div className="hidden lg:block w-full h-[1px] bg-white/20" />
        </div>
      ))}
    </div>
  );
};

const MobileStepIndicators = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="flex flex-col w-full px-0 pb-0">
      {/* Progress Line Container */}
      <div className="relative w-full h-[2px] bg-white/20 mb-4">
        {/* Active Progress Line (optional, or just highlight current step) */}
        <div 
            className="absolute left-0 top-0 h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
        />
      </div>
      
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`flex items-center gap-2 text-sm md:text-base font-medium transition-colors duration-300 ${
                activeStep === index ? "text-white" : "text-gray-500"
            }`}
          >
            {/* Small Arrow/Dot for active? Image has a small indicator */}
            {activeStep === index && (
                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            )}
            Step {step.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevStepRef = useRef(0); // <-- Prevent re-renders breaking GSAP


  useEffect(() => {
    if (!sectionRef.current) return;

    // Use gsap.context for proper cleanup
    const ctx = gsap.context(() => {
      const stepScrollHeight = window.innerHeight * steps.length;
      const offsets = steps.map((_, i) => i / steps.length);

      // Initial Opacity
      steps.forEach((_, i) => {
        gsap.set(contentRefs.current[i], { opacity: i === 0 ? 1 : 0 });
      });

      videoRefs.current[0]?.play().catch(() => {});

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${stepScrollHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;

          let newStep = 0;
          if (p < offsets[1]) newStep = 0;
          else if (p < offsets[2]) newStep = 1;
          else newStep = 2;

          // Smooth fade blending between steps
          steps.forEach((_, i) => {
            const start = offsets[i];
            const end = offsets[i + 1] || 1;
            const localProgress = gsap.utils.clamp(0, 1, (p - start) / (end - start));

            let targetOpacity = 0;

            if (i === steps.length - 1) {
              const fadeInEnd = 0.2;
              if (localProgress <= 0) targetOpacity = 0;
              else if (localProgress < fadeInEnd) targetOpacity = localProgress / fadeInEnd;
              else targetOpacity = 1;
            } else {
              const fi = 0.2;
              const fo = 0.8;
              if (localProgress <= 0) targetOpacity = 0;
              else if (localProgress < fi) targetOpacity = localProgress / fi;
              else if (localProgress > fo) targetOpacity = (1 - localProgress) / (1 - fo);
              else targetOpacity = 1;
            }

            gsap.to(contentRefs.current[i], {
              opacity: targetOpacity,
              duration: 0.18,
              ease: "power2.out",
            });
          });

          // Switch active step
          if (newStep !== prevStepRef.current) {
            const oldStep = prevStepRef.current;
            prevStepRef.current = newStep;
            setActiveStep(newStep);

            videoRefs.current[oldStep]?.pause();
            if (videoRefs.current[newStep]) {
              videoRefs.current[newStep]!.currentTime = 0;
              videoRefs.current[newStep]!.play().catch(() => {});
            }
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={sectionRef} className="relative bg-black text-white font-[Manrope]">
      <div className="absolute top-0 left-0 right-0 z-40 px-6 lg:px-12 pointer-events-none">
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="text-white text-sm font-medium tracking-wider">
                  How it works
                </div>
                <hr className="w-full border-t border-white/30" />
            </div>
        </div>
      </div>

      <div className="relative h-screen flex flex-col">
        {/* Desktop Indicators (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:block absolute left-10 md:left-20 lg:left-32 2xl:left-48 top-1/2 -translate-y-1/2 z-30">
          <StepIndicators activeStep={activeStep} />
        </div>

        {/* Content Sections */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => { contentRefs.current[index] = el; }}
            className={`absolute inset-0 transition-opacity ${
              index === activeStep ? "z-20" : "z-10"
            }`}
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-4 pt-[100px] md:pt-[120px] lg:pt-[140px] pl-0 lg:pl-[380px] 2xl:pl-[480px]">
              <div className="w-full max-w-7xl 2xl:max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-12 lg:gap-32 2xl:gap-48">
              
                <div 
                  className="order-2 lg:order-1 relative shrink-0 w-[240px] h-[300px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[435px] 2xl:w-[450px] 2xl:h-[600px] rounded-[24px] 2xl:rounded-[40px] overflow-hidden border-2 border-white/20 shadow-2xl transition-transform duration-700 ease-out"
                  style={{
                    transform: "rotate(4deg)",
                    boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  >
                    <source src={step.videoUrl} type="video/mp4" />
                  </video>
                  
                  {/* Overlay Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Text Content */}
                <div className="order-1 lg:order-2 shrink-0 w-full max-w-[280px] md:max-w-[350px] 2xl:max-w-[400px] flex flex-col text-center lg:text-left items-center lg:items-start pt-8 pb-4 lg:py-0">
                  <div className="text-lg md:text-xl 2xl:text-2xl font-bold text-white tracking-tight mb-2 md:mb-6 2xl:mb-10">
                    [{step.id}]
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight tracking-tight mb-2 md:mb-12 2xl:mb-16">
                    {step.title}
                  </h3>
                  <p className="font-['Urbanist'] font-normal text-[16px] md:text-[18px] 2xl:text-[22px] leading-[22px] md:leading-[26px] 2xl:leading-[32px] tracking-[-0.02em] text-gray-300 mt-0 md:mt-4">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Indicators (Inside Flow) */}
                <div className="order-3 lg:hidden w-full max-w-[280px] mt-8">
                  <MobileStepIndicators activeStep={activeStep} />
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>

      <div className="h-20 bg-black" />
    </div>
  );
}
