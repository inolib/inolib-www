import Image from 'next/image';
import { Button } from '~/components/UI/Button';
import Link from 'next/link';

export default function Main() {
  return (
    <div className="bg-gradient-to-b from-[#122023] via-[#254147] to-black text-white min-h-screen rounded-tr-customm-tr lg:rounded-tr-customm-tr md:rounded-tr-customs-tr sm:rounded-tr-customx-tr xs:rounded-tr-customx-tr">
      <main className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-20 px-4">

        <div className="max-w-4xl mx-auto rounded-br-full pb-10 md:pb-0 text-left">
          <div className="bg-opacity-75 p-10 rounded-lg">
            <p className="rounded-full bg-[#3B3A33] border-[1px] border-[#E1FF01] w-full md:w-72 h-9 flex flex-row mb-8">
              <span className="rounded-full bg-[#122023] border-[1px] border-[#E1FF01] mx-1 my-[2px] py-[1px] px-2 w-36">
                Nous recrutons !
              </span>
              <Link href="/contact" className="pb-1 px-4 pt-1">
                Voir les offres
              </Link>
            </p>

            <h1 className="max-w-160 text-4xl md:text-6xl mb-6">
              Ensemble, rendons le numérique accessible à tous
            </h1>
            <p className="max-w-96 font-manorop mb-8 text-[#E0DBC7]">
              Untitled is a next-gen financial technology company in the process
              of reinventing banking.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4">
              <button className="bg-[#254147] text-white px-4 py-2 rounded-md border-2 font-semibold hover:bg-yellow-600 transition">
                Decouvrir nos services
              </button>
              <Button href="/contact" variant="ButtonJaune">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:pr-24 mt-8 md:mt-0">
          <Image
            src="/HomePage/main.svg"
            alt="image decorative"
            width={567}
            height={640}
            className="w-full h-auto md:w-auto md:h-auto"
          />
        </div>

      </main>
    </div>
  );
}
