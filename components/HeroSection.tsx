"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkle, CheckCircle2, ChevronDown, Star } from "lucide-react";

import Link from "next/link";

export default function HeroSection(): JSX.Element {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company_size_dropdown: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinCall = () => {
    window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer');
  };

  const handleGetInTouch = () => {
    window.open('https://cal.com/niranjanvenugopal/teams-24-discovery-call', '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0B1A] min-h-screen lg:min-h-[50rem] flex items-center rounded-b-[clamp(40px,6.25vw,100px)]">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/back/background.png"
          alt="Background Gradient"
          fill
          className="object-cover object-top sm:object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0B1A]/20" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 h-full w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto flex flex-col xl:flex-row items-center justify-between px-6 md:px-12 lg:px-16 xl:px-0 pt-36 sm:pt-40 xl:pt-[12vw] pb-12 xl:pb-[4vw] gap-12 xl:gap-[8vw]">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center xl:items-start gap-[31px] xl:gap-[2.4vw] xl:w-[44vw] xl:max-w-[44vw] w-full">
          <div className="flex items-center justify-start lg:justify-start gap-2 xl:gap-[0.8vw] transition-transform hover:scale-105 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 xl:px-[0.8vw] xl:py-[0.3vw] cursor-default shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="relative w-3.5 h-3.5 sm:w-5 sm:h-5 xl:w-[1.4vw] xl:h-[1.4vw] flex-shrink-0">
              <Image
                src="/icons/Group 1362789195@4x.png"
                alt="Badge Icon"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white text-[10px] sm:text-sm xl:text-[1vw] font-medium tracking-tight text-left">
              Hiring can be as easy as shopping
            </span>
          </div>

          <h1 
            className="font-normal text-white text-center xl:text-left mx-auto xl:mx-0 opacity-100"
            style={{ 
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(32px, 4.218vw, 140px)",
              lineHeight: "clamp(34px, 3.906vw, 130px)",
              letterSpacing: "-0.07em",
              width: "clamp(300px, 45vw, 1200px)",
              maxWidth: "100%",
              height: "clamp(100px, 11.718vw, 300px)",
              verticalAlign: "middle",
            }}
          >
            <span className="whitespace-nowrap">Flexibility of a freelancer</span><br />
            with commitment of<br />
            an employee
          </h1>

          {/* Trust Bar Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-[13px] xl:gap-[1vw] mt-2 xl:mt-[0.5vw] xl:w-[28vw]">
            <div className="flex -space-x-3 flex-shrink-0">
              {[
                "/testimonials/Frame 2147225466 (1).webp",
                "/testimonials/Frame 2147225466 (2).webp",
                "/testimonials/Frame 2147225466 (3).webp",
                "/testimonials/Frame 2147225466 (4).webp"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="relative w-8 h-8 sm:w-10 sm:h-10 xl:w-[3vw] xl:h-[3vw] rounded-full border-2 xl:border-[0.15vw] border-white/30 overflow-hidden bg-gray-800"
                >
                  <Image
                    src={src}
                    alt={`Trusted User ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1 sm:whitespace-nowrap">
              <div className="flex gap-0.5 xl:gap-[0.1vw]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 xl:w-[1.5vw] xl:h-[1.5vw] fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-white/70 text-sm sm:text-base xl:text-[1.2vw] font-medium tracking-tight text-center sm:text-left mt-1 xl:mt-[0.2vw]">
                Trusted by 20+ CEO&apos;s and CXO&apos;s
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center xl:items-start gap-[10px] xl:gap-[1vw] mt-10 xl:mt-[3vw] xl:w-[26vw] xl:min-h-[9vw]">
            <button 
              onClick={handleJoinCall}
              className="bg-white text-black transition-all duration-300 hover:bg-gray-100 shadow-[0_4px_20px_rgba(255,255,255,0.2)] whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"
              style={{
                width: "clamp(180px, 22.26vw, 450px)",
                height: "clamp(50px, 6.25vw, 120px)",
                padding: "clamp(12px, 1.875vw, 36px) clamp(28px, 4.375vw, 84px)",
                borderRadius: "62px",
                border: "clamp(1px, 0.234vw, 5px) solid #13131326",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(14px, 1.406vw, 28px)",
                lineHeight: "clamp(24px, 2.5vw, 48px)",
                letterSpacing: "-0.03em",
                textAlign: "center",
                opacity: 1,
              }}
            >
              Hire your dream team
            </button>
            
            <button 
              onClick={handleGetInTouch}
              className="flex items-center gap-1.5 xl:gap-[0.5vw] group xl:w-fit xl:h-[2vw] xl:ml-auto xl:mr-[8vw]"
            >
              <div className="relative w-3.5 h-3.5 xl:w-[1vw] xl:h-[1vw] flex-shrink-0">
                <Image
                  src="/icons/right.png"
                  alt="Discovery Call Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p 
                className="font-semibold text-white/70 group-hover:text-white transition-colors lg:text-[12px] xl:text-[1vw] lg:leading-[20px] xl:leading-[1.5] whitespace-nowrap"
                style={{
                    fontFamily: "Manrope, sans-serif",
                    letterSpacing: "-0.01em",
                }}
              >
                Book a free discovery call
              </p>
            </button>
          </div>
        </div>

        <div className="w-full xl:w-[36vw] xl:max-w-[36vw] flex justify-center xl:justify-end xl:-translate-x-[5vw]">
          <div 
            className="w-full xl:w-[36vw] bg-[#043A7952] backdrop-blur-[2.93px] rounded-[28px] xl:rounded-[2vw] border-[0.81px] xl:border-[0.06vw] border-[#FFFFFF4D] p-4 xs:p-5 md:p-6 xl:p-[2vw] shadow-2xl relative overflow-hidden flex flex-col justify-center opacity-100"
            style={{
                minHeight: 'max(470px, 36vw)',
                height: 'auto'
            }}
          >
            {isSubmitted ? (
               <div className="relative z-10 text-center py-12 xl:py-[3vw]">
               <div className="w-16 h-16 xl:w-[5vw] xl:h-[5vw] bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 xl:mb-[1.5vw]">
                 <CheckCircle2 className="text-white w-10 h-10 xl:w-[3vw] xl:h-[3vw]" />
               </div>
               <h2 className="text-white text-3xl xl:text-[2.2vw] font-bold mb-4 xl:mb-[1vw]">Thank You!</h2>
               <p className="text-white/70 text-lg xl:text-[1.2vw]">
                 Your request has been received. Our team will contact you shortly.
               </p>
               <button 
                 onClick={() => setIsSubmitted(false)}
                 className="mt-8 xl:mt-[2vw] text-white/50 hover:text-white text-sm xl:text-[1vw] underline underline-offset-4"
               >
                 Submit another response
               </button>
             </div>
            ) : (
                <>
                <div className="relative z-10 text-center mb-8 xl:mb-[2vw]">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-[2.2vw] font-bold font-manrope mb-2 xl:mb-[0.5vw]">
                    Book a free 30 min call
                  </h2>
                  <p className="text-white/60 text-base sm:text-lg xl:text-[1.2vw]">
                    Get all your questions answered by our experts.
                  </p>
                </div>
    
                <form className="space-y-4 xl:space-y-[1vw]" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 xl:gap-[1vw]">
                    <input
                      required
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      type="text"
                      placeholder="First name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl xl:rounded-[1vw] px-4 xl:px-[1vw] py-4 xl:py-[1vw] text-white placeholder:text-white lg:text-[14px] xl:text-[1.1vw] lg:leading-[16px] xl:leading-[1.5] placeholder:font-medium outline-none focus:bg-white/10 transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                    <input
                      required
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      type="text"
                      placeholder="Last name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl xl:rounded-[1vw] px-4 xl:px-[1vw] py-4 xl:py-[1vw] text-white placeholder:text-white lg:text-[14px] xl:text-[1.1vw] lg:leading-[16px] xl:leading-[1.5] placeholder:font-medium outline-none focus:bg-white/10 transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                  </div>
    
                  <div className="grid grid-cols-2 gap-4 xl:gap-[1vw]">
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Work email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl xl:rounded-[1vw] px-4 xl:px-[1vw] py-4 xl:py-[1vw] text-white placeholder:text-white lg:text-[14px] xl:text-[1.1vw] lg:leading-[16px] xl:leading-[1.5] placeholder:font-medium outline-none focus:bg-white/10 transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                    <div className="relative">
                      <select 
                        required
                        name="company_size_dropdown"
                        value={formData.company_size_dropdown}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl xl:rounded-[1vw] px-4 xl:px-[1vw] py-4 xl:py-[1vw] text-white lg:text-[14px] xl:text-[1.1vw] lg:leading-[16px] xl:leading-[1.5] outline-none appearance-none cursor-pointer focus:bg-white/10 transition-colors"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        <option value="" disabled className="bg-[#0A0B1A] text-white/50">Company size</option>
                        <option value="1-10" className="bg-[#0A0B1A] text-white">1-10 employees</option>
                        <option value="11-50" className="bg-[#0A0B1A] text-white">11-50 employees</option>
                        <option value="51-200" className="bg-[#0A0B1A] text-white">51-200 employees</option>
                      </select>
                      <ChevronDown className="absolute right-4 xl:right-[1vw] top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 xl:w-[1.2vw] xl:h-[1.2vw] pointer-events-none" />
                    </div>
                  </div>
    
                  <div className="relative">
                    <select 
                      required
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl xl:rounded-[1vw] px-4 xl:px-[1vw] py-4 xl:py-[1vw] text-white lg:text-[14px] xl:text-[1.1vw] lg:leading-[16px] xl:leading-[1.5] outline-none appearance-none cursor-pointer focus:bg-white/10 transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <option value="" disabled className="bg-[#0A0B1A] text-white/50">Location</option>
                      <option value="usa" className="bg-[#0A0B1A] text-white">United States</option>
                      <option value="uk" className="bg-[#0A0B1A] text-white">United Kingdom</option>
                      <option value="india" className="bg-[#0A0B1A] text-white">India</option>
                    </select>
                    <ChevronDown className="absolute right-4 xl:right-[1vw] top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 xl:w-[1.2vw] xl:h-[1.2vw] pointer-events-none" />
                  </div>
    
                  <div className="py-2 xl:py-[0.5vw] flex justify-center">
                    <p 
                      className="text-white lg:text-[12px] xl:text-[0.9vw] lg:leading-[20px] xl:leading-[1.5] lg:w-[447px] xl:w-[35vw] text-center font-medium"
                      style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.03em' }}
                    >
                      We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our <span className="underline cursor-pointer font-medium">privacy policy</span>.
                    </p>
                  </div>
    
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="mx-auto w-full h-[64px] xl:h-[5vw] flex items-center justify-center bg-white text-black rounded-[62px] xl:rounded-[4vw] border-[3px] xl:border-[0.2vw] border-[#131313]/15 font-semibold lg:text-[14px] xl:text-[1.2vw] lg:leading-[32px] xl:leading-[1.5] px-8 xl:px-[2vw] py-4 xl:py-[1vw] hover:bg-gray-100 transition-all shadow-xl shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.03em' }}
                  >
                    {isSubmitting ? "..." : "Book a demo call"}
                  </button>
                </form>
                </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
