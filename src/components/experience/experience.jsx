import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line - always exactly centered, thin, behind everything */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-white h-full z-0"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-center mb-20 ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            {/* Timeline Circle - exactly centered on the line */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card - alternates left/right of the line */}
            <div
              className={`w-[42%] sm:w-[40%] p-4 sm:p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "mr-[4%] sm:mr-[7%]" : "ml-[4%] sm:ml-[7%]"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    {experience.certificateLink ? (
                      
                       <a  href={experience.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#a855f7] hover:text-[#c084fc] underline underline-offset-2 transition"
                      >
                        {experience.company} ↗
                      </a>
                    ) : (
                      <h4 className="text-sm text-gray-300">
                        {experience.company}
                      </h4>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-400">
                {experience.desc}
              </p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;