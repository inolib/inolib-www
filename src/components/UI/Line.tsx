'use client';

import { useState } from 'react';
import { texts } from '~/DATA/data';


export default function Line(){
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  return(
    <div
    className={`relative w-full bg-[#111F22] text-[#E1FF01] text-center mt-0 py-4 p-0 overflow-hidden`}
    onClick={toggleAnimation}
  >
    <div className={`flex whitespace-nowrap ${isAnimating ? 'animate-marquee' : ''}`}>
      {texts.map((text, i) => (
        <p key={i} className="mx-4">{text}</p>
      ))}
    </div>
  </div>
  )
}