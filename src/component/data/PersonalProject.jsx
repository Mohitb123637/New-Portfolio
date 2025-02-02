import Intellicon from '../../assets/projects/intellicon.png';
import VoteAi from '../../assets/projects/Voting.png';
import bhagwat from '../../assets/projects/bhagwat.png';
import portfolio from '../../assets/projects/portfolio.png';
import github from '../../assets/projects/githubp.png';

const PersonalProjects = [
  {
    img: Intellicon,
    name: 'Intellicon Ai Chat App',
    demo: 'https://intellicon.netlify.app/',
    code: 'https://github.com/Mohitb123637/Ai-chat-app-frontend',
    description:
      'Intellicon is an AI-driven chat application built using Vite, React, MongoDB, and Express.js. It leverages Google Gemini AI API to deliver intelligent, real-time conversations, making it ideal for virtual assistants and customer support. The frontend, styled with DaisyUI, provides a sleek and modern user experience. The app backend ensures efficient data handling, with MongoDB serving as the database and Express.js powering the APIs for smooth interaction between the AI and users',
    style: {
      shadow: 'shadow-[#3498AB]',
      cover: 'from-[#3498AB]',
      display: ' hidden group-hover:flex',
    },
  },
  {
    img: VoteAi,
    name: 'Vote Ai',
    demo: 'https://mern-voting.netlify.app/',
    code: 'https://github.com/Mohitb123637/voting',
    description:
      'VoteAI is a secure and innovative voting application built using the MERN stack, It allows users to cast their votes securely by verifying their identity through their Aadhar card.',
    style: {
      shadow: 'shadow-[#5E4746]',
      cover: 'from-[#5E4746]',
      display: ' hidden group-hover:flex',
    },
  },
  {
    img: bhagwat,
    name: 'bhagavad gita',
    demo: 'https://cozy-tapioca-a555f0.netlify.app/',
    code: 'https://github.com/Mohitb123637/bhagavadGeeta',
    description:
      'This is the source code of my Bhagavad Geeta Book Project which i made using React js it has chapter 1 and verse 8 and i will add more verse and chapter after some times and it is not responsive for mobile device',
    style: {
      shadow: 'shadow-[#FB923C]',
      cover: 'from-[#FB923C]',
      display: ' hidden group-hover:flex',
    },
  },
  {
    img: portfolio,
    name: 'MyFolio',
    demo: 'https://steady-travesseiro-7a9754.netlify.app/',
    code: 'https://github.com/Mohitb123637/New-Portfolio',
    description:
      'MyFolio: A personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Flowbite, featuring dynamic animations and smooth UI transitions. The contact form is powered by EmailJS for seamless communication.',
    style: {
      shadow: 'shadow-[#23CEEE]',
      cover: 'from-[#23CEEE]',
      display: ' hidden group-hover:flex',
    },
  },

  {
    img: github,
    name: 'Github Profile Finder',
    demo: 'https://app.netlify.com/sites/steady-travesseiro-7a9754/overview',
    code: 'https://github.com/Mohitb123637/gitHubProfileDetails',
    description:
      'GitHub Profile Finder is a simple web application that enables users to find GitHub profiles by entering a username. The app displays key details such as the total number of repositories, followers, and following count, along with the users name, location',
    style: {
      shadow: 'shadow-[#F8FAFC]',
      cover: 'from-[#F8FAFC]',
      display: ' hidden group-hover:flex',
    },
  },
];
export default PersonalProjects;
