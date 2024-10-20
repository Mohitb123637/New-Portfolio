import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import SocialIcons from './SocialIcons';
import { Link } from 'react-scroll';
import { ArrowDown } from './Icons';
import AnimatedWrapper from './ui/AnimationWrapper';

const Home = () => {
  const animations = {
    typewriter: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      name="Home"
      className="pt-10 h-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-gray-800"
    >
      <div className="container flex flex-col lg:flex-row items-center justify-between w-[90vw] lg:w-[70vw] mx-auto space-y-8 lg:space-y-0">
        {/* Right Section - Image (on desktop) */}
        <div className="flex-1 flex justify-center items-center p-10 order-1 lg:order-2">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 bg-[#343a46] shadow-xl transform transition-transform duration-500 hover:scale-105">
            <AnimatedWrapper>
              <img
                src="https://img.freepik.com/premium-photo/fashionable-young-man-sketchstyle-vector-illustration_1114005-892.jpg"
                alt="Mohit"
                className="object-cover w-full h-full"
              />
            </AnimatedWrapper>
          </div>
        </div>

        {/* Left Section - Text (on desktop) */}
        <div className="flex-1 text-left text-white p-10 order-2 lg:order-1">
          <AnimatedWrapper delay={0.2}>
            <h1 className="text-4xl lg:text-8xl font-bold tracking-tight">
              Hi There,
            </h1>
            <h2 className="text-2xl lg:text-6xl mt-4 text-gray-200 font-semibold">
              I'm{' '}
              <span className="text-blue-500 font-semibold">
                Mohit Bhandari
              </span>
            </h2>
          </AnimatedWrapper>
          <motion.div
            {...animations.typewriter}
            className="typewriter-wrapper text-xl lg:text-2xl mt-4"
          >
            <AnimatedWrapper delay={0.35}>
              <Typewriter
                options={{
                  strings: [
                    'A Developer....',
                    'MERN Stack Developer....',
                    'A Creator....',
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'typewriterpara',
                }}
              />
            </AnimatedWrapper>
          </motion.div>
          <div className="py-5">
            <AnimatedWrapper delay={0.45}>
              <Link
                to="About"
                smooth
                duration={500}
                className="z-30 group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3 rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-40 relative"
              >
                <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out">
                  Hire Me
                </span>
                <span className="absolute z-30 right-5 sm:-translate-y-7 sm:group-hover:translate-y-0 sm:scale-0 transition-all group-hover:scale-125 ease-in delay-200 animate-pulse duration-500">
                  <ArrowDown />
                </span>
              </Link>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Home;
