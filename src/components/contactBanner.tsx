import Image from 'next/image';
import Link from 'next/link';
import { RxArrowRight } from 'react-icons/rx';

const ContactBanner = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto bg-[#F5F4EE] rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 p-4 md:pl-6">
          <Image
            src="/Homepage/p1.svg"
            alt=""
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="flex-1 text-center p-4">
          <h2 id="contact-heading" className="text-xl font-bold mb-4">
            Besoin d'être conseillé ?
          </h2>
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <div className="flex justify-center">
            <Link href="/Contact" className="bg-[#254147] w-44 rounded-lg flex items-center justify-center text-white hover:bg-primary/90 py-2.5 px-4">
             
                Nous contacter
                <RxArrowRight className="w-6 h-6 ml-2" />
             
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 p-4 md:pr-6">
          <Image
            src="/Homepage/P2.svg"
            alt=""
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;
