import React, { useState } from "react";
import ProjectCard from "./elements/ProjectCard";

// Images
import Image from "next/image";
import projectOne from "../assets/project-one.jpeg";
import projectTwo from "../assets/project-two.png";

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
    image: (
      <Image
        src={projectOne}
        alt="landing page of rvnb"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    ),
  },
  {
    id: 2,
    title: "StreamDream",
    link: "https://stream-dream-demo-project.herokuapp.com/",
    description: `This was the final project for Le Wagon, it was made with the same (DreamTeam) as my first application, 
    with this application I learned a lot about working with API's and using Javascript for interacting.`,
    image: (
      <Image
        src={projectTwo}
        alt="landing page of streamdream"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    ),
  },
];

const Projects = (props: Props) => {
  const [showCard, setShowCard] = useState(0);
  return (
    <div className="section h-fit mb-0 wrapper flex flex-col items-center bg-rose-600">
      <h2 className="text-gray-50 mb-10">Projects</h2>
      <div className="flex gap-8">
        {content.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
