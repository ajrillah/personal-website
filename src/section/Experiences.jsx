import React from "react";
import ExperiencesCard from "../components/ExperiencesCard";

const works = [
  {
    date: "2024",
    title: "Software Engineer, PT Stechoq Robotika Indonesia",
    desc: "Conduct research and develop autonomous mobile robots that integrate ROS2, YOLOv8, and Stereolabs cameras to enhance functionality and adaptability. The primary focus is on implementing advanced object detection capabilities, allowing the robot to navigate autonomously while effectively avoiding obstacles.",
    tags: ["ROS2", "YOLOv8"],
  },
  {
    date: "2024",
    title: "Hardware Programmer, GPS Tracker Projects",
    desc: "I acted as an electronics specialist and programmer in the development of a GPS tracker using Arduino and a Nextion display for farmer tracking. I was responsible for designing and implementing the electronic systems for accurate location tracking, aiming to monitor farmers in hazardous areas.",
    tags: ["ESP-32", "Arduino"],
  },
  {
    date: "2023-2024",
    title: "Vision Pogrammer, Gadjah Mada Robotic Team",
    desc: "Developed a program to detect the goalpost, ball, and boundary line using YOLOv5 and OpenCV to enhance the autonomous soccer robot for the Gadjah Mada Robotics Team. This involved training the YOLOv5 model for accurate object detection and integrating it with OpenCV for real-time image processing and analysis.",
    tags: ["OpenCV", "YOLOv5"],
  },
  {
    date: "2023",
    title: "User Interface Developer, Gasbadra Electric Motorcycle",
    desc: "Responsible for developing the dashboard from both a programming and electronics perspective to enhance performance and control in the Electric Motorcycle Design Competition, and successfully ranked in the top 10 in the PLN ICE 2023 competition.",
    tags: ["Arduino"],
  },
];

const Experiences = () => {
  return (
    <section className="pt-7 mb-15 lg:pt-30" id="experiences">
      <div className="container mx-auto max-w-screen-xl px-6 md:px-12 md:py-4 lg:px-18">
        <h4 className="paragraf text-xl flex lg:justify-center font-semibold lg:text-3xl lg:mx-4 text-zinc-300/90 my-5">
          Experiences
        </h4>
        <div className="grid gap-x-4 gap-y-10 lg:grid-cols-2">
          {works.map(({ date, title, desc, tags }, key) => (
            <ExperiencesCard
              key={key}
              date={date}
              title={title}
              desc={desc}
              tags={tags}
              className={key % 2 === 1 ? "mt-20" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
