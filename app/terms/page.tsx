"use client";

import React, { useState } from "react";
import GlassmorphicNavbar from "@/components/glassmorphic-navbar";
import { Footer } from "@/components/footer";
import { termsContent } from "./termsData";
import { 
  FileText, 
  Shield, 
  CreditCard, 
  AlertCircle, 
  Scale, 
  Bell, 
  Hammer, 
  Globe, 
  HelpCircle,
  Menu,
  ChevronRight,
  Info,
  UserCheck
} from "lucide-react";

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState("part-a");

  const navItems = [
    { id: "part-a", label: "Part A: General Terms", icon: <Shield className="w-4 h-4" /> },
    { id: "10-gaming", label: "Part A: Gaming Terms", icon: <Hammer className="w-4 h-4" /> },
    { id: "prohibited", label: "Prohibited Products", icon: <AlertCircle className="w-4 h-4" /> },
    { id: "part-b-i", label: "Part B: Online Payments", icon: <CreditCard className="w-4 h-4" /> },
    { id: "part-b-ib", label: "Part B: Cross-Border", icon: <Globe className="w-4 h-4" /> },
    { id: "part-b-ii", label: "Part B: E-Mandate", icon: <FileText className="w-4 h-4" /> },
    { id: "part-b-iii", label: "Part B: TokenHQ", icon: <Hammer className="w-4 h-4" /> },
    { id: "part-b-iv", label: "Part B: Subscription", icon: <Bell className="w-4 h-4" /> },
    { id: "part-v", label: "Part B: Partner Program", icon: <UserCheck className="w-4 h-4" /> },
    { id: "part-b-vi", label: "Part B: Magic Checkout", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "part-b-vii", label: "Part B: Offline Aggregation", icon: <Scale className="w-4 h-4" /> },
    { id: "grievance", label: "Grievance & Redressal", icon: <Info className="w-4 h-4" /> },
    { id: "acceptance", label: "Acceptance Details", icon: <UserCheck className="w-4 h-4" /> },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <GlassmorphicNavbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-20 font-[Manrope]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-2 bg-white/50 backdrop-blur-md border border-[#0000000a] rounded-3xl p-6 shadow-sm">
              <h3 className="text-black font-bold mb-6 flex items-center gap-2 text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <Menu className="w-5 h-5" /> Navigation
              </h3>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                    activeSection === item.id 
                    ? "bg-[#2E8BFF] text-white shadow-lg shadow-blue-500/20 translate-x-1" 
                    : "text-gray-600 hover:bg-gray-100/80 hover:text-black"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-semibold">{item.label}</span>
                  {activeSection === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              ))}
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4 space-y-12">
            
            <div className="bg-white border border-[#0000000a] rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Terms of Use
                </h1>
                <p className="text-gray-500 text-lg font-medium">Last updated: December 23, 2025</p>
              </div>
              <a 
                href="https://labs24.notion.site/Terms-of-Use-2de67d98dfa98049b6dde33fcce2dc79"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4" /> View Original
              </a>
            </div>

            {/* PART A */}
            <section id="part-a" className="bg-white border border-[#0000000a] rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
              <h2 className="text-3xl font-bold text-black mb-8 border-b border-gray-100 pb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {termsContent.partA.title}
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 text-blue-900 font-bold mb-8">
                  {termsContent.partA.intro.split('\n\n')[0]}
                </div>
                {termsContent.partA.intro.split('\n\n').slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>{termsContent.partA.supplemental}</p>
                <p>{termsContent.partA.offlineNote}</p>

                {termsContent.partA.sections.map((sec) => (
                  <div key={sec.id} className="pt-10">
                    <h3 className="text-xl font-bold text-black mb-6">{sec.title}</h3>
                    {sec.content.map((p, i) => (
                      <p key={i} className="mb-4">{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* PROHIBITED PRODUCTS */}
            <section id="prohibited" className="bg-white border border-[#0000000a] rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <AlertCircle className="w-32 h-32 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-8 border-b border-gray-100 pb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {termsContent.partA.sections.find(s => s.id === "17")?.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-sm text-gray-600">
                {termsContent.partA.sections.find(s => s.id === "17")?.content.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-red-50/30 border border-red-100/50">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0 text-xs">
                      {idx + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PART B SECTIONS */}
            {termsContent.partB.parts.map((part) => (
              <section key={part.id} id={part.id} className="bg-white border border-[#0000000a] rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
                <h3 className="text-2xl font-bold text-black mb-8 border-b border-gray-100 pb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {part.title}
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  {part.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* GRIEVANCE */}
            <section id="grievance" className="bg-white border border-[#0000000a] rounded-[2rem] p-8 md:p-12 shadow-sm border-l-8 border-l-blue-500">
              <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {termsContent.grievance.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-black mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" /> DATA PROTECTION OFFICER
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {termsContent.grievance.dpo.name}</p>
                    <p><strong>Entity:</strong> {termsContent.grievance.dpo.entity}</p>
                    <p><strong>Email:</strong> {termsContent.grievance.dpo.email}</p>
                    <p className="text-gray-500">Address: {termsContent.grievance.dpo.address}</p>
                    <p><strong>Portal:</strong> <a href={termsContent.grievance.dpo.portal} className="text-blue-600 hover:underline">Grievance Portal</a></p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-black mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-500" /> NODAL OFFICER
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {termsContent.grievance.nodal.name}</p>
                    <p><strong>Email:</strong> {termsContent.grievance.nodal.email}</p>
                    <p><strong>Grievance Portal:</strong> <a href={termsContent.grievance.nodal.portal} className="text-blue-600 hover:underline">{termsContent.grievance.nodal.portal}</a></p>
                    <p className="text-gray-500">Address: {termsContent.grievance.nodal.address}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ACCEPTANCE */}
            <section id="acceptance" className="bg-black text-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-500/10">
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Acceptance Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80 text-sm">
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-1">Owner Name</p>
                    <p className="text-xl font-bold">{termsContent.acceptance.ownerName}</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-1">Owner ID</p>
                    <p className="font-mono">{termsContent.acceptance.ownerId}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-1">Signatory</p>
                    <p className="text-xl font-bold">{termsContent.acceptance.signatory}</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-1">Email</p>
                    <p>{termsContent.acceptance.email}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-1">Date of Acceptance</p>
                    <p className="text-lg">{termsContent.acceptance.date}</p>
                  </div>
                  <div>
                    <p className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-1">IP Address</p>
                    <p className="font-mono">{termsContent.acceptance.ipAddress}</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
