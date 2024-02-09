import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "../NavItemsStyle/home.scss";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  const handleHireClick = () => {
    const emailAddress = "codewithbhandari@gmail.com";
    const subject = "Interested in Hiring You";
    const body = "Hello, I'm interested in hiring your services.";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="home">
      <section className="container1">
        <div className="socialMedia">
          <a href="/" target="_blank">
            <img src="/instagram.png" alt="Facebook" />
          </a>
          <a href="/" target="_blank">
            <img src="/dribbble.png" alt="dribble" />
          </a>
          <a href="/" target="_blank">
            <img src="/youtube.png" alt="Facebook" />
          </a>
          <a href="/" target="_blank">
            <img src="/facebook.png" alt="Facebook" />
          </a>
        </div>
        <motion.h1 {...animations.h1}>
          Hi There! <span className="wave" role="img">
                  👋🏻
                </span>
           <h1 style={{color: "rgb(90, 11, 95)", margin:"1rem", fontFamily: "serif" }}>I'M MOHIT BHANDARI</h1>
        </motion.h1>
        <Typewriter
          options={{
            strings: [
              "A Developer....",
              "Software Developer",
              "MERN Stack Developer....",
              "A Creator....",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriterpara",
          }}
        />

        <button className="buttons">
          <button onClick={handleHireClick}>Hire me</button>
          <button>Download CV</button>
        </button>
      </section>
    </div>
  );
};

export default Home;
