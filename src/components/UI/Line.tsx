"use client";

import { useState } from "react";

import { texts } from "~/DATA/data";

const Line = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  return (
    <div
      className={`relative mt-0 w-full overflow-hidden bg-[#111F22] p-0 py-4 text-center text-[#E1FF01]`}
      onClick={toggleAnimation}
    >
      <div className={`flex whitespace-nowrap ${isAnimating ? "animate-marquee" : ""}`}>
        {texts.map((text, i) => (
          <p key={i} className="mx-4">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Line;
