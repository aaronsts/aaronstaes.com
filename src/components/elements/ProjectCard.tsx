import React from "react";

type Props = {
  title: string;
  description: string;
  link: string;
  image: any;
  technologies: Array<any>;
};

const ProjectCard = (props: Props) => {
  return (
    <div className="group w-72 h-96 overflow-hidden">
      <div className=" text-gray-50 relative h-full ">{props.image}</div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="bg-gray-900/60 shadow cursor-pointer backdrop-blur text-gray-50 w-72 h-96 p-4 transition-all duration-500 ease-out -translate-y-16 group-hover:-translate-y-full">
          <h3>{props.title}</h3>
          <p className="text-base">{props.description}</p>
          <div className="w-full h-2 gradient-h my-4"></div>
          <div className="flex gap-4">
            {props.technologies.map((technology) => {
              return technology;
            })}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
