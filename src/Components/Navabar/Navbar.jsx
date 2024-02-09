// Navbar.jsx

import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"; // Import your SCSS file

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickedNav = () => {
    setClicked(!clicked);
  };

  const handleNavItemClick = () => {
    // Close the mobile navigation when a navigation item is clicked
    setClicked(false);
  };

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="wrapper">
        <span>
          <Link to="/">MB</Link>
        </span>
        <nav className={`nav-items ${clicked ? "visible" : "hidden"}`}>
          <ul>
            <li onClick={handleNavItemClick} className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleNavItemClick} className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={handleNavItemClick} className={location.pathname === "/skills" ? "active" : ""}>
              <Link to="/skills">Skills</Link>
            </li>
            <li onClick={handleNavItemClick} className={location.pathname === "/projects" ? "active" : ""}>
              <Link to="/projects">Projects</Link>
            </li>
            <li onClick={handleNavItemClick} className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="mobile">
          <i
            id="bar"
            className={clicked ? "close-icon" : "menu-icon"}
            onClick={clickedNav}
          >
            {clicked ? <IoClose /> : <IoMenu />}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
