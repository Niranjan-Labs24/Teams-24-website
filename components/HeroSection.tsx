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

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
    const region = process.env.NEXT_PUBLIC_HUBSPOT_REGION || "na1";
    
    if (!portalId || !formId) {
      console.error("HubSpot configuration is missing in environment variables.");
      alert("Form configuration error. Please contact support.");
      setIsSubmitting(false);
      return;
    }

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const payload = {
      fields: [
        { name: "firstname", value: formData.firstname },
        { name: "lastname", value: formData.lastname },
        { name: "email", value: formData.email },
        { name: "company_size_dropdown", value: formData.company_size_dropdown },
        { name: "location", value: formData.location },
      ],
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "",
      },
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("HubSpot submission failed:", errorData);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
      alert("Error connecting to HubSpot. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0B1A] min-h-screen lg:min-h-[50rem] flex items-center rounded-b-[48px] md:rounded-b-[80px]">
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
      <div className="relative z-20 h-full w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 pt-28 pb-12 max-w-[1550px] mx-auto gap-12 lg:gap-[160px]">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-8 lg:max-w-[600px] w-full">
          <div className="flex items-center justify-start lg:justify-start gap-4 transition-transform hover:scale-105 whitespace-nowrap">
            <div className="relative w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0">
              <Image
                src="/icons/Frame 1171276677.png"
                alt="Badge Icon"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white text-base sm:text-2xl font-medium tracking-tight text-left">
              Hiring can be as easy as shopping
            </span>
          </div>

          <h1 
            className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-normal text-white leading-[1.2] sm:leading-[50px] tracking-[-0.07em] text-center lg:text-left w-full"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Flexibility of a freelancer<br className="hidden sm:block" />
            with commitment of<br className="hidden sm:block" />
            an employee
          </h1>

          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-2 w-full">
            <div className="flex -space-x-3 flex-shrink-0">
              {[
                "/rating/Frame 2147225664.png",
                "/rating/Frame 2147225665.png",
                "/rating/Frame 2147225666.png",
                "/rating/Frame 2147225667.png"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/30 overflow-hidden bg-gray-800"
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
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-white/70 text-sm sm:text-base font-medium tracking-tight text-center sm:text-left">
                Trusted by 20+ CEO&apos;s and CXO&apos;s
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-5 mt-10">
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
            className="w-full lg:w-[598px] bg-white/5 backdrop-blur-[40px] rounded-[28px] border-[0.81px] border-white/10 p-5 xs:p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center opacity-100"
            style={{
                minHeight: '522px',
                height: 'auto'
            }}
          >
            {isSubmitted ? (
               <div className="relative z-10 text-center py-12">
               <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="text-white w-10 h-10" />
               </div>
               <h2 className="text-white text-3xl font-bold mb-4">Thank You!</h2>
               <p className="text-white/70 text-lg">
                 Your request has been received. Our team will contact you shortly.
               </p>
               <button 
                 onClick={() => setIsSubmitted(false)}
                 className="mt-8 text-white/50 hover:text-white text-sm underline underline-offset-4"
               >
                 Submit another response
               </button>
             </div>
            ) : (
                <>
                <div className="relative z-10 text-center mb-6">
                  <h2 className="text-white text-xl xs:text-2xl md:text-3xl font-bold font-manrope mb-1">
                    Book a free 30 min call
                  </h2>
                  <p className="text-white/60 text-sm xs:text-base">
                    Get all your questions answered by our experts.
                  </p>
                </div>
    
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                    <input
                      required
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      type="text"
                      placeholder="First name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:bg-white/10"
                    />
                    <input
                      required
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      type="text"
                      placeholder="Last name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:bg-white/10"
                    />
                  </div>
    
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Work email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:bg-white/10"
                  />
    
                  <div className="grid grid-cols-1 gap-3">
                    <div className="relative">
                      <select 
                        required
                        name="company_size_dropdown"
                        value={formData.company_size_dropdown}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none appearance-none cursor-pointer focus:bg-white/10"
                      >
                        <option value="" disabled className="bg-[#0A0B1A] text-white/50">Company size</option>
                        <option value="1-10" className="bg-[#0A0B1A] text-white">1-10 employees</option>
                        <option value="11-50" className="bg-[#0A0B1A] text-white">11-50 employees</option>
                        <option value="51-200" className="bg-[#0A0B1A] text-white">51-200 employees</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 pointer-events-none" />
                    </div>
    
                    <div className="relative">
                      <select 
                        required
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none appearance-none cursor-pointer focus:bg-white/10"
                      >
                        <option value="" disabled className="bg-[#0A0B1A] text-white/50">Location</option>
                        <option value="usa" className="bg-[#0A0B1A] text-white">United States</option>
                        <option value="uk" className="bg-[#0A0B1A] text-white">United Kingdom</option>
                        <option value="india" className="bg-[#0A0B1A] text-white">India</option>
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
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-white text-black py-3.5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Book a demo call"}
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
