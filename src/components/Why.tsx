import React from "react";

// icons
import { IconContext } from "react-icons";
import { GrTechnology } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPatchCheckFill } from "react-icons/bs";

// icon styling
const value = {
  size: "5rem",
};

type Props = {};

const Why = (props: Props) => {
  return (
    <IconContext.Provider value={value}>
      <div className="section wrapper flex flex-col items-center ">
        <div className="gradient-h w-fit py-4 px-16 -skew-y-3 mb-16">
          <h2 className="skew-y-3 text-gray-50">Why</h2>
        </div>
        <div className="flex w-2/3 justify-between mb-8">
          <div className="flex flex-col items-center">
            <GrTechnology />
            <h4 className="mt-4">Technology</h4>
          </div>
          <div className="flex flex-col items-center">
            <RiCustomerService2Fill />
            <h4 className="mt-4">Service</h4>
          </div>
          <div className="flex flex-col items-center">
            <BsPatchCheckFill />
            <h4 className="mt-4">Quality</h4>
          </div>
        </div>
        <div className="flex justify-center ">
          <span className="w-2 gradient-v mr-8"></span>
          <p className="w-2/3">
            I’m working with modern technologies that make it easier to build
            fast websites with efficient SEO and great user experiences. This
            means that you, as a business owner, can enjoy a hassle-free
            experience of owning a website. Not only improve these new
            technologies your SEO but they also make your website future-proof
            and able to scale alongside your business.
          </p>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Why;
