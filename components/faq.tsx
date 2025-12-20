"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* LEFT SIDE */}
        <div className="flex flex-col lg:w-[26rem]">
          {/* Top small header */}
          <div className="mb-4 lg:mb-6">
            <p
              className="text-gray-400"
              style={{
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "1.25rem",
                lineHeight: "2rem",
                letterSpacing: "-0.04em",
              }}
            >
              Have questions?
            </p>
          </div>

          {/* Horizontal line */}
          <div className="border-t border-gray-600 mb-6 lg:mb-8 w-full"></div>

          {/* Main heading */}
          <h2
            className="text-white"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "3.5rem",
              lineHeight: "3rem",
              letterSpacing: "-0.06em",
            }}
          >
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[38rem] flex flex-col gap-5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="w-full bg-[#0F0F0F] border border-[#FFFFFF14] rounded-[1.25rem] hover:border-gray-600 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-6 py-6 hover:bg-gray-900/30 transition-all duration-300"
              >
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {item.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-500" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-800 bg-gray-900/20">
                      <p
                        className="text-gray-300 leading-relaxed pt-4"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "1rem",
                          lineHeight: "1.75rem",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
