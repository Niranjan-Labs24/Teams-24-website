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
  color?: string; // Add color field (optional to prevent errors if column missing)
}

const gradients = [
  "--gradient-blue-purple",
  "--gradient-cyan-yellow",
  "--gradient-orange-pink",
  "--gradient-purple-orange",
];

const getGradientVar = (index: number) => gradients[index % gradients.length];

export function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("id, title, location, type, slug, color") // Fetch color
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
    <section className="py-20 px-4 sm:px-8 lg:px-12 bg-white" id="careers">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <p className="text-sm font-medium text-gray-600 mb-4">Careers</p>

        <div className="border-t border-black pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-[Manrope] font-semibold text-[2.25rem] sm:text-[2.75rem] leading-[3rem] tracking-[-0.04em] text-black">
            Open positions
          </h2>

          <a
            href="https://careers.teams24.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[14.1875rem] h-[4.5rem] bg-[#0F0F0F] rounded-xl border-4 border-[#0F0F0F]
             flex items-center justify-center px-10 py-5
             hover:bg-black/80 transition"
          >
            <span
              className="block w-[9.1875rem] h-8 text-white font-[Urbanist] font-normal text-xl
              leading-8 tracking-[-0.03em] text-center overflow-hidden whitespace-nowrap"
            >
              View all openings
            </span>
          </a>
        </div>

        {/* Jobs list */}
        <div className="mt-16 w-full max-w-[81rem] divide-y divide-gray-300">
          {loading ? (
            <p className="py-8 text-gray-500">Loading openings...</p>
          ) : jobs.length > 0 ? (
            jobs.map((job, index) => (
              <a
                key={job.id}
                href={`https://careers.teams24.co/${job.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between h-auto md:h-[8.25rem] py-6 px-4 md:px-8 hover:bg-gray-50 transition group cursor-pointer"
              >
                {/* Left side */}
                <div className="flex items-start gap-4 sm:gap-6 flex-1">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 mt-1"
                    style={{ 
                        // Use backend color if available, otherwise fallback to index-based gradient
                        background: job.color 
                            ? (job.color.startsWith('--') ? `var(${job.color})` : job.color)
                            : `var(${getGradientVar(index)})` 
                    }}
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-black mb-1 sm:mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {job.type} • {job.location}
                    </p>
                  </div>
                </div>

                {/* Right side - Arrow icon */}
                <div className="w-12 h-12 bg-black rounded-full shadow-lg shadow-black/10 flex items-center justify-center transition-all duration-300 group-hover:rotate-45 flex-shrink-0">
                  <ArrowUpRight className="text-white w-6 h-6" />
                </div>
              </a>
            )
          )) : (
            <p className="py-8 text-gray-500">No current openings available. Check back soon!</p>
          )}
        </div>
      </div>
    </section>
  );
}
