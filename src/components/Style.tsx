import React from "react";

type Props = {};

const Style = (props: Props) => {
  return (
    <div>
      <h1 className="font-black text-9xl leading-thight tracking-tighter uppercase mb-4">
        Heading H1
      </h1>
      <h2 className="font-bold text-5xl leading-thight tracking-wider uppercase mb-4">
        Heading H2
      </h2>
      <h3 className="font-bold text-3xl leading-relaxed uppercase mb-2">
        Heading H3
      </h3>
      <h4 className="font-bold text-xl leading-relaxed tracking-widest uppercase mb-2">
        Heading H4
      </h4>
      <p className="font-light text-xl my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        repellat sed aliquam delectus voluptatum voluptate iusto amet doloribus
        rerum, accusantium dicta distinctio dolores maxime dolor mollitia soluta
        quos laudantium molestiae.
      </p>
    </div>
  );
};

export default Style;
