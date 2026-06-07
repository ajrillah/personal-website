// import React from "react";
// import TechstackCard from "../components/TechstackCard";
// import { SiJavascript, SiOpencv, SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";
// import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { BiLogoMongodb } from "react-icons/bi";




// const techstacks = [
//   {
//     imgSrc: "../images/1.jpeg",
//     title: "Actuaria Academy Website",
//     tags: ["NodeJs", "React", "ExpressJs", "MongoDB"],
//     projectLink: "https://musify-5al0.onrender.com/",
//     desc: "I managed website development as backend database operations using Node.js and MongoDB. My role included implementing MongoDB to ensure seamless data storage, retrieval, and management on the website.",
//   },
//   {
//     imgSrc: "../images/2.png",
//     title: "Personal Website",
//     tags: ["ReactJs", "Tailwind"],
//     projectLink: "https://pixstock-official.vercel.app/",
//     desc: "I developed a personal website using ReactJs and Tailwind, ensuring a responsive and modern UI. My role included managing state efficiently, optimizing component rendering, and integrating interactive features to enhance user experience.",
//   },
//   {
//     imgSrc: "../images/3.jpeg",
//     title: "Tailor Website",
//     tags: ["HTML", "CSS"],
//     projectLink: "",
//     desc: " I built a tailor website using HTML and CSS, focusing on clean and structured layouts. My responsibilities included implementing a visually appealing design, ensuring cross-browser compatibility, and optimizing page responsiveness for various devices.",
//   },
//   {
//     imgSrc: "../images/project-6.jpg",
//     title: "Personal Portfolio Website",
//     tags: ["NextJs", "ReactJs"],
//     projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
//     desc: "I created a personal portfolio website using NextJs and ReactJs to showcase my projects and skills. My role involved implementing server-side rendering for better performance, managing dynamic routing, and optimizing SEO to improve discoverability.",
//   },
// ];

// const Techstacks = () => {
//   return (
//     <section className="pt-7 lg:pt-70 mb-15" id="projects">
//       <div className="container mx-auto max-w-screen-xl px-6 md:px-12 md:py-4 lg:px-18">
//         <h4 className="paragraf text-xl flex justify-center font-semibold lg:text-3xl lg:mx-4 text-zinc-300/90 my-5">
//           Projects
//         </h4>
//         <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2">
//           {techstacks.map(({ imgSrc, title, tags, projectLink, desc }, key) => (
//             <TechstackCard
//               key={key}
//               imgSrc={imgSrc}
//               title={title}
//               tags={tags}
//               projectLink={projectLink}
//               desc={desc}
//             // classes="reveal-up"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Techstacks;

// import React from "react";
// import TechstackCard from "../components/TechstackCard";
// import { SiOpencv, SiNextdotjs, SiTailwindcss, SiExpress, SiRos, SiArduino, SiTensorflow, SiRaspberrypi } from "react-icons/si";
// import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
// import { BsJavascript } from "react-icons/bs";

import { VscCircuitBoard } from "react-icons/vsc"; // untuk ROS2 / embedded
import { FaMicrochip } from "react-icons/fa";       // untuk Raspberry Pi / ESP32
import React from "react";
import TechstackCard from "../components/TechstackCard";
import { SiJavascript, SiOpencv, SiNextdotjs, SiTailwindcss, SiExpress, SiRos, SiArduino, SiTensorflow, SiRaspberrypi, SiLinux, SiSocketdotio, SiTypescript } from "react-icons/si";
import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaRobot } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFastapi, SiDocker, SiLangchain, SiN8N } from "react-icons/si";

const techStacks = [
  {
    category: "Web & Backend",
    techs: [
      { name: "Node.js", type: "Runtime", icon: <FaNodeJs /> },
      { name: "Express.js", type: "Framework", icon: <SiExpress /> },
      { name: "MongoDB", type: "Database", icon: <BiLogoMongodb /> },
      { name: "React.js", type: "UI Library", icon: <FaReact /> },
      { name: "FastAPI", type: "Framework", icon: <SiFastapi /> },
    ],
  },
  {
    category: "AI & Computer Vision",
    techs: [
      { name: "YOLO", type: "Object Detection", icon: <SiOpencv /> },
      { name: "OpenCV", type: "Computer Vision", icon: <SiOpencv /> },
      { name: "TensorFlow", type: "Deep Learning", icon: <SiTensorflow /> },
      { name: "LangChain", type: "LLM Framework", icon: <SiLangchain /> },
    ],
  },
  {
    category: "Robotics & Embedded",
    techs: [
      { name: "ROS", type: "Robotics OS", icon: <FaRobot /> },             // pindah ke sini
      { name: "ROS2", type: "Robotics OS", icon: <SiRos /> },
      { name: "Arduino", type: "Microcontroller", icon: <SiArduino /> },
      { name: "Raspberry Pi", type: "Edge Computing", icon: <SiRaspberrypi /> },
      { name: "ESP32", type: "Microcontroller", icon: <SiArduino /> },
    ],
  },
  {
    category: "Programming",
    techs: [
      { name: "Python", type: "Language", icon: <FaPython /> },
      { name: "C++", type: "Language", icon: <TbBrandCpp /> },
      { name: "JavaScript", type: "Language", icon: <SiJavascript /> },
      { name: "TypeScript", type: "Language", icon: <SiTypescript /> },  // tambah

    ],
  },
  {
    category: "Tools",
    techs: [
      { name: "Linux", type: "Operating System", icon: <SiLinux /> },
      { name: "Git", type: "Version Control", icon: <FaGitAlt /> },
      { name: "GitHub", type: "Collaboration", icon: <FaGithub /> },  // tambah
      { name: "Docker", type: "Containerization", icon: <SiDocker /> },
      { name: "WebSocket", type: "Protocol", icon: <SiSocketdotio /> },
      { name: "n8n", type: "Workflow Automation", icon: <SiN8N /> },
    ],
  },
];

const Techstacks = () => {
  return (
    <section className="pt-7 lg:pt-20 mb-15" id="techstacks">
      <div className="container mx-auto max-w-screen-xl px-6 md:px-12 md:py-4 lg:px-18">
        <h4 className="paragraf text-xl flex justify-center font-semibold lg:text-3xl lg:mx-4 text-zinc-300/90 my-5">
          Tech Stack
        </h4>

        <div className="flex flex-col gap-8">
          {techStacks.map(({ category, techs }) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                {category}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {techs.map(({ name, type, icon }) => (
                  <TechstackCard key={name} name={name} type={type} icon={icon} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Techstacks;