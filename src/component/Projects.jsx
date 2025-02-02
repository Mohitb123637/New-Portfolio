import React from 'react';
import PersonalProjects from './data/PersonalProject';
import { Code, Link } from './Icons';
import AnimatedWrapper from './ui/AnimationWrapper';

const Projects = () => {
  return (
    <div
      name="Projects"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-gray-950 to-gray-800 text-white pb-3"
    >
      <div className="container w-[90vw] lg:w-[70vw] mx-auto flex flex-col">
        <AnimatedWrapper>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 my-4 underline decoration-blue-400">
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
            <AnimatedWrapper key={project.name} animateFrom="bottom">
              <div
                key={index}
                className={`relative p-4 rounded-lg bg-gray-900 overflow-hidden ${project.style.shadow} flex flex-col h-[400px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-full mx-auto transition-all duration-300 border-2 border-gray-800 hover:border-blue-400 hover:shadow-[0px_0px_20px_rgba(0,255,255,0.3)]`}
              >
                {/* Cover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.style.cover} opacity-50`}
                ></div>

                {/* Image with fixed height and overlay */}
                <div className="relative w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover z-10"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl lg:text-2xl font-semibold z-10 text-blue-300">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="mt-2 mb-4 z-10 flex-grow overflow-hidden text-ellipsis line-clamp-3 overflow-y-auto text-gray-300">
                  {project.description}
                </p>

                {/* Links at the bottom */}
                <div className="mt-auto flex justify-between z-10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-all duration-300"
                  >
                    <span className="transition-transform duration-300 hover:scale-110">
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
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-all duration-300"
                  >
                    <span className="transition-transform duration-300 hover:scale-110">
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
