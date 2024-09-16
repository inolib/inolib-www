import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

import { Button } from "~/components/UI/Button";

const Main = () => {
  return (
    <div className="min-h-screen rounded-tr-customm-tr bg-gradient-to-b from-[#122023] via-[#254147] to-black text-white pt-10">
      <main className="flex flex-col items-center px-4 py-10 md:flex-row md:items-centers md:justify-center md:ml-[20px] lg:ml-[30px]">
        <div className="max-w-xl md:max-w-[50%] lg:max-w-xl text-left xl:pt-[40px] 2xl:mr-[40px]">
          <div className="rounded-lg bg-opacity-75 flex flex-col justify-between">
            <p className="mb-4 flex h-9 flex-row rounded-full border-[1px] text-sm border-[#E1FF01] bg-[#3B3A33] w-64 md:w-72 ">
              <span className="w-36 rounded-full border-[1px] border-[#E1FF01] bg-[#122023] text-center flex items-center justify-center">
                Nous recrutons !
              </span>

              <Link
                href="/About#Carrer"
                className="flex items-center px-2 pb-1 pt-1 text-sm w-36 pl-4"
              >
                Voir les offres
                <RxArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </p>

            <h1 className="mb-4 max-w-160 text-4xl leading-tight md:leading-snug lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug">
              Ensemble, rendons le numérique accessible à tous
            </h1>
            <p className="font-manorop mb-4 mt-8 max-w-96 text-lg xl:text-xl text-[#E0DBC7] md:mt-4">
              Untitled is a next-gen financial technology company in the process
              of reinventing banking.
            </p>
            <div className="flex flex-col justify-center mt-14 space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:mt-8 md:justify-start">
              <Button
                variant="ghost"
                className="rounded-md border-2 bg-[#122023] px-4 py-2 font-semibold text-white transition hover:bg-yellow-600 md:w-[180px] md:h-[51px] lg:h-[61px] lg:w-[280px]"
              >
                Decouvrir nos services
              </Button>
              <Button
                href="/contact"
                variant="ButtonJaune"
                className="md:h-[51px] md:w-[120px] lg:h-[61px] lg:w-[180px]"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center md:mt-0">
          <Image
            src="/Homepage/main.svg"
            alt="image decorative"
            width={650}
            height={0}
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
