import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "../NavItemsStyle/about.scss";

const About = () => {
  return (
    <div className="main">
      <section className="section1">
        <div className="aboutme">
          <h2>Know Who I'M</h2>
          <h3>
            Hi, I am Mohit bhandari from Tehri Garhwal Uttarakhand, India. and I
            have completed Master of science in Infromation technology in 2023.
          </h3>
          <p>
            I'm a passionate React js developer having an experience of
            developing Front end applications with React.JS. I have a strong
            interest in learning new technologies and implementing them in my
            projects. I'm a self-motivated and hardworking individual who is
            always ready to learn new things and work in a team.
          </p>
          <p className="additional">Apart from coding, some other activities that I love to do!</p>
          <h3>
            <FaArrowAltCircleRight />
            Playing Games
          </h3>
          <h3>
            <FaArrowAltCircleRight />
            Travelling
          </h3>
          <h3>
            <FaArrowAltCircleRight />
            Cooking
          </h3>
        </div>
        <img src="/about.png" alt="" />
      </section>
      <section className="section2">
        <h1>What i do,</h1>
        <div className="box1">
          <h3>Front end Development</h3>
          <p>
            Frontend Developer specializing in building modern and dynamic user
            interfaces for web applications using React js
          </p>
          <div className="technology">
            <img src="/technology/html.png" alt="" />
            <img src="/technology/css.png" alt="" />
            <img src="/technology/ts.png" alt="" />
            <img src="/technology/js.png" alt="" />
            <img src="/technology/react.png" alt="" />
          </div>
        </div>
        <div className="box1">
          <h3>Back end Development</h3>
          <p>
            Skilled in Node.js (Express.Js) and MongoDB. Passionate about
            building efficient and scalable server-side solutions. Eager to
            contribute and grow in a dynamic development environment."
          </p>
          <div className="technology">
            <img src="/technology/node.png" alt="" />
            <img src="/technology/express.png" alt="" />
            <img src="/technology/mongo.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
