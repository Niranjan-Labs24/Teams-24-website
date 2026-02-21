"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  slug: string;
  salary_min: string;
  salary_max: string;
  currency: string;
  color?: string; // Add color field (optional to prevent errors if column missing)
}

const gradients = [
  "--gradient-blue-purple",
  "--gradient-cyan-yellow",
  "--gradient-orange-pink",
  "--gradient-purple-orange",
];

const getGradientVar = (index: number) => gradients[index % gradients.length];

const getCurrencySymbol = (currency: string) => {
  const symbols: { [key: string]: string } = {
    USD: "$",
    EUR: "€",
    INR: "₹",
    GBP: "£",
  };
  return symbols[currency?.toUpperCase()] || currency || "$";
};

export function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("id, title, location, type, slug, salary_min, salary_max, currency, color")
          .eq("status", "published")
          .order("created_at", { ascending: false })
          .limit(4);

        if (error) {
          console.error("Error fetching jobs:", error);
        } else {
          setJobs(data || []);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <section className="relative pt-20 pb-10 px-4 sm:px-8 lg:px-12 bg-white overflow-hidden" id="careers">
      {/* Background Mesh Gradients - Subtler than FAQ */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -left-[10%] top-[20%] w-[40%] h-[60%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[20%] w-[40%] h-[60%] bg-pink-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 
              className="text-[#1A1A1A] font-normal text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.04em]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              We&apos;re always looking for
              <br />
              great talent
            </h2>
          </div>

          <a
            href="https://careers.teams24.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 h-14 bg-[#111111] text-white rounded-full font-manrope font-semibold text-lg hover:bg-black transition-all active:scale-95 shadow-md"
          >
            View all openings
          </a>
        </div>

        {/* Jobs List */}
        <div className="w-full border-t border-[#0000000F]">
          {loading ? (
            <p className="py-12 text-gray-400 font-manrope">Loading openings...</p>
          ) : jobs.length > 0 ? (
            jobs.map((job) => (
              <a
                key={job.id}
                href={`https://careers.teams24.co/${job.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-[#0000000F] hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center justify-between py-10 px-2 sm:px-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#1A1A1A] text-2xl md:text-3xl font-medium tracking-tight font-manrope">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 text-[#71717A] text-base md:text-lg font-medium">
                      <span>{job.type}</span>
                      <span className="opacity-30">•</span>
                      <span>
                        {job.salary_min && job.salary_max 
                          ? `${getCurrencySymbol(job.currency)} ${job.salary_min} - ${job.salary_max}` 
                          : "$120k - $200k"}
                      </span>
                      <span className="opacity-30">•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="text-white w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="py-12 text-gray-400 font-manrope">No current openings. Check back soon!</p>
          )}
        </div>
      </div>
    </section>
  );
}
