import React from "react";

import Image from "next/image";
import projectOne from "../../assets/project-one.jpeg";

import { SiJavascript } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <div className="group w-72 h-96 overflow-hidden">
      <div className=" text-gray-50 relative h-full ">
        <Image
          src={projectOne}
          alt="landing page of rvnb"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <a
        href="https://rvnb-rails.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-gray-900/60 shadow cursor-pointer backdrop-blur text-gray-50 w-72 h-96 p-4 transition-all duration-500 ease-out group-hover:-translate-y-full">
          <h3>Title</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            tenetur praesentium quam, quidem accusamus necessitatibus sint!
            Ullam eaque dolores ipsum soluta nemo vel quisquam pariatur.
          </p>
          <div className="w-full h-2 gradient-h my-4"></div>
          <div className="flex gap-4">
            <SiJavascript
              style={{ color: "#F7DF1E", width: "3rem", height: "3rem" }}
            />
            <SiRubyonrails
              style={{ color: "#CC0000", width: "3rem", height: "3rem" }}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
