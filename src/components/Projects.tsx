import React, { useState } from "react";
import ProjectCard from "./elements/ProjectCard";

// Images
import Image from "next/image";
import projectOne from "../assets/project-one.jpg";
import projectTwo from "../assets/project-two.png";
import projectThree from "../assets/project-three.png";

// Icons
import { SiStimulus } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

// Tooltip
import ReactTooltip from "react-tooltip";

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
        placeholder="blur"
      />
    ),
    technologies: [
      <div key={1}>
        <p data-tip="Javavscript / Stimulus">
          <SiStimulus
            style={{ color: "#77E8B9", width: "2rem", height: "2rem" }}
          />
        </p>
        <ReactTooltip place="right" type="light" effect="solid" />
      </div>,
      <div key={2}>
        <p data-tip="Ruby on Rails">
          <SiRubyonrails
            style={{ color: "#CC0000", width: "2rem", height: "2rem" }}
          />
        </p>
        <ReactTooltip place="right" type="light" effect="solid" />
      </div>,
    ],
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
        placeholder="blur"
      />
    ),
    technologies: [
      <div key={1}>
        <p data-tip="Javavscript / Stimulus">
          <SiStimulus
            style={{ color: "#77E8B9", width: "2rem", height: "2rem" }}
          />
        </p>
        <ReactTooltip place="right" type="light" effect="solid" />
      </div>,
      <div key={2}>
        <p data-tip="Ruby on Rails">
          <SiRubyonrails
            style={{ color: "#CC0000", width: "2rem", height: "2rem" }}
          />
        </p>
        <ReactTooltip place="right" type="light" effect="solid" />
      </div>,
    ],
  },
  {
    id: 3,
    title: "One Day Jobs",
    link: "https://www.onedayjobs.be/",
    description: `A website made for a local business for small jobs around the house. One of the focus points for this website was to have a multipage form that guides the customer through a couple of question to deliver the best service possible.`,
    image: (
      <Image
        src={projectThree}
        alt="landing page of one day jobs"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
      />
    ),
    technologies: [
      <div key={1}>
        <p data-tip="NextJS">
          <SiNextdotjs
            key={1}
            style={{ color: "#FFF", width: "2rem", height: "2rem" }}
          />
        </p>
        <ReactTooltip place="right" type="light" effect="solid" />
      </div>,
      <div key={1}>
        <p data-tip="Tailwind">
          <SiTailwindcss
            key={2}
            style={{ color: "#06B6D4", width: "2rem", height: "2rem" }}
          />
        </p>
        <ReactTooltip place="right" type="light" effect="solid" />
      </div>,
      <div key={1}>
        <p data-tip="Netlify">
          <SiNetlify
            key={2}
            style={{ color: "#00C7B7", width: "2rem", height: "2rem" }}
          />
        </p>
        <ReactTooltip place="right" type="light" effect="solid" />
      </div>,
    ],
  },
];

const Projects = (props: Props) => {
  const [showCard, setShowCard] = useState(0);
  return (
    <div
      id="projects"
      className="section h-fit mb-0 wrapper flex flex-col items-center bg-rose-600 scroll-mt-24"
    >
      <h2 className="text-gray-50 mb-10">Projects</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {content.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
