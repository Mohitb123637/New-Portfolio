import Intellicon from '../../assets/projects/intellicon.png';
import VoteAi from '../../assets/projects/Voting.png';
import bhagwat from '../../assets/projects/bhagwat.png';
import portfolio from '../../assets/projects/portfolio.png';

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
    demo: 'https://mohitb12363.netlify.app/',
    code: 'https://github.com/Mohitb123637/New-Portfolio',
    description:
      'MyFolio: A personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Flowbite, featuring dynamic animations and smooth UI transitions. The contact form is powered by EmailJS for seamless communication.',
    style: {
      shadow: 'shadow-[#23CEEE]',
      cover: 'from-[#23CEEE]',
      display: ' hidden group-hover:flex',
    },
  },
  // {
  //   // img: Dev_Notes,
  //   name: 'Dev Notes',
  //   demo: 'https://dev-notes-793.vercel.app/',
  //   code: 'https://github.com/dhawal-793/Dev_Notes',
  //   description:
  //     'DevNotes is a Simple Notes App Created using MERN Stack with complete user Authentication.',
  //   style: {
  //     shadow: 'shadow-[#F8FAFC]',
  //     cover: 'from-[#F8FAFC]',
  //     display: ' hidden group-hover:flex',
  //   },
  // },

  // {
  //   // img: Spam_Detector,
  //   name: 'Spam Detector',
  //   demo: 'https://spam-detector-793.vercel.app',
  //   code: 'https://github.com/dhawal-793/spam-detection-next',
  //   description:
  //     'Spam Detector is a Hack-A-Vishkar hackathon project organised in Geetanjali Collage of Technical Studies, on spam email detection system using custom ml models.',
  //   style: {
  //     shadow: 'shadow-[#277AF8]',
  //     cover: 'from-[#277AF8]',
  //     display: ' hidden group-hover:flex',
  //   },
  // },
  //   {
  //     img: FAC,
  //     name: 'FontAwesome Clone',
  //     demo: 'https://dhawal-793.github.io/Font-Awesome-Clone/',
  //     code: 'https://github.com/dhawal-793/Font-Awesome-Clone',
  //     description:
  //       'FontAwesome Clone is a Project based on Fontawesome.com, created using React Js and Tailwind CSS.',
  //     style: {
  //       shadow: 'shadow-[#FFD43B]',
  //       cover: 'from-[#FFD43B]',
  //       display: ' hidden group-hover:flex',
  //     },
  //   },
  //   {
  //     img: Simon_Game,
  //     name: 'Simon Game',
  //     demo: 'https://dhawal-793.github.io/Simon-Game/',
  //     code: 'https://github.com/dhawal-793/Simon-Game',
  //     description:
  //       'Simon Game is a very simple game created using React Js and Tailwind CSS.',
  //     style: {
  //       shadow: 'shadow-[#011F3F]',
  //       cover: 'from-[#011F3F]',
  //       display: ' hidden group-hover:flex',
  //     },
  //   },
  //   {
  //     img: Todo_App,
  //     name: 'TODO APP',
  //     demo: 'https://meen-to-do-app.onrender.com/',
  //     code: 'https://github.com/dhawal-793/MEEN-TODO-APP',
  //     description:
  //       'MEEN ToDO App is a very simple Todo App created using MongoDb,Express Js EJs and Node Js.',
  //     style: {
  //       shadow: 'shadow-[#A582E2]',
  //       cover: 'from-[#A582E2]',
  //       display: ' hidden group-hover:flex',
  //     },
  //   },
  //   {
  //     img: ECF,
  //     name: 'Ecommerce Frontend',
  //     demo: 'https://dhawal-793.github.io/E-Commerce-Website-Front-End-Design/',
  //     code: 'https://github.com/dhawal-793/E-Commerce-Website-Front-End-Design',
  //     description:
  //       'Frontend Design of an Ecommerce Website created using HTML CSS JS and Bootstrap.',
  //     style: {
  //       shadow: 'shadow-[#CEC3FB]',
  //       cover: 'from-[#CEC3FB]',
  //       display: ' hidden group-hover:flex',
  //     },
  //   },
  //   {
  //     img: CLI_TMA,
  //     name: 'Task Manager CLI',
  //     demo: 'https://github.com/dhawal-793/Command-line-application-for-Task-Management',
  //     code: 'https://github.com/dhawal-793/Command-line-application-for-Task-Management',
  //     description:
  //       'This is a Task Management CLI App created using C++, here user can create, read, Update and delete tasks.',
  //     style: {
  //       shadow: 'shadow-[#763145]',
  //       cover: 'from-[#763145]',
  //       display: ' hidden group-hover:flex',
  //     },
  //   },
  // {
  //     img: "",
  //     name: "WordCloud Generator",
  //     demo: "https://github.com/dhawal-793/Wordcloud-maker",
  //     code: "https://github.com/dhawal-793/Wordcloud-maker",
  //     description: "This is a WordCloud Maker, Created using Python. User can create WordCloud by giving paragraph of text as Input.   ",
  //     style: {
  //         shadow: "shadow-emerald-500",
  //         cover: "from-emerald-500",
  // display:" hidden group-hover:flex"
  //     }
  // },
];
export default PersonalProjects;
