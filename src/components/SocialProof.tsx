"use client";

import Image from "next/image";

import { Logos } from "~/DATA/data";

const SocialProof = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#F5F4EE] p-6 pb-10">
      <h2 className="mb-4 pt-6 text-center text-lg font-bold">Rejoignez nos clients satisfaits</h2>

      <ul className="grid max-w-6xl grid-cols-1 gap-6 pb-10 pt-12 xxs:grid-cols-2 lg:grid-cols-4 lg:gap-14">
        {Logos.map((logo, i) => (
          <li className="flex w-full justify-center" key={i}>
            <Image alt={logo.alt} className="mx-0 px-0" height={logo.height} src={logo.src} width={logo.width} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialProof;
