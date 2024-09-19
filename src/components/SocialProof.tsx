"use client";

import Image from "next/image";

import { Logos } from "~/DATA/data";

const SocialProof = () => {
  return (
    <main className="flex w-full flex-col items-center bg-[#F5F4EE] p-6 pb-10">
      <h1 className="mb-4 pt-6 text-lg font-bold text-center">Rejoignez nos clients satisfaits</h1>
      <div className="grid max-w-6xl grid-cols-1 xxs:grid-cols-2 gap-6 lg:gap-14 pt-12  lg:grid-cols-4 pb-10">
        {Logos.map((logo, i) => (
          <div key={i} className="flex w-full justify-center">
            <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} className="px-0 mx-0" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default SocialProof;
