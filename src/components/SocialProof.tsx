"use client";
import { useState } from 'react';
import Image from 'next/image';
import { relative } from 'path';
import { texts } from '~/DATA/data';
import { Logos } from '~/DATA/data';

export default function SocialProof() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <main className="flex flex-col items-center bg-white p-6  ">
      <h1 className="text-lg font-bold mb-4 pt-6">Rejoignez nos clients satisfaits</h1>
      <div className="flex  w-full max-w-4xl pt-12 space-x-12 justify-center">
      
      {Logos.map((logo,i)=>(
        <Image 
        key={i}
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
      />)


      )}
    
      </div>
      <div 
        className={ ` relative w-screen bg-[#111F22] text-[#E1FF01] text-center mt-28 py-4 p-0 overflow-hidden `} 
        onClick={toggleAnimation}
      >
        <div className={`flex whitespace-nowrap ${isAnimating ? 'animate-marquee' : ''}`}>
          {texts.map((text,i)=>(
            <p key={i} className=" mx-4">{text}</p>
          ))}
       
        </div>
      </div>
    </main>
  );
}
