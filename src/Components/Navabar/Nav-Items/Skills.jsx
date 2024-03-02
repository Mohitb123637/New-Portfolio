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
} from 'react-icons/si';

const Skills = () => {
  return (
    <div>
      <h1 className="heading">Skills</h1>
      <div className="skills-container">
        <div className="frontend">
          <h1>Frontend</h1>
          <h3>HTML</h3>
          <FaHtml5 />
          <h3>CSS </h3>
          <FaCss3 />
          <h3>Tailwind</h3>
          <SiTailwindcss />
          <h3>Bootstrap</h3>
          <FaBootstrap />
          <h3>JavaScript</h3>
          <IoLogoJavascript />
          <h3>React</h3>
          <FaReact />
        </div>
        <div className="backend">
          <h1>Backend</h1>
          <h3>Node Js</h3>
          <FaNode />
          <h3>Express Js</h3>
          <SiExpress />
          <h3>Mongo Db</h3>
          <SiMongodb />
          <h3>Fire Base</h3>
          <SiFirebase />
        </div>
        <div className="tools">
          <h1>Tools I use</h1>
          <h3>Git</h3>
          <FaGit />
          <h3>Github</h3>
          <FaGithub />
          <h3>Vercel</h3>
          <SiVercel />
          <h3>Postman</h3>
          <SiPostman />
        </div>
      </div>
    </div>
  );
};

export default Skills;
