import React from "react";

import { SiUnsplash } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gray-900 text-gray-50 py-8 h-fit md:h-24 flex flex-col md:flex-row items-center justify-between wrapper">
      <div className="flex gap-4 mb-4 md:m-0">
        <a
          aria-label="Unsplash Profile"
          href="https://unsplash.com/@aaronstaes"
          target={"_blank"}
          rel="noreferrer"
          className="hover:text-rose-600 transition-colors"
        >
          <SiUnsplash size={"1.5rem"} />
        </a>
        <a
          aria-label="Github Profile"
          href="https://github.com/aaronsts"
          target={"_blank"}
          rel="noreferrer"
          className="hover:text-rose-600 transition-colors"
        >
          <SiGithub size={"1.5rem"} />
        </a>
        <a
          aria-label="Instagram Profile"
          href="https://www.instagram.com/aaronstaes"
          target={"_blank"}
          rel="noreferrer"
          className="hover:text-rose-600 transition-colors"
        >
          <SiInstagram size={"1.5rem"} />
        </a>
      </div>
      <p className="text-sm font-light mb-4 md:m-0">
        Copywrite © Aaron Staes Media
      </p>
      <a
        className="text-sm font-light hover:underline"
        href="mailto: aaron.staes@gmail.com"
      >
        aaron.staes@gmail.com
      </a>
    </div>
  );
};

export default Footer;
