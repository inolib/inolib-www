"use client";

import Image from 'next/image';

import { Logos } from '~/DATA/data';

export default function SocialProof() {
 

  return (
    <main className="flex flex-col items-center bg-[#F5F4EE] p-6 pb-10 w-full">
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
     
    </main>
  );
}
