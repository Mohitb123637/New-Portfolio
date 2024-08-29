import '../NavItemsStyle/skills.scss';
import { FaHtml5, FaGithub, FaGit } from 'react-icons/fa6';
import { FaCss3, FaNode, FaReact, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVisualstudio,
  SiVercel,
  SiPostman,
  SiNextdotjs,
} from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1 className="heading">Skills</h1>
      <div className="skills-container">
        <div className="skills-section frontend">
          <h2 className="section-title">Frontend</h2>
          <div className="skill-item">
            <FaHtml5 />
            <h3>HTML</h3>
          </div>
          <div className="skill-item">
            <FaCss3 />
            <h3>CSS</h3>
          </div>
          <div className="skill-item">
            <SiTailwindcss />
            <h3>Tailwind</h3>
          </div>
          <div className="skill-item">
            <FaBootstrap />
            <h3>Bootstrap</h3>
          </div>
          <div className="skill-item">
            <IoLogoJavascript />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-item">
            <FaReact />
            <h3>React</h3>
          </div>
          <div className="skill-item">
            <SiNextdotjs />
            <h3>Next.js</h3>
          </div>
        </div>
        <div className="skills-section backend">
          <h2 className="section-title">Backend</h2>
          <div className="skill-item">
            <FaNode />
            <h3>Node.js</h3>
          </div>
          <div className="skill-item">
            <SiExpress />
            <h3>Express.js</h3>
          </div>
          <div className="skill-item">
            <SiMongodb />
            <h3>MongoDB</h3>
          </div>
          <div className="skill-item">
            <SiFirebase />
            <h3>Firebase</h3>
          </div>
        </div>
        <div className="skills-section tools">
          <h2 className="section-title">Tools I Use</h2>
          <div className="skill-item">
            <FaGit />
            <h3>Git</h3>
          </div>
          <div className="skill-item">
            <FaGithub />
            <h3>GitHub</h3>
          </div>
          <div className="skill-item">
            <SiVercel />
            <h3>Vercel</h3>
          </div>
          <div className="skill-item">
            <SiPostman />
            <h3>Postman</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
