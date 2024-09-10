"use client";

import Image from "next/image";

import { Logos } from "~/DATA/data";

const SocialProof = () => {
  return (
    <main className="flex w-full flex-col items-center bg-[#F5F4EE] p-6 pb-10">
      <h1 className="mb-4 pt-6 text-lg font-bold">Rejoignez nos clients satisfaits</h1>
      <div className="grid max-w-5xl grid-cols-1 gap-6 space-x-14 pt-12 xxs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
        {Logos.map((logo, i) => (
          <div key={i} className="flex w-full justify-center">
            <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} className="" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default SocialProof;
