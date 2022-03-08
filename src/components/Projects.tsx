import React, { useState } from "react";
import ProjectCard from "./elements/ProjectCard";

import { BsCircle } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";

type Props = {};

const projects = [
  <ProjectCard key={1} />,
  <ProjectCard key={2} />,
  <ProjectCard key={3} />,
];

const Projects = (props: Props) => {
  const [showCard, setShowCard] = useState(0);
  return (
    <div className="section h-screen wrapper flex flex-col items-center bg-rose-600">
      <h2 className="text-gray-50 mb-8">Projects</h2>
      <div className="w-full overflow-scroll scrollbar">
        <div className="w-fit flex gap-8">
          {projects.map((project, i) => {
            console.log(i);
            return project;
          })}
        </div>
      </div>
      <div className="flex gap-4 text-gray-50 my-4">
        <BsCircleFill />
        <BsCircle />
        <BsCircle />
      </div>
    </div>
  );
};

export default Projects;
