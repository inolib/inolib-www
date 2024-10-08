import Image from "next/image";

import { CallToActionButtonLink } from "./button-links";

const ContactBanner = () => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center overflow-hidden rounded-3xl bg-[#F5F4EE] shadow-md md:flex-row">
        <div className="shrink-0 p-4 md:pl-6">
          <Image alt="" className="object-contain" height={150} src="/Homepage/p1.svg" width={150} />
        </div>
        <div className="flex-1 p-4 text-center">
          <h2 className="mb-4 text-xl font-bold" id="contact-heading">
            Besoin d'être conseillé ?
          </h2>

          <p className="mb-4 text-gray-600">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>

          <div className="flex justify-center">
            <CallToActionButtonLink
              className="bg-primary text-secondary ring-primary ring-offset-secondary"
              href="/Contact"
            >
              Nous contacter
            </CallToActionButtonLink>
          </div>
        </div>
        <div className="shrink-0 p-4 md:pr-6">
          <Image alt="" className="object-contain" height={150} src="/Homepage/P2.svg" width={150} />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
