import React, { Suspense, memo } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Memoize the ProjectCard component to prevent unnecessary re-renders
const ProjectCard = memo(({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="w-full">
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        {/* Card Container */}
        <div className="bg-[#131313] p-4 md:p-5 rounded-2xl flex flex-col group h-[400px] sm:h-[450px]">
          {/* Image container with lazy loading */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl transition duration-300 group-hover:opacity-30"
              loading="lazy"  // Lazy loading the images
            />

            {/* Description Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
              {/* Render description as a list of bullet points */}
              <ul className="text-gray-300 text-[12px] sm:text-[14px]">
                {description.map((desc, index) => (
                  <li key={index} className="list-disc pl-4">{desc}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>

            {/* GitHub Link (Only on Hover) */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          {/* Title (Always Visible) */}
          <h3 className="mt-4 text-white font-bold text-[18px] sm:text-[24px] text-center">{name}</h3>
        </div>
      </div>
    </div>
  );
});

const Works = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      <p></p>

      {/* Responsive Grid Layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {/* Suspense for lazy loading of the project data */}
        <Suspense fallback={<div>Loading projects...</div>}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </Suspense>
      </div>

      <br />
      <br />
      <p className={`${styles.sectionSubText} text-[#327fa8] text-center`}>For more projects, please visit the link below:</p>
      <div className="flex flex-col items-center space-y-4">
        <br />
        <a href="https://huggingface.co/saikiranmansa">
          <button className="px-6 py-2 text-white bg-gradient-to-r from-[#915EFF] to-[#FF7A00] hover:opacity-90 rounded-lg font-semibold">
            Hugging Face
          </button>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
