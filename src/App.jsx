import React from 'react';
import Navbar from './Components/Navabar/Navbar';
import Home from './Components/Navabar/Nav-Items/Home';
import Skills from './Components/Navabar/Nav-Items/Skills';
import About from './Components/Navabar/Nav-Items/About';
import Project from './Components/Navabar/Nav-Items/Project';
import Contact from './Components/Navabar/Nav-Items/Contact';
import Footer from './Components/Navabar/Nav-Items/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
