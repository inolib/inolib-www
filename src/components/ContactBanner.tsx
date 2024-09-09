import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

const ContactBanner = () => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center overflow-hidden rounded-3xl bg-[#F5F4EE] shadow-md md:flex-row">
        <div className="flex-shrink-0 p-4 md:pl-6">
          <Image src="/Homepage/p1.svg" alt="" width={150} height={150} className="object-contain" />
        </div>
        <div className="flex-1 p-4 text-center">
          <h2 id="contact-heading" className="mb-4 text-xl font-bold">
            Besoin d'être conseillé ?
          </h2>
          <p className="mb-4 text-gray-600">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <div className="flex justify-center">
            <Link
              href="/Contact"
              className="hover:bg-primary/90 flex w-44 items-center justify-center rounded-lg bg-[#254147] px-4 py-2.5 text-white"
            >
              Nous contacter
              <RxArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 p-4 md:pr-6">
          <Image src="/Homepage/P2.svg" alt="" width={150} height={150} className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
