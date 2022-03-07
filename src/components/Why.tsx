import React, { useState, useEffect } from "react";

// icons
import { IconContext } from "react-icons";
import { MdComputer } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPatchCheckFill } from "react-icons/bs";
import Card from "./elements/Card";

// icon styling
const value = {
  size: "5rem",
};

const content = [
  {
    id: 1,
    text: `I’m working with modern technologies that make it easier to build fast
    websites with efficient SEO and great user experiences. This means that
    you, as a business owner, can enjoy a hassle-free experience of owning a
    website. Not only improve these new technologies your SEO but they also
    make your website future-proof and able to scale alongside your
    business.`,
  },
  {
    id: 2,
    text: `Not only improve these new technologies your SEO but they also
    make your website future-proof and able to scale alongside your
    business.`,
  },
  {
    id: 3,
    text: `Lorem Ipsum`,
  },
];

type Props = {};

const Why = (props: Props) => {
  const [card, setCard] = useState(0);

  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    setCard(e.currentTarget.id);
  };

  useEffect(() => {}, [card]);

  return (
    <IconContext.Provider value={value}>
      <div className="section wrapper flex flex-col items-center ">
        <div className="gradient-h w-fit py-4 px-16 -skew-y-3 mb-16">
          <h2 className="skew-y-3 text-gray-50">Why</h2>
        </div>
        <div className="flex w-2/3 justify-between mb-8">
          <div className="flex flex-col items-center">
            <div
              id="0"
              className={` cursor-pointer border-gray-50 rounded-full p-6 ${
                card == 0 ? "bg-rose-600 text-gray-50 hover:border-gray-50" : ""
              } `}
              onClick={handleClick}
            >
              <MdComputer />
            </div>
            <h4 className={`mt-4 ${card == 0 ? "text-rose-600" : ""}`}>
              Technology
            </h4>
          </div>
          <div
            id="1"
            className="flex flex-col items-center"
            onClick={handleClick}
          >
            <div
              className={`cursor-pointer border-gray-50 rounded-full p-6 ${
                card == 1 ? "bg-rose-600 text-gray-50 hover:border-gray-50" : ""
              } `}
            >
              <RiCustomerService2Fill />
            </div>
            <h4 className={`mt-4 ${card == 1 ? "text-rose-600" : ""}`}>
              Service
            </h4>
          </div>
          <div
            id="2"
            className="flex flex-col items-center"
            onClick={handleClick}
          >
            <div
              className={` cursor-pointer border-gray-50 rounded-full p-6 ${
                card == 2 ? "bg-rose-600 text-gray-50 hover:border-gray-50" : ""
              } `}
            >
              <BsPatchCheckFill />
            </div>
            <h4 className={`mt-4 ${card == 2 ? "text-rose-600" : ""}`}>
              Quality
            </h4>
          </div>
        </div>
        <Card key={content[card].id} text={content[card].text} />
      </div>
    </IconContext.Provider>
  );
};

export default Why;
