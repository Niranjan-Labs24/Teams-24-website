"use client";

import Link from "next/link";

const jobs = [
  {
    title: "Strategy & operations",
    details: "Full-time • $120k - $200k • Chennai, Tamilnadu",
    color: "from-pink-400 to-pink-500",
    link: "/careers/strategy-operations",
  },
  {
    title: "Full stack developer",
    details: "Full-time • $250k - $400k • Remote",
    color: "from-blue-400 to-blue-600",
    link: "/careers/full-stack-developer",
  },
  {
    title: "Senior product designer",
    details: "Full-time • $250k - $400k • Bangalore, Karnataka",
    color: "from-orange-400 to-orange-500",
    link: "/careers/senior-product-designer",
  },
  {
    title: "Customer success manager",
    details: "Full-time • $250k - $400k • Remote",
    color: "from-rose-300 to-rose-400",
    link: "/careers/customer-success-manager",
  },
];

export function Careers() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 bg-white" id="careers">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <p className="text-sm font-medium text-gray-600 mb-4">Careers</p>

        <div className="border-t border-black pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-[Manrope] font-semibold text-[36px] sm:text-[44px] leading-[48px] tracking-[-0.04em] text-black">
            Open positions
          </h2>

          <button
            className="relative w-[227px] h-[72px] bg-[#0F0F0F] rounded-[12px] border-[4px] border-[#0F0F0F]
             flex items-center justify-center px-[40px] py-[20px]
             hover:bg-black/80 transition"
          >
            <span
              className="block w-[147px] h-[32px] text-white font-[Urbanist] font-semibold text-[20px]
              leading-[32px] tracking-[-0.03em] text-center overflow-hidden whitespace-nowrap"
            >
              View all openings
            </span>
          </button>
        </div>

        {/* Jobs list */}
        <div className="mt-16 w-full max-w-[1296px] divide-y divide-gray-300">
          {jobs.map((job, index) => (
            <Link
              key={index}
              href={job.link}
              className="flex items-center justify-between h-auto md:h-[132px] py-6 px-4 md:px-8 hover:bg-gray-50 transition group cursor-pointer"
            >
              {/* Left side */}
              <div className="flex items-start gap-4 sm:gap-6 flex-1">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${job.color} flex-shrink-0 mt-1`}
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-black mb-1 sm:mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{job.details}</p>
                </div>
              </div>

              {/* Right side - Arrow icon */}
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-gray-700 transition-all duration-300 flex-shrink-0 group-hover:bg-gray-800 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                <img
                  src="/arrow-icon.png"
                  alt="Navigate"
                  className="w-[19.1px] h-[16.25px] transition-all duration-300 group-hover:brightness-150"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
