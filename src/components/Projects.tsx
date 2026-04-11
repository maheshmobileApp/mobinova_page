import React from "react";
import { PROJECTS } from "../constants";

const ProjectsSection: React.FC = () => {
  const doubled = [...PROJECTS, ...PROJECTS];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">PROJECTS</p>
          <h2 className="text-3xl font-bold">Our Recent Work</h2>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { animation: marquee 18s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>

        <div className="overflow-hidden">
          <div className="flex gap-6 pb-4 marquee-track" style={{ width: "max-content" }}>
            {doubled.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white rounded-2xl border border-blue-100 p-5 flex items-center justify-between 
             shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Left Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition">
                    {project.name}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 flex items-center gap-1"
                  >
                    View App
                    <span className="transform group-hover:translate-x-1 transition">→</span>
                  </a>
                </div>

                {/* Logo with Background */}
                <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-blue-50 transition">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
