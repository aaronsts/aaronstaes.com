import React from "react";

import Image from "next/image";
import profile from "../assets/profile.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="wrapper flex flex-col md:flex-row md:justify-between w-full items-center scroll-mt-24 bg-gray-50 ">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row items-center w-full">
            <h2 className="md:pr-8">About</h2>
            <div className="gradient-h h-4 md:h-12 w-full my-8"></div>
          </div>
          <div>
            <h4>
              hi, my name is Aäron, I&apos;m a full stack web developer with an
              eye for design.
            </h4>
            <p>
              As a curious and enthusiastic person, I&apos;m always looking for
              new opportunities and keep up to date with the latest trends. I
              love to discuss design and idea&apos;s over coffee and find the
              right direction for each project I work on. Being both a developer
              and designer makes the process of building the perfect website for
              my clients&apos; needs much easier.
            </p>
          </div>
          <div className="gradient-h h-4 md:h-12 w-full grow my-8"></div>
        </div>
        <div className=" grow flex justify-center">
          <div className="w-fit h-fit -skew-y-3 overflow-hidden md:ml-8">
            <Image
              src={profile}
              alt="profile picture of aaron staes"
              width={350}
              height={450}
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              priority
            />
          </div>
        </div>
    </div>
  );
};

export default About;
