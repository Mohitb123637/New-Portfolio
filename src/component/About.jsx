import { Download } from './Icons';
import resume from '.././assets/CV...pdf';
import React from 'react';
import AnimatedWrapper from './ui/AnimationWrapper';

const About = () => {
  return (
    <div
      name="About"
      className="pt-8 h-full min-h-screen bg-gradient-to-b from-gray-800 via-gray-950 to-black "
    >
      <div className="container w-[90vw] lg:w-[70vw] mx-auto lex flex-col  ">
        <AnimatedWrapper>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 mb-8 underline ">
            Get to Know Me
          </h1>
        </AnimatedWrapper>
        <div className="flex flex-col  items-center justify-center w-[90vw] lg:w-[70vw] mx-auto my-5">
          {/* Left Section - Image */}
          <div className="flex-1 flex justify-center mb-6 lg:mb-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transform transition-transform duration-500 hover:scale-105 my-10">
              <AnimatedWrapper animateFrom="bottom">
                <img
                  src="https://img.freepik.com/premium-photo/fashionable-young-man-sketchstyle-vector-illustration_1114005-892.jpg"
                  alt="Mohit Bhandari"
                  className="object-cover w-full h-full"
                />
              </AnimatedWrapper>
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="flex-1 text-left text-white p-6">
            <AnimatedWrapper animateFrom="bottom">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                Hi, I am{' '}
                <span className="text-blue-500 font-semibold">
                  Mohit Bhandari
                </span>
              </h2>
            </AnimatedWrapper>
            <p className="text-xl lg:text-2xl mb-4 text-gray-400 ">
              I have completed a Master of Science in Information Technology in
              2023.
            </p>
            <AnimatedWrapper>
              <p className="text-xl lg:text-2xl text-gray-400 mb-4">
                I'm a passionate MERN stack developer with experience in
                building front-end applications using React.js. I have a strong
                interest in learning new technologies and implementing them in
                my projects.
              </p>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <p className="text-xl lg:text-2xl text-gray-400 ">
                I'm a self-motivated and hardworking individual, always eager to
                learn new things and collaborate in a team environment.
              </p>
            </AnimatedWrapper>
            <div className="py-5">
              <AnimatedWrapper>
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  download={true}
                  className="z-30  group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-36 relative"
                >
                  <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out">
                    Resume
                  </span>
                  <span className="absolute right-5 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-pulse duration-500 ">
                    <Download />
                  </span>
                </a>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default About;
