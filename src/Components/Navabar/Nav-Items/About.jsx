/* eslint-disable react/no-unescaped-entities */

import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../NavItemsStyle/about.scss';

const About = () => {
  return (
    <div className="main">
      <section className="section1">
        <div className="aboutme">
          <h2 className="title">Get to Know Me</h2>
          <h3 className="intro">
            Hi, I am Mohit Bhandari from Tehri Garhwal, Uttarakhand, India. I
            have completed a Master of Science in Information Technology in
            2023.
          </h3>
          <p className="description">
            I'm a passionate React.js developer with experience in building
            front-end applications using React.js. I have a strong interest in
            learning new technologies and implementing them in my projects. I'm
            a self-motivated and hardworking individual, always eager to learn
            new things and collaborate in a team environment.
          </p>
          <p className="additional">Beyond coding, I enjoy:</p>
          <div className="activities">
            <h3>
              <FaArrowAltCircleRight className="icon" />
              Playing Games
            </h3>
            <h3>
              <FaArrowAltCircleRight className="icon" />
              Travelling
            </h3>
            <h3>
              <FaArrowAltCircleRight className="icon" />
              Cooking
            </h3>
          </div>
        </div>
        <img src="/about.png" alt="About Me" className="about-image" />
      </section>
      <section className="section2">
        <h1 className="heading">What I Do</h1>
        <div className="box-container">
          <div className="box1">
            <h3 className="subheading">Front End Development</h3>
            <p>
              I specialize in building modern and dynamic user interfaces for
              web applications using React.js.
            </p>
            <div className="technology">
              <img src="/technology/html.png" alt="HTML" />
              <img src="/technology/css.png" alt="CSS" />
              <img src="/technology/ts.png" alt="TypeScript" />
              <img src="/technology/js.png" alt="JavaScript" />
              <img src="/technology/react.png" alt="React" />
            </div>
          </div>
          <div className="box1">
            <h3 className="subheading">Back End Development</h3>
            <p>
              I am skilled in Node.js (Express.js) and MongoDB, passionate about
              building efficient and scalable server-side solutions.
            </p>
            <div className="technology">
              <img src="/technology/node.png" alt="Node.js" />
              <img src="/technology/express.png" alt="Express.js" />
              <img src="/technology/mongo.png" alt="MongoDB" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
