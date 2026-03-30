import React from "react";

// ✅ Type
type TechCategory = {
  title: string;
  items: string[];
};

// ✅ Data (Reusable)
const techStack: TechCategory[] = [
  {
    title: "MOBILE",
    items: ["Kotlin", "Swift", "React Native", "Flutter"],
  },
  {
    title: "FRONTEND",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    items: ["Node.js", "Python", "Java", ".NET"],
  },
  {
    title: "CLOUD & DEVOPS",
    items: ["AWS", "Azure", "Docker", "CI/CD"],
  },
];

const TechStackSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm tracking-wider mb-2">
            TECHNOLOGIES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tech Stack We Work With
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              {/* Title */}
              <h3 className="text-blue-600 font-semibold mb-4">
                {category.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;