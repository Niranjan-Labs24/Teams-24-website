"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { loadFramerMotion } from "@/lib/animation-loaders";

const faqItems = [
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

export function FAQ() {
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

      <div className="relative z-10 max-w-[79rem] mx-auto flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">
        <div className="flex flex-col md:w-1/3">
          <h2
            className="text-[#1A1A1A] font-normal text-[40px] leading-[57px] tracking-[-0.06em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Frequently asked
            <br />
            questions
          </h2>
        </div>
        
        <div className="w-full md:w-[55%] flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="w-full bg-[#FFFFFF] border border-[#0000000F] rounded-[1.25rem] hover:border-gray-200 transition-all duration-300 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left px-8 py-7 hover:bg-gray-50/50 transition-all duration-300"
              >
                <h3
                  className="text-[#1A1A1A] font-manrope font-semibold text-lg md:text-xl leading-snug"
                >
                  {item.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#1A1A1A]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#1A1A1A]" />
                  )}
                </div>
              </button>

              {MotionComponents ? (
                <MotionComponents.AnimatePresence>
                  {openIndex === index && (
                    <MotionComponents.motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 bg-gray-50/30">
                        <p
                          className="text-gray-600 font-manrope text-base leading-relaxed"
                        >
                          {item.answer}
                        </p>
                      </div>
                    </MotionComponents.motion.div>
                  )}
                </MotionComponents.AnimatePresence>
              ) : (
                openIndex === index && (
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 bg-gray-50/30">
                      <p
                        className="text-gray-600 font-manrope text-base leading-relaxed"
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
