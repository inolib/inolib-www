"use client";
import { useState } from 'react';
import Image from 'next/image';
import { texts } from '~/DATA/data';
import { Logos } from '~/DATA/data';

export default function SocialProof() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <main className="flex flex-col items-center bg-[#F5F4EE] p-6 w-full">
      <h1 className="text-lg font-bold mb-4 pt-6">Rejoignez nos clients satisfaits</h1>
      <div className="grid grid-cols-1 gap-6  max-w-5xl space-x-14 pt-12 xxs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
        {Logos.map((logo, i) => (
          <div key={i} className="flex justify-center w-full ">
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              className=""
            />
          </div>
        ))}
      </div>
      <div
        className={`relative w-full bg-[#111F22] text-[#E1FF01] text-center mt-28 py-4 p-0 overflow-hidden`}
        onClick={toggleAnimation}
      >
        <div className={`flex whitespace-nowrap ${isAnimating ? 'animate-marquee' : ''}`}>
          {texts.map((text, i) => (
            <p key={i} className="mx-4">{text}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
