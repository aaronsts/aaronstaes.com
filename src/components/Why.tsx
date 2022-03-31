import React, { useState, useEffect } from "react";

// icons
import { IconContext } from "react-icons";
import { MdDraw } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { MdOutlineMoving } from "react-icons/md";
import Card from "./elements/Card";

// icon styling
const value = {
  size: "3.5rem",
};

const content = [
  {
    id: 1,
    text: `Creating websites is more than writing code, it starts with a thought-through design to make a UI that flows in the customers' hands. Using best-practises to captivate the attention of a user. Have a business idea but no clue where to start? Don’t hesitate to contact me.`,
  },
  {
    id: 2,
    text: `In these times, a website can be more then just static content. From a full web application to a personal blog, let me help you make your project come to life. Contact me for any questions you have.`,
  },
  {
    id: 3,
    text: `Wordpress is one of the oldest web technologies out there, it has a great ecosystem & community. However there are drawbacks, It’s slow and bloated. Using new and cutting-edge technologies I can help you migrate your website to the technologies of the Future.`,
  },
];

type Props = {};

const Why = (props: Props) => {
  const [card, setCard] = useState(0);

  const handleClick = (e) => {
    setCard(e.currentTarget.id);
  };

  useEffect(() => {}, [card]);

  return (
    <IconContext.Provider value={value}>
      <div
        id="why"
        className="section wrapper flex flex-col items-center scroll-mt-24 min-h-[80vh] "
      >
        <div className="gradient-h w-fit py-4 px-16 -skew-y-3 mb-8 md:mb-16">
          <h2 className="skew-y-3 text-gray-50">Services</h2>
        </div>
        <div className="flex flex-col md:flex-row w-2/3 justify-between mb-8">
          <div className="flex flex-col items-center">
            <div
              id="0"
              className={` cursor-pointer border-gray-50 rounded-full p-6 ${
                card == 0 ? "bg-rose-600 text-gray-50 hover:border-gray-50" : ""
              } `}
              onClick={handleClick}
            >
              <MdDraw />
            </div>
            <h4 className={`mt-4 ${card == 0 ? "text-rose-600" : ""}`}>
              Design
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
              <MdComputer />
            </div>
            <h4 className={`mt-4 ${card == 1 ? "text-rose-600" : ""}`}>
              Development
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
              <MdOutlineMoving />
            </div>
            <h4 className={`mt-4 ${card == 2 ? "text-rose-600" : ""}`}>
              Migration
            </h4>
          </div>
        </div>
        <Card key={content[card].id} text={content[card].text} />
      </div>
    </IconContext.Provider>
  );
};

export default Why;
