"use client";
import { useState } from 'react';
import Image from 'next/image';
import { relative } from 'path';

export default function SocialProof() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <main className="flex flex-col items-center bg-white p-6  ">
      <h1 className="text-lg font-bold mb-4 pt-6">Rejoignez nos clients satisfaits</h1>
      <div className="flex  w-full max-w-4xl pt-12 space-x-12 justify-center">
      <Image 
        src='/ParLogo/laposte.svg' 
        width={500} 
        height={200} 
        alt='logo de nos clients : la poste,'>
    </Image>
    <Image 
        src='/ParLogo/atomoto.svg' 
        width={500} 
        height={200} 
        alt='logo de nos clients : la poste,'>
    </Image>
    <Image 
        src='/ParLogo/med.svg' 
        width={500} 
        height={200} 
        alt='logo de nos clients : la poste,'>
    </Image>
    <Image 
        src='/ParLogo/3lurryAds.svg' 
        width={500} 
        height={200} 
        alt='logo de nos clients : la poste,'>
    </Image>
    
      </div>
      <div 
        className={ ` relative w-screen bg-[#111F22] text-[#E1FF01] text-center mt-28 py-4 p-0 overflow-hidden `} 
        onClick={toggleAnimation}
      >
        <div className={`flex whitespace-nowrap ${isAnimating ? 'animate-marquee' : ''}`}>
          <p className="mx-4">L'inclusivité est la clé - Accessibilité rime avec beauté</p>
          <p className="mx-4">L'inclusivité est la clé - Accessibilité rime avec beauté</p>
          <p className="mx-4">L'inclusivité est la clé - Accessibilité rime avec beauté</p>
          <p className="mx-4">L'inclusivité est la clé - Accessibilité rime avec beauté</p>
          <p className="mx-4">L'inclusivité est la clé - Accessibilité rime avec beauté</p>
          <p className="mx-4">L'inclusivité est la clé - Accessibilité rime avec beauté</p>
        </div>
      </div>
    </main>
  );
}
