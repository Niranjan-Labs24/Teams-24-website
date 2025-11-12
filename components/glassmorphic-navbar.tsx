"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function GlassmorphicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-[20px] left-[60px] right-[60px] /* Increased left/right for narrower width */
        z-[9999]
        flex items-center justify-between
        rounded-[60px] /* Slightly smaller border radius */
        border border-white/20
        bg-[#13131333]
        backdrop-blur-[44px]
        px-6 py-[10px] /* Reduced padding for less height */
        md:py-[12px] /* Reduced mobile padding */
        transition-all duration-300
      "
      style={{
        WebkitBackdropFilter: "blur(44px)",
      }}
    >
      {/* Left Section - Logo + Name */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Teams24 Logo"
          width={18} /* Slightly smaller logo */
          height={18}
          className="object-contain"
        />
        <div className="flex items-baseline text-white font-[Dyson Sans Modern]">
          <span
            className="text-[18px] tracking-[-0.05em] leading-[10px] font-normal" /* Smaller text */
            style={{ marginRight: "2px" }}
          >
            Teams
          </span>
          <span className="text-[18px] tracking-[-0.05em] leading-[10px] font-normal">
            24
          </span>
        </div>
      </div>

      {/* Center Nav Links (Desktop Only) */}
      <div className="hidden md:flex items-center gap-[56px] text-white">
        {["What we do", "How it works", "Services", "Careers"].map((link, i) => (
          <a
            key={i}
            href="#"
            className="text-[15px] font-[500] font-[Manrope] tracking-[-0.02em] leading-[15px] opacity-90 hover:opacity-100 transition" /* Slightly smaller text */
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right Section - Get in Touch */}
      <button
        className="
          hidden md:block
          bg-[#FFFFFF] text-black
          rounded-[62px]
          px-[48px] py-[14px] /* Reduced button padding */
          font-[Manrope] font-semibold text-[15px] tracking-[-0.03em] /* Slightly smaller text */
          border border-transparent
          hover:bg-[#f5f5f5]
          transition-all duration-300
        "
      >
        Get in touch
      </button>

      {/* Hamburger Menu (Mobile / Tablet) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />} {/* Smaller icons */}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Corner Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-[70px] right-[20px] /* Adjusted position for smaller navbar */
              w-[220px]
              bg-[#000000cc] backdrop-blur-[20px]
              flex flex-col items-start
              py-3 px-4 gap-3 /* Reduced padding */
              rounded-[24px]
              border border-white/10
              md:hidden
            "
          >
            {["What we do", "How it works", "Services", "Careers"].map(
              (link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white text-[15px] font-[Manrope] tracking-[-0.02em] hover:opacity-80 transition"
                >
                  {link}
                </a>
              )
            )}
            <button
              className="
                bg-[#FFFFFF] text-black
                rounded-[62px] px-[28px] py-[8px] /* Reduced padding */
                font-[Manrope] font-semibold text-[13px] /* Smaller text */
                hover:bg-[#f5f5f5]
                transition-all duration-300
                w-full
                text-center
              "
            >
              Get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}