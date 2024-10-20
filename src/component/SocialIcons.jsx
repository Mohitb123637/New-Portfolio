import React from 'react';
import ContactInfo from './data/ContactInfo';
import AnimatedWrapper from './ui/AnimationWrapper';

const SocialIcons = () => {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center space-y-4 ml-2 z-50">
      {ContactInfo.map((contact) => (
        <a
          key={contact.id}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label={contact.name}
        >
          {/* Icon container */}
          <AnimatedWrapper>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 text-white">{contact.icon}</div>
            </div>
          </AnimatedWrapper>
          {/* Tooltip - Positioned on the right side of the icon */}
          <span className="absolute left-full top-1/4 transform -translate-y-1/2 ml-2 p-2 text-sm text-white font-semibold bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap border border-white border-opacity-30 group-hover:shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            {contact.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
