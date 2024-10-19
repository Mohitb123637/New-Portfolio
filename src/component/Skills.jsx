import React from 'react';
import AnimatedWrapper from './ui/AnimationWrapper';
import mySkills from './data/mySkills';
import Skill from './Skill';

const Skills = () => {
  return (
    <div
      name="Skills"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 via-gray-950 to-black text-white"
    >
      <div className="container w-[90vw] lg:w-[70vw] mx-auto flex flex-col">
        <AnimatedWrapper>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 my-4 underline">
            Skills
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-200 my-4">
            These are the Technologies I've worked with
          </h2>
        </AnimatedWrapper>

        <AnimatedWrapper>
          <div className="py-2 xs:p-4 rounded-lg bg-gray-900">
            <div className="max-w-[80vw] py-4 px-8 sm:max-w-[60vw] mx-auto grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4  xs:px-4 sm:px-0">
              {mySkills.map((skill) => (
                <AnimatedWrapper
                  key={skill.name}
                  animateFrom="bottom"
                  delay={1.0}
                >
                  <Skill skill={skill} />
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Skills;
