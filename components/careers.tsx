"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  slug: string;
}

const colors = [
  "from-pink-400 to-pink-500",
  "from-blue-400 to-blue-600",
  "from-orange-400 to-orange-500",
  "from-rose-300 to-rose-400",
];

export function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("id, title, location, type, slug")
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
            href="http://job-board-teams-24.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[14.1875rem] h-[4.5rem] bg-[#0F0F0F] rounded-xl border-4 border-[#0F0F0F]
             flex items-center justify-center px-10 py-5
             hover:bg-black/80 transition"
          >
            <span
              className="block w-[9.1875rem] h-8 text-white font-[Urbanist] font-semibold text-xl
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
                href={`http://job-board-teams-24.vercel.app/careers/${job.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between h-auto md:h-[8.25rem] py-6 px-4 md:px-8 hover:bg-gray-50 transition group cursor-pointer"
              >
                {/* Left side */}
                <div className="flex items-start gap-4 sm:gap-6 flex-1">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${colors[index % colors.length]} flex-shrink-0 mt-1`}
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
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-700 transition-all duration-300 flex-shrink-0 group-hover:bg-gray-800 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  <img
                    src="/arrow-icon.png"
                    alt="Navigate"
                    className="w-[1.2rem] h-[1rem] transition-all duration-300 group-hover:brightness-150"
                  />
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
