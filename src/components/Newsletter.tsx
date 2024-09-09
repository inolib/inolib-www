import { Button } from "~/components/UI/Button";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center bg-[#F5F4EE] px-4 text-center">
      <h1 className="mb-4 pt-20 text-center text-2xl font-semibold text-[##111F22]">
        Notre équipe est disponible pour vous conseiller
      </h1>
      <p className="mb-8 text-gray-700">
        No spam. Just the latest releases and tips, interesting articles, and exclusive interviews with great people.
      </p>
      <Button variant="buttonNoir" aria-label="Contactez-nous">
        Nous contacter
      </Button>
      <div className="relative mt-12 h-[400px] w-full py-0">
        <Image src="/Homepage/contact.svg" alt="Contact Illustration" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
