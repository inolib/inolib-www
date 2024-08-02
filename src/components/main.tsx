import Image from 'next/image';
import { Button } from '~/components/UI/Button';
import Link from 'next/link';
import { RxArrowRight } from 'react-icons/rx';

export default function Main() {
  return (
    <div className="bg-gradient-to-b from-[#122023] via-[#254147] to-black text-white min-h-screen rounded-tr-customm-tr lg:rounded-tr-customm-tr md:rounded-tr-customs-tr sm:rounded-tr-customx-tr xs:rounded-tr-customx-tr xxs:rounded-tr-customx-tr">
      <main className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-10 px-4 sm:py-20 sm:px-8">

        <div className="max-w-4xl mx-auto rounded-br-full pb-10 md:pb-0 text-left">
          <div className="bg-opacity-75 p-6 sm:p-10 rounded-lg">
            <p className="rounded-full bg-[#3B3A33] border-[1px] border-[#E1FF01] md:w-64 h-9 flex flex-row mb-4 sm:mb-8 sm:w-64 xs:w-[265px] xxs:w-[265px] ">
              <span className="rounded-full bg-[#122023] border-[1px] border-[#E1FF01] mx-1 my-[2px] py-[1px] px-2 w-36 sm:text-xs sm:pt-2 sm:w-28 xs:text-sm xs:pt-1 xs:w-30  xxs:w-[125px] xxs:text-sm xxs:pt-1">
                Nous recrutons !
              </span>
             
              <Link href="/contact" className=" flex items-center pb-1 px-4 pt-1 sm:text-xs  sm:ml-2 xs:pl-1 xxs:text-xs xxs:px-0 xxs:pl-1 ">
                Voir les offres
                <RxArrowRight className="ml-1 w-3 h-3" />
              </Link>
             
            </p>

            <h1 className="max-w-160 text-2xl sm:text-4xl md:text-6xl mb-4 sm:mb-6">
              Ensemble, rendons le numérique accessible à tous
            </h1>
            <p className="max-w-96 font-manorop mb-4 sm:mb-8 text-[#E0DBC7] text-sm sm:text-base">
              Untitled is a next-gen financial technology company in the process
              of reinventing banking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button  variant='gost' className="bg-[#254147] text-white px-4 py-2 rounded-md border-2 font-semibold hover:bg-yellow-600 transition">
                Decouvrir nos services
              </Button>
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
            
          />
        </div>

      </main>
    </div>
  );
}
