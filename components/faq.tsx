"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { loadFramerMotion } from "@/lib/animation-loaders";

import { FAQItem } from "@/lib/data/hire-content";

const defaultFaqItems: FAQItem[] = [
  {
    question: "How fast is deployment really?",
    answer:
      "We deploy teams in 24–48 hours with fully vetted professionals ready to execute. No hiring delays, no onboarding friction — just immediate impact.",
  },
  {
    question: "What about team chemistry?",
    answer:
      "We carefully curate team compositions based on your project needs, culture, and working style. Our vetting process ensures compatibility at every level.",
  },
  {
    question: "Can we scale dynamically?",
    answer:
      "Absolutely. Scale up or down based on your project needs. Add specialists, remove roles, or restructure teams with zero contracts or penalties.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "All team members go through rigorous vetting, have proven track records, and are backed by our quality guarantee. We maintain high standards across all engagements.",
  },
];

interface FAQProps {
  items?: FAQItem[];
}

export function FAQ({ items }: FAQProps = {}) {
  const displayItems = items || defaultFaqItems;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [MotionComponents, setMotionComponents] = useState<{
    motion: typeof import("framer-motion").motion;
    AnimatePresence: typeof import("framer-motion").AnimatePresence;
  } | null>(null);

  const handleToggle = async (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    
    if (!MotionComponents) {
      const modules = await loadFramerMotion({ includeAnimatePresence: true });
      setMotionComponents({
        motion: modules.motion,
        AnimatePresence: modules.AnimatePresence!,
      });
    }
  };

  return (
    <section className="relative w-full bg-white text-black pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="faq">
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-[15%] top-[10%] w-[50%] h-[80%] bg-blue-200/40 rounded-full blur-[130px] opacity-80" />
        <div className="absolute -right-[15%] bottom-[10%] w-[50%] h-[80%] bg-pink-200/30 rounded-full blur-[130px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-[85rem] xl:max-w-none xl:w-[85vw] mx-auto flex flex-col">
        {/* Centered Heading */}
        <div className="text-center mb-10 md:mb-16 xl:mb-[5vw]">
          <h2
            className="text-[#1A1A1A] font-normal text-[32px] md:text-[48px] xl:text-[4vw] leading-tight tracking-[-0.04em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Frequently asked questions
          </h2>
        </div>
        
        {/* FAQ Independent Columns */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 xl:gap-[1.5vw]">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 xl:gap-[1.5vw]">
            {displayItems.filter((_, i) => i % 2 === 0).map((item, index) => {
              const originalIndex = index * 2;
              return (
                <div
                  key={originalIndex}
                  className="w-full bg-[#FFFFFF] border border-[#0000000F] rounded-[1.25rem] xl:rounded-[1.5vw] hover:border-gray-200 transition-all duration-300 overflow-hidden shadow-sm h-fit"
                >
                  <button
                    onClick={() => handleToggle(originalIndex)}
                    className="w-full flex justify-between items-center text-left px-5 md:px-6 xl:px-[1.5vw] py-4 md:py-5 xl:py-[1.2vw] hover:bg-gray-50/50 transition-all duration-300 min-h-[60px] md:min-h-[80px] xl:min-h-[5.5vw]"
                  >
                    <h3 className="text-[#1A1A1A] font-manrope font-semibold text-lg md:text-xl xl:text-[1.3vw] leading-snug">
                      {item.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {openIndex === originalIndex ? (
                        <Minus className="w-5 h-5 md:w-6 md:h-6 xl:w-[1.5vw] xl:h-[1.5vw] text-[#1A1A1A]" />
                      ) : (
                        <Plus className="w-5 h-5 md:w-6 md:h-6 xl:w-[1.5vw] xl:h-[1.5vw] text-[#1A1A1A]" />
                      )}
                    </div>
                  </button>

                  {MotionComponents ? (
                    <MotionComponents.AnimatePresence>
                      {openIndex === originalIndex && (
                        <MotionComponents.motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 xl:px-[2vw] pb-6 md:pb-8 xl:pb-[2vw] bg-gray-50/30">
                            <p className="text-gray-600 font-manrope text-base md:text-lg xl:text-[1.1vw] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </MotionComponents.motion.div>
                      )}
                    </MotionComponents.AnimatePresence>
                  ) : (
                    openIndex === originalIndex && (
                      <div className="overflow-hidden">
                        <div className="px-6 md:px-8 xl:px-[2vw] pb-6 md:pb-8 xl:pb-[2vw] bg-gray-50/30">
                          <p className="text-gray-600 font-manrope text-base md:text-lg xl:text-[1.1vw] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 xl:gap-[1.5vw]">
            {displayItems.filter((_, i) => i % 2 !== 0).map((item, index) => {
              const originalIndex = index * 2 + 1;
              return (
                <div
                  key={originalIndex}
                  className="w-full bg-[#FFFFFF] border border-[#0000000F] rounded-[1.25rem] xl:rounded-[1.5vw] hover:border-gray-200 transition-all duration-300 overflow-hidden shadow-sm h-fit"
                >
                  <button
                    onClick={() => handleToggle(originalIndex)}
                    className="w-full flex justify-between items-center text-left px-5 md:px-6 xl:px-[1.5vw] py-4 md:py-5 xl:py-[1.2vw] hover:bg-gray-50/50 transition-all duration-300 min-h-[60px] md:min-h-[80px] xl:min-h-[5.5vw]"
                  >
                    <h3 className="text-[#1A1A1A] font-manrope font-semibold text-lg md:text-xl xl:text-[1.3vw] leading-snug">
                      {item.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {openIndex === originalIndex ? (
                        <Minus className="w-5 h-5 md:w-6 md:h-6 xl:w-[1.5vw] xl:h-[1.5vw] text-[#1A1A1A]" />
                      ) : (
                        <Plus className="w-5 h-5 md:w-6 md:h-6 xl:w-[1.5vw] xl:h-[1.5vw] text-[#1A1A1A]" />
                      )}
                    </div>
                  </button>

                  {MotionComponents ? (
                    <MotionComponents.AnimatePresence>
                      {openIndex === originalIndex && (
                        <MotionComponents.motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 xl:px-[2vw] pb-6 md:pb-8 xl:pb-[2vw] bg-gray-50/30">
                            <p className="text-gray-600 font-manrope text-base md:text-lg xl:text-[1.1vw] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </MotionComponents.motion.div>
                      )}
                    </MotionComponents.AnimatePresence>
                  ) : (
                    openIndex === originalIndex && (
                      <div className="overflow-hidden">
                        <div className="px-6 md:px-8 xl:px-[2vw] pb-6 md:pb-8 xl:pb-[2vw] bg-gray-50/30">
                          <p className="text-gray-600 font-manrope text-base md:text-lg xl:text-[1.1vw] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
