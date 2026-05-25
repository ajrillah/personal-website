import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [

  {
    imgSrc: "../images/4.jpg",
    title: "Recycle Waste Classifier",
    tags: ["NodeJs", "React", "ExpressJs", "MongoDB"],
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
    imgSrc: "../images/1.jpeg",
    title: "Actuaria Academy Website",
    tags: ["NodeJs", "React", "ExpressJs", "MongoDB"],
    projectLink: "https://recycle-waste-classifier.up.railway.app/",
    desc: "I managed website development as backend database operations using Node.js and MongoDB. My role included implementing MongoDB to ensure seamless data storage, retrieval, and management on the website.",
  },
  {
    imgSrc: "../images/3.jpeg",
    title: "Tailor Website",
    tags: ["HTML", "CSS"],
    projectLink: "",
    desc: " I built a tailor website using HTML and CSS, focusing on clean and structured layouts. My responsibilities included implementing a visually appealing design, ensuring cross-browser compatibility, and optimizing page responsiveness for various devices.",
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
