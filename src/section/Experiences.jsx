import React from "react";
import ExperiencesCard from "../components/ExperiencesCard";

const works = [
  {
    date: "2026 - Present",
    title: "Hardware Programmer, Geoseismal Research Center",
    desc: "Built embedded monitoring systems, including a pipe intrusion detection system using Raspberry Pi Pico, ADXL345 vibration sensors, a 5-node LoRa network (up to 1 km) and ML-based vibration classification with a FastAPI + WebSocket real-time dashboard. Also developed a full-stack web app to control and monitor an HPA power supply over Modbus, and deployed a 5-unit Raspberry Shake seismic network over ZeroTier with CAPS streaming.",
    tags: ["LoRa", "Modbus", "FastAPI", "MicroPython"],
  },
  {
    date: "2026 - Present",
    title: "Software Developer, Hompimpa Photobooth",
    desc: "Developing an end-to-end photobooth ecosystem: an Electron + React desktop app with Canon camera integration via gPhoto2 (USB control, HDMI live preview), a client photo gallery website, and a monitoring dashboard, all deployed on a self-hosted public server with no cloud rental cost.",
    tags: ["Electron", "React", "gPhoto2"],
  },
  {
    date: "2026",
    title: "Freelance Developer, POS App for Toko Podomoro",
    desc: "Designed and built a cross-platform desktop point-of-sale app for a grocery store, covering sales recording, SQL database design and custom-formatted PDF reports. Delivered in one month from requirements analysis to production, and still in daily use.",
    tags: ["Electron", "React", "SQL"],
  },
  {
    date: "2024",
    title: "Technical Team Lead, UGM x PT Stechoq Robotika Indonesia",
    desc: "Led a cross-functional team of 20+ students in developing humanoid, quadruped, and mobile robot platforms, coordinating system design, hardware integration, and software development. Supervised the Vision Division: built a MobileNet-based object detection system integrated into a mobile app with live camera streaming from robot to smartphone for real-time processing.",
    tags: ["ROS2", "YOLOv8"],
  },
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
