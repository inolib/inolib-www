import Image from "next/image";

import { CallToActionButtonLink } from "./button-links";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center bg-[#F5F4EE] px-4 text-center">
      <h2 className="mb-4 pt-20 text-center text-2xl font-semibold text-[##111F22]">
        Notre équipe est disponible pour vous conseiller
      </h2>

      <p className="mb-8 text-gray-700">
        No spam. Just the latest releases and tips, interesting articles, and exclusive interviews with great people.
      </p>

      <CallToActionButtonLink className="ring-offset-secondary ring-primary bg-primary text-secondary" href="/Contact">
        Nous contacter
      </CallToActionButtonLink>

      <div className="relative mt-12 h-[400px] w-full py-0">
        <Image alt="" layout="fill" objectFit="contain" src="/Homepage/contact.svg" />
      </div>
    </div>
  );
};

export default Newsletter;
