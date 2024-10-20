import React from 'react';
import { Link } from 'react-scroll';

const Navigation = ({ ulClass, liClass, handleClick }) => {
  const navLinks = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Projects',
    },
    {
      id: 4,
      link: 'Skills',
    },
    {
      id: 6,
      link: 'Contact',
    },
  ];

  return (
    <ul className={ulClass}>
      {navLinks.map(({ id, link, href }) => {
        return (
          <li
            key={id}
            className={`mx-4 py-2 capitalize font-medium  cursor-pointer text-gray-500 hover:scale-[1.15] border-b-2 border-transparent hover:border-b-gray-300 duration-500 hover:text-gray-300 ${liClass}`}
          >
            {id === 5 ? (
              <a href={href} target="_blank" rel="noferrer">
                {link}
              </a>
            ) : (
              <Link onClick={handleClick} to={link} smooth duration={100}>
                {' '}
                {link}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
