import React from "react";

import { SiUnsplash } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gray-900 text-gray-50 h-24 flex items-center justify-between wrapper">
      <div className="flex gap-4">
        <a
          href="https://unsplash.com/@aaronstaes"
          target={"_blank"}
          rel="noreferrer"
          className="hover:text-rose-600 transition-colors"
        >
          <SiUnsplash size={"1.5rem"} />
        </a>
        <a
          href="https://github.com/aaronsts"
          target={"_blank"}
          rel="noreferrer"
          className="hover:text-rose-600 transition-colors"
        >
          <SiGithub size={"1.5rem"} />
        </a>
        <a
          href="https://www.instagram.com/aaronstaes"
          target={"_blank"}
          rel="noreferrer"
          className="hover:text-rose-600 transition-colors"
        >
          <SiInstagram size={"1.5rem"} />
        </a>
      </div>
      <p className="text-sm font-light">Copywrite © Aaron Staes Media</p>
    </div>
  );
};

export default Footer;
