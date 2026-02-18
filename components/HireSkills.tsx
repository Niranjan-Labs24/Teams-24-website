"use client";

const skillsData = [
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
}

export default function HireSkills({ role = "Fullstack" }: HireSkillsProps) {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            10+ skills that {role} Developers at Teams24 are skilled at
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">
            {role} developers at Teams24 are skilled at JavaScript, NodeJS among others.
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {skillsData.map((category, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-4 md:gap-8 py-6 md:py-8 items-start md:items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3 md:justify-end">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${category.colors[sIdx] || 'bg-gray-100 text-gray-700'}`}
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
