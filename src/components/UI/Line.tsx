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
      onClick={toggleAnimation}
      className={`relative mt-0 w-full overflow-hidden bg-[#111F22] p-0 py-4 text-center text-yellow-neon`}
      aria-hidden
    >
      <div className={`flex whitespace-nowrap text-2xl ${isAnimating ? "animate-marquee" : ""}`}>
        {texts.map((text, i) => (
          <p className="mx-4" key={i}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Line;
