import React from 'react';
import PersonalProjects from './data/PersonalProject';
import { Code, Link } from './Icons';
import AnimatedWrapper from './ui/AnimationWrapper';

const Projects = () => {
  return (
    <div
      name="Projects"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-gray-950 to-gray-800 text-white"
    >
      <div className="container w-[90vw] lg:w-[70vw] mx-auto flex flex-col">
        <AnimatedWrapper>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 my-4 underline">
            Projects
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-200 my-6">
            Check out some of My Projects
          </h2>
        </AnimatedWrapper>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PersonalProjects.map((project, index) => (
            <AnimatedWrapper
              key={project.name}
              animateFrom="bottom"
              delay={0.8}
            >
              <div
                key={index}
                className={`relative p-5 rounded-lg bg-gray-900 overflow-hidden ${project.style.shadow} flex flex-col h-[500px]`} // Set fixed height
              >
                {/* Cover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.style.cover} opacity-50`}
                ></div>

                {/* Image with fixed height */}
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-lg mb-4 z-10" // Fixed image height
                />

                {/* Project Title */}
                <h3 className="text-xl lg:text-2xl font-semibold z-10">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="mt-2 mb-4 z-10 flex-grow overflow-hidden text-ellipsis line-clamp-3 overflow-y-auto ">
                  {project.description}
                </p>

                {/* Links at the bottom */}
                <div className="mt-auto flex justify-between z-10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-500 hover:scale-105 transition-all duration-300"
                  >
                    <span className="transform hover:rotate-12 transition-transform duration-300">
                      <Link />
                    </span>
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-semibold">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-500 hover:scale-105 transition-all duration-300"
                  >
                    <span className="transform hover:rotate-12 transition-transform duration-300">
                      <Code />
                    </span>
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-semibold">
                      Source Code
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
