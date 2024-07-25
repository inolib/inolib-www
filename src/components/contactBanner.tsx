import Image from 'next/image';
import Link from 'next/link';
import { Button } from "~/components/UI/Button";

const ContactBanner = () => {
  return (
    <section className="py-8 px-4 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-6xl  h-48 mx-auto bg-[#F5F4EE] rounded-3xl shadow-md overflow-hidden md:flex">
        <div className="md:w-1/3 p-4">
          <Image
            src="/images/contact1.svg"
            alt="Personne au telephone"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-2/3 p-8 flex flex-col justify-center items-center text-center">
          <h2 id="contact-heading" className="text-xl font-bold mb-4">Besoin d'être conseillé ?</h2>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Button  variant='buttonNoir' aria-label="Nous contacter" className='py-4' > <Link href='/pages/contact'>Nous contacter </Link></Button>
        </div>
        <div className="md:w-1/3 p-4">
          <Image
            src="/images/contact.svg"
            alt="Personne sur un ordinateur"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
