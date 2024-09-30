import React from 'react';
import LinkedIn, { GitHub, GMail, Instagram, Map } from './Icons';
import me from '.././assets/me/me.jpg';

const Footer = () => {
  return (
    <div className="pt-10 w-full flex flex-col items-center bg-gradient-to-b from-gray-800 via-gray-950 to-black text-white">
      <footer className="container max-w-[80vw] mx-auto flex flex-col md:flex-row justify-between items-center p-6 space-y-6 md:space-y-0">
        <div className="flex flex-col items-center text-center md:text-left mb-6 md:mb-0">
          <img
            src={me}
            alt="Founder"
            className="rounded-full object-contain w-28 h-28 md:w-32 md:h-32 mb-4 border-4 border-blue-500 shadow-lg hover:shadow-2xl transition-transform duration-300"
          />
          <h2 className="text-2xl md:text-3xl font-bold">Mohit Bhandari</h2>
          <p className="text-md md:text-lg text-gray-300 max-w-xs">
            MERN <span className="text-blue-500 font-semibold">Developer</span>
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold">Contact Info</h1>
          <div className="text-sm md:text-md space-y-3">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <GMail className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
              codewithbhandari@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Map className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
              <span>Dehradun, Uttarakhand, India</span>
            </p>
          </div>
        </div>

        <aside className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-xl font-semibold">Social Media</h2>
          <article className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/codewith-bhandari-446a822a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <LinkedIn className="w-6 h-6 md:w-8 md:h-8 hover:text-blue-500" />
            </a>
            <a
              href="https://instagram.com/mohitb12363"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="w-6 h-6 md:w-8 md:h-8 hover:text-blue-500" />
            </a>
            <a
              href="https://github.com/Mohitb123637"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <GitHub className="w-6 h-6 md:w-8 md:h-8 hover:text-blue-500" />
            </a>
          </article>
        </aside>
      </footer>

      <div className="bg-black py-4 w-full text-center">
        <p className="text-sm md:text-md text-gray-400">
          © {new Date().getFullYear()} Mohit Bhandari. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
