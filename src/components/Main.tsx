import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

import { Button } from "~/components/UI/Button";

const Main = () => {
  return (
    <div className="min-h-screen rounded-tr-customm-tr bg-gradient-to-b from-[#122023] via-[#254147] to-black text-white xxs:rounded-tr-customx-tr xs:rounded-tr-customx-tr sm:rounded-tr-customx-tr md:rounded-tr-customs-tr lg:rounded-tr-customm-tr">
      <main className="flex flex-col items-center justify-between px-4 py-10 text-center sm:px-8 sm:py-20 md:flex-row md:text-left">
        <div className="mx-auto max-w-4xl rounded-br-full pb-10 text-left md:pb-0">
          <div className="rounded-lg bg-opacity-75 p-6 sm:p-10">
            <p className="mb-4 flex h-9 flex-row rounded-full border-[1px] border-[#E1FF01] bg-[#3B3A33] xxs:w-[265px] xs:w-[265px] sm:mb-8 sm:w-64 md:w-64">
              <span className="xs:w-30 mx-1 my-[2px] w-36 rounded-full border-[1px] border-[#E1FF01] bg-[#122023] px-2 py-[1px] xxs:w-[125px] xxs:pt-1 xxs:text-sm xs:pt-1 xs:text-sm sm:w-28 sm:pt-2 sm:text-xs">
                Nous recrutons !
              </span>

              <Link
                href="/About#Carrer"
                className="flex items-center px-4 pb-1 pt-1 xxs:px-0 xxs:pl-1 xxs:text-xs xs:pl-1 sm:ml-2 sm:text-xs"
              >
                Voir les offres
                <RxArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </p>

            <h1 className="mb-4 max-w-160 text-2xl sm:mb-6 sm:text-4xl md:text-6xl">
              Ensemble, rendons le numérique accessible à tous
            </h1>
            <p className="font-manorop mb-4 max-w-96 text-sm text-[#E0DBC7] sm:mb-8 sm:text-base">
              Untitled is a next-gen financial technology company in the process of reinventing banking.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Button
                variant="ghost"
                className="rounded-md border-2 bg-[#254147] px-4 py-2 font-semibold text-white transition hover:bg-yellow-600"
              >
                Decouvrir nos services
              </Button>
              <Button href="/contact" variant="ButtonJaune">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center md:mt-0 md:pr-24">
          <Image src="/Homepage/main.svg" alt="image decorative" width={567} height={640} />
        </div>
      </main>
    </div>
  );
};

export default Main;
