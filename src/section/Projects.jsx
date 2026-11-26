import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [

  {
    imgSrc: "../images/4.jpg",
    title: "Recycle Waste Classifier",
    tags: ["MobileNet", "OpenCV", "React", "Raspiberry Pi", "Linux", "Docker"],
    projectLink: "https://recycle-waste-classifier.up.railway.app/",
    desc: "Develop and trained an image classification model, achieving high accuracy on real-world conveyor-belt conditions using Raspberry Pi with mixed custom dataset.",
  },
  {
    imgSrc: "../images/2.png",
    title: "Personal Website",
    tags: ["ReactJs", "Tailwind"],
    projectLink: "",
    desc: "I developed a personal website using ReactJs and Tailwind, ensuring a responsive and modern UI. My role included managing state efficiently, optimizing component rendering, and integrating interactive features to enhance user experience.",
  },
  {
    imgSrc: "../images/fleetwatch.png",
    title: "Fleetwatch Robot Monitoring",
    tags: ["React", "TypeScript", "MQTT", "WebSocket"],
    projectLink: "https://ajrillah.github.io/Fleetwatch-Robot-Monitoring/",
    desc: "FleetWatch, Real-time Robot Fleet Dashboard using React, TypeScript, MQTT, WebSocket | Built a real-time fleet monitoring dashboard that streams robot telemetry (battery, position, status) via MQTT over WebSocket.",
  },
  {
    imgSrc: "../images/1.jpeg",
    title: "Actuaria Academy Website",
    tags: ["NodeJs", "MongoDB", "Typescript"],
    projectLink: "",
    desc: "I managed website development as backend database operations using Node.js and MongoDB. My role included implementing MongoDB to ensure seamless data storage, retrieval, and management on the website.",
  },
  {
    imgSrc: "../images/3.jpeg",
    title: "Tailor Website",
    tags: ["HTML", "CSS"],
    projectLink: "",
    desc: " I built a tailor website using HTML and CSS, focusing on clean and structured layouts. My responsibilities included implementing a visually appealing design, ensuring cross-browser compatibility, and optimizing page responsiveness for various devices.",
  },
  {
    imgSrc: "../images/robodu.jpg",
    title: "Technical Team Lead | UGM x PT Stechoq Robotika Indonesia",
    tags: ["Team Lead", "Robotics", "Supervision Vision Division"],
    projectLink: "",
    desc: "Led a cross-functional team of 20+ students in developing humanoid, quadruped, and mobile robot platforms, coordinating system design, hardware integration, and software development. Supervised the Vision Division: built a MobileNet-based object detection system integrated into a mobile app with live camera streaming from robot to smartphone for real-time processing.",
  },
  {
    imgSrc: "../images/amr.jpg",
    title: "Software Engineer | PT Stechoq Robotika Indonesia",
    tags: ["ROS2", "YOLOv8", " OpenCV", "Linux"],
    projectLink: "",
    desc: "Integrated ROS2, YOLOv8, and Stereolabs cameras to build a perception system enabling the mobile robot to detect obstacles and navigate autonomously in dynamic environments.Implemented computer vision and machine learning algorithms for robot perception, improving adaptability in unstructured real-world settings",
  },
  {
    imgSrc: "../images/altair.jpg",
    title: "Vision Programmer | Gadjah Mada Robotic Team",
    tags: ["YOLOv5", "OpenCV", "Linux", "Docker",],
    projectLink: "",
    desc: "Developed a real-time computer vision system for an autonomous soccer robot using YOLOv5 to detect goals and the soccer ball with high accuracy in competition environments. •	Integrated detection models with OpenCV for optimized real-time image processing, achieving reliable performance under competitive robotics conditions.",
  },
  {
    imgSrc: "../images/gps.jpeg",
    title: "Hardware Programmer | GPS Tracker Project",
    tags: ["Arduino", "GPS", "Lora"],
    projectLink: "",
    desc: "Designed an Arduino-based GPS tracking system with Nextion Display for real-time location visualization, aimed at improving safety for farmers working near mountainous areas. Integrated GPS modules with reliable communication protocols to ensure accurate and continuous location monitoring",
  },
];

const Projects = () => {
  return (
    <section className="pt-7 lg:pt-70 mb-15" id="projects">
      <div className="container mx-auto max-w-screen-xl px-6 md:px-12 md:py-4 lg:px-18">
        <h4 className="paragraf text-xl flex justify-center font-semibold lg:text-3xl lg:mx-4 text-zinc-300/90 my-5">
          Projects
        </h4>
        <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2">
          {projects.map(({ imgSrc, title, tags, projectLink, desc }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              desc={desc}
            // classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
