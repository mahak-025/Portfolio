import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here
          are the details of my academic background
        </p>
      </div>

      {/* Single Education Card - centered */}
      <div className="flex justify-center">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full max-w-2xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            {/* Flex container for image and text */}
            <div className="flex items-center space-x-6">
              {/* School Logo/Image */}
              <div className="w-16 h-16 sm:w-24 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Degree, School Name, and Date */}
              <div className="flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
            <p className="mt-4 text-gray-400">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;