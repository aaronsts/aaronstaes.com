import React from "react";

import { motion } from "framer-motion";

import Image from "next/image";
import banner from "../assets/banner.jpg";

type Props = {};

const Header = (props: Props) => {
  const headingContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };
  const headingItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div id="home" className="relative">
      <div className="absolute w-full top-0 bg-gray-900 bg-gradient-to-tr from-rose-600/30 to-amber-400/10 h-screen wrapper items-center flex ">
        <motion.h1
          variants={headingContainer}
          initial="hidden"
          animate="show"
          className="text-gray-50 relative z-10 mx-auto md:mx-0 "
        >
          <motion.span variants={headingItem}>
            Hi, I&apos;m Aäron <br />
          </motion.span>
          <motion.span variants={headingItem}>
            a full stack <br />
          </motion.span>
          <motion.span
            variants={headingItem}
            className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600"
          >
            developer
          </motion.span>
        </motion.h1>
      </div>
      <div className="w-full h-screen top-0 relative opacity-40">
        <Image
          src={banner}
          alt="banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Header;
