"use client";

import { SkillCategory } from "@/lib/data/hire-content";

const defaultSkillsData: SkillCategory[] = [
  {
    category: "DevOps & Deployment",
    skills: ["Docker", "Kubernetes", "AWS", "Heroku", "Azure", "DigitalOcean"],
    colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-yellow-50 text-yellow-700", "bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700"]
  },
  {
    category: "Backend Languages",
    skills: ["Node.js", "Ruby", "Java", "GO", "Python", "PHP"],
    colors: ["bg-purple-50 text-purple-700", "bg-pink-50 text-pink-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-blue-50 text-blue-700", "bg-indigo-50 text-indigo-700"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Cassandra"],
    colors: ["bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-sky-50 text-sky-700", "bg-red-50 text-red-700", "bg-blue-50 text-blue-700"]
  },
  {
    category: "Version Control",
    skills: ["Gitlab", "Bitbucket", "Github", "Git"],
    colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700"]
  },
  {
    category: "Backend Frameworks",
    skills: ["Docker", "Kubernetes", "AWS", "Heroku", "Azure", "DigitalOcean"],
    colors: ["bg-green-50 text-green-700", "bg-cyan-50 text-cyan-700", "bg-emerald-50 text-emerald-700", "bg-green-50 text-green-700", "bg-teal-50 text-teal-700", "bg-green-50 text-green-700"]
  },
  {
    category: "CSS Frameworks",
    skills: ["Node.js", "Ruby", "Java", "GO", "Python", "PHP"],
    colors: ["bg-purple-50 text-purple-700", "bg-pink-50 text-pink-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-blue-50 text-blue-700", "bg-indigo-50 text-indigo-700"]
  },
  {
    category: "APIs & Protocols",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Cassandra"],
    colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-sky-50 text-sky-700", "bg-red-50 text-red-700", "bg-orange-50 text-orange-700"]
  },
  {
    category: "Authentication & Authorization",
    skills: ["Gitlab", "Bitbucket", "Github", "Git"],
    colors: ["bg-stone-50 text-stone-700", "bg-stone-50 text-stone-700", "bg-stone-50 text-stone-700", "bg-stone-50 text-stone-700"]
  }
];

interface HireSkillsProps {
  role?: string;
  title?: string;
  description?: string;
  skills?: SkillCategory[];
}

export default function HireSkills({ 
  role = "Fullstack",
  title,
  description,
  skills
}: HireSkillsProps) {
  const displayTitle = title || `10+ skills that ${role} Developers at Teams24 are skilled at`;
  const displayDescription = description || `${role} developers at Teams24 are skilled at JavaScript, NodeJS among others.`;
  const displaySkills = skills || defaultSkillsData;

  return (
    <section className="w-full bg-white py-20 xl:py-[6vw] px-6 xl:px-[2vw]">
      <div className="max-w-[1200px] xl:max-w-none xl:w-[85vw] mx-auto">
        <div className="text-center mb-10 md:mb-16 xl:mb-[4vw]">
          <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-gray-900 mb-4 sm:mb-6 xl:mb-[1.5vw] px-4 xl:px-0">
            {displayTitle}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl xl:text-[1.4vw] px-4 xl:px-0">
            {displayDescription}
          </p>
        </div>

        <div className="divide-y divide-gray-100 xl:divide-y-[0.1vw]">
          {displaySkills.map((category, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] xl:grid-cols-[22vw_1fr] gap-4 md:gap-8 xl:gap-[3vw] py-6 md:py-8 xl:py-[2.5vw] items-start md:items-center">
              <h3 className="text-lg md:text-xl xl:text-[1.6vw] font-semibold text-gray-800">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3 xl:gap-[1vw] md:justify-end">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-4 py-2 xl:px-[1.5vw] xl:py-[0.8vw] rounded-full xl:rounded-[2vw] text-sm xl:text-[1.1vw] font-medium ${category.colors[sIdx] || 'bg-gray-100 text-gray-700'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
