import React from "react";

import Image from "next/image";
import banner from "../assets/banner.jpg";

type Props = {};

const Header = (props: Props) => {
  return (
    <div id="home" className="relative">
      <div className="bg-gray-900 bg-gradient-to-tr from-rose-600/30 to-amber-400/10 h-screen relative wrapper items-center flex ">
        <h1 className="text-gray-50 relative z-10 mx-auto md:mx-0 ">
          Hi, I&apos;m Aäron <br />a full stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600">
            developer
          </span>
        </h1>
      </div>
      <div className="opacity-40">
        <Image
          src={banner}
          alt="banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
    </div>
  );
};

export default Header;
