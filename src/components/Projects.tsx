import React, { useState } from "react";
import ProjectCard from "./elements/ProjectCard";

// Carousel
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import Image from "next/image";
import projectOne from "../assets/project-one.jpeg";

import { SiJavascript } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";

import { BsCircle } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";

type Props = {};

const content = [
  {
    id: 1,
    title: "rvnb",
    link: "https://rvnb-rails.herokuapp.com/",
    description: `My first ever web application that I made during the Le Wagon web
    development bootcamp. This project was in collaboration with three
    other people, I learned a lot during the development of the project
    about both technical & management skills.`,
  },
  {
    id: 2,
    title: "rvnb",
    link: "https://stream-dream-demo-project.herokuapp.com/",
    description: `My first ever web application that I made during the Le Wagon web
    development bootcamp. This project was in collaboration with three
    other people, I learned a lot during the development of the project
    about both technical & management skills.`,
  },
];

const Projects = (props: Props) => {
  const [showCard, setShowCard] = useState(0);
  return (
    <div className="section h-screen wrapper flex flex-col items-center bg-rose-600">
      <h2 className="text-gray-50 mb-8">Projects</h2>
      {content.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        );
      })}
    </div>
  );
};

export default Projects;
