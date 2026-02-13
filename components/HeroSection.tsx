"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkle, CheckCircle2, ChevronDown } from "lucide-react";

import Link from "next/link";

export default function HeroSection(): JSX.Element {
  const handleGetInTouch = () => {
    window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0B1A] min-h-screen lg:min-h-[50rem] flex items-center">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/back/background.png"
          alt="Background Gradient"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0B1A]/20" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 h-full w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-28 pb-12 max-w-[1440px] mx-auto gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-8 lg:max-w-[650px]">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm transition-transform hover:scale-105">
            <Sparkle className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium tracking-tight">
              Hiring can be as easier as shopping
            </span>
          </div>

          <h1 
            className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-normal text-white leading-[1.2] sm:leading-[50px] tracking-[-0.07em]"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Flexibility of a freelancer<br className="hidden sm:block" />
            with commitment of<br className="hidden sm:block" />
            an employee
          </h1>

          <div className="flex flex-col items-start gap-5">
            <Link href="/hire/full-stack-developer">
              <button 
                className="px-12 py-4 bg-white text-black rounded-full font-bold text-xl transition-all duration-300 hover:bg-gray-100 shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
              >
                Hire your dream team
              </button>
            </Link>
            
            <button 
              onClick={handleGetInTouch}
              className="flex items-center gap-3 group px-1"
            >
              <div className="p-1 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                <CheckCircle2 size={16} className="text-white/80" />
              </div>
              <p className="font-medium text-base tracking-tight text-white/80 group-hover:text-white transition-colors">
                Book a free discovery call
              </p>
            </button>
          </div>
        </div>

        <div className="w-full max-w-[598px] flex justify-center lg:justify-end">
          <div 
            className="w-full bg-white/5 backdrop-blur-[40px] rounded-[28px] border-[0.81px] border-white/10 p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center"
            style={{
                height: '522px'
            }}
          >
            <div className="relative z-10 text-center mb-6">
              <h2 className="text-white text-2xl md:text-3xl font-bold font-manrope mb-1">
                Book a free 30 min call
              </h2>
              <p className="text-white/60 text-base">
                Get all your questions answered by our experts.
              </p>
            </div>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:bg-white/10"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:bg-white/10"
                />
              </div>

              <input
                type="email"
                placeholder="Work email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:bg-white/10"
              />

              <div className="grid grid-cols-1 gap-3">
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 pointer-events-none" />
                </div>

                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Location</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="india">India</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="py-1">
                <p className="text-[11px] text-white/40 leading-relaxed text-center">
                  We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our privacy policy.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3.5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg shadow-white/5"
              >
                Book a demo call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
