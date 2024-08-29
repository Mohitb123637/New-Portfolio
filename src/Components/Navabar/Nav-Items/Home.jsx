/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import CV from '../Data/Mohit CV.pdf';
import '../NavItemsStyle/home.scss';

const Home = () => {
  const animations = {
    h1: {
      initial: { y: '-100%', opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 1, ease: 'easeOut' },
    },
    typewriter: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 1.5, delay: 0.5, ease: 'easeInOut' },
    },
  };

  const downloadCv = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Mohit_Bhandari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireClick = () => {
    const emailAddress = 'codewithbhandari@gmail.com';
    const subject = 'Interested in Hiring You';
    const body = "Hello, I'm interested in hiring your services.";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="home">
      <section className="container1">
        <motion.div className="socialMedia">
          <a
            href="https://www.linkedin.com/in/mohit-bhandari-446a822a0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkdin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/mohitb12363/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://github.com/Mohitb123637"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
        </motion.div>
        <motion.h1 {...animations.h1} style={{ color: 'red' }}>
          Hi There!{' '}
          <span className="wave" role="img" aria-label="wave">
            👋🏻
          </span>
          <h1 className="main-heading">I'M MOHIT BHANDARI</h1>
        </motion.h1>
        <motion.div {...animations.typewriter} className="typewriter-wrapper">
          <Typewriter
            options={{
              strings: [
                'A Developer....',
                'Software Developer',
                'MERN Stack Developer....',
                'A Creator....',
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: 'typewriterpara',
            }}
          />
        </motion.div>
        <div className="buttons">
          <button onClick={handleHireClick} className="button hire-button">
            Hire me
          </button>
          <button onClick={downloadCv} className="button download-button">
            Download CV
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
