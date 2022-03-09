import React from "react";

type CardProps = {
  text: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="flex justify-center w-full ">
      <span className="w-2 gradient-v mr-8"></span>
      <p className=" w-full md:w-2/3">{props.text}</p>
    </div>
  );
};

export default Card;
