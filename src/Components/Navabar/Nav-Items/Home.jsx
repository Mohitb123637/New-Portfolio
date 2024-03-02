/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import CV from '../../../../public/cv/CV.pdf';
import '../NavItemsStyle/home.scss';

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: '-100%',
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
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
        <div className="socialMedia">
          <a
            href="https://www.linkedin.com/in/mohit-bhandari-446a822a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="/"
          >
            <img src="/linkdin.png" alt="linkdin" />
          </a>
          <a href="https://www.instagram.com/mohitb12363/" target="/">
            <img src="/instagram.png" alt="Facebook" />
          </a>
          <a href="https://github.com/Mohitb123637" target="/">
            <img src="/github.png" alt="github" />
          </a>
          <a href="www.facebook.com" target="_blank">
            <img src="/facebook.png" alt="Facebook" />
          </a>
        </div>
        <motion.h1 {...animations.h1}>
          Hi There!{' '}
          <span className="wave" role="img">
            👋🏻
          </span>
          <h1
            style={{
              color: 'rgb(90, 11, 95)',
              margin: '1rem',
              fontFamily: 'serif',
            }}
          >
            I'M MOHIT BHANDARI
          </h1>
        </motion.h1>
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

        <button className="buttons">
          <button onClick={handleHireClick}>Hire me</button>
          <button onClick={downloadCv}>Download CV</button>
        </button>
      </section>
    </div>
  );
};

export default Home;
