import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
