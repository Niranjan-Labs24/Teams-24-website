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
        fixed top-[32px] left-[50px] right-[50px]
        z-[9999]
        flex items-center justify-between
        rounded-[72px]
        border border-white/20
        bg-[#13131333]
        backdrop-blur-[44px]
        px-8 py-[14px]
        md:py-[18px]
        transition-all duration-300
      "
      style={{
        WebkitBackdropFilter: "blur(44px)",
      }}
    >
      {/* Left Section - Logo + Name */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png" // 👈 Replace this with your public/logo.png
          alt="Teams24 Logo"
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="flex items-baseline text-white font-[Dyson Sans Modern]">
          <span
            className="text-[20.45px] tracking-[-0.05em] leading-[12.05px] font-normal"
            style={{ marginRight: "2px" }}
          >
            Teams
          </span>
          <span className="text-[20.45px] tracking-[-0.05em] leading-[12.05px] font-normal">
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
            className="text-[16px] font-[500] font-[Manrope] tracking-[-0.02em] leading-[16px] opacity-90 hover:opacity-100 transition"
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
          px-[52px] py-[16px]
          font-[Manrope] font-semibold text-[16px] tracking-[-0.03em]
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
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
              absolute top-[90px] right-[20px]
              w-[220px]
              bg-[#000000cc] backdrop-blur-[20px]
              flex flex-col items-start
              py-4 px-5 gap-4
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
                  className="text-white text-[16px] font-[Manrope] tracking-[-0.02em] hover:opacity-80 transition"
                >
                  {link}
                </a>
              )
            )}
            <button
              className="
                bg-[#FFFFFF] text-black
                rounded-[62px] px-[32px] py-[10px]
                font-[Manrope] font-semibold text-[14px]
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
  