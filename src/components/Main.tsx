import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

import { Button } from "~/components/UI/Button";

const Main = () => {
  return (
    <div className="min-h-screen rounded-tr-customm-tr bg-gradient-to-b from-[#122023] via-[#0e2f08] to-[#323909] text-white xxs:rounded-tr-customx-tr xs:rounded-tr-customx-tr sm:rounded-tr-customx-tr md:rounded-tr-customs-tr lg:rounded-tr-customm-tr">
      <main className="md:items-centers flex flex-col items-center px-4 py-10 md:ml-[20px] md:flex-row md:justify-center lg:ml-[30px]">
        <div className="max-w-xl text-left md:max-w-[50%] lg:max-w-xl xl:pt-[40px] 2xl:mr-[40px]">
          <div className="flex flex-col justify-between rounded-lg bg-opacity-75">
            <p className="mb-4 flex h-9 flex-row rounded-full border-[1px] border-[#E1FF01] bg-[#3B3A33] xxs:w-[265px] xs:w-[265px] sm:mb-8 sm:w-64 md:w-64">
              <span className="xs:w-30 mx-1 my-[2px] w-36 rounded-full border-[1px] border-[#E1FF01] bg-[#122023] px-2 py-[1px] xxs:w-[125px] xxs:pt-1 xxs:text-sm xs:pt-1 xs:text-sm sm:w-28 sm:pt-2 sm:text-xs">
                Restez à jour !
              </span>

              <Link href="/About#Carrer" className="flex w-36 items-center px-2 pb-1 pl-4 pt-1 text-sm">
                Voir les offres
                <RxArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </p>

            <h1 className="mb-4 max-w-160 text-4xl leading-tight md:leading-snug lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug">
              Ensemble, rendons le numérique accessible à tous
            </h1>
            <p className="font-manorop mb-4 mt-8 max-w-96 text-lg text-[#E0DBC7] md:mt-4 xl:text-xl">
              Untitled is a next-gen financial technology company in the process of reinventing banking.
            </p>
            <div className="mt-14 flex flex-col justify-center space-y-4 md:mt-8 md:flex-row md:justify-start md:space-x-4 md:space-y-0">
              <Button
                variant="ghost"
                className="rounded-md border-2 bg-[#122023] px-4 py-2 font-semibold text-white transition hover:bg-yellow-600 md:h-[51px] md:w-[180px] lg:h-[61px] lg:w-[280px]"
              >
                Decouvrir nos services
              </Button>
              <Button
                href="/Contact"
                variant="ButtonJaune"
                className="md:h-[51px] md:w-[120px] lg:h-[61px] lg:w-[180px]"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center md:mt-0">
          <Image src="/Homepage/main.svg" alt="" width={650} height={0} />
        </div>
      </main>
    </div>
  );
};

export default Main;
