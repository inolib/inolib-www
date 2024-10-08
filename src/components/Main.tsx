"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CallToActionButtonLink, GhostButtonLink } from "./button-links";

const Main = () => {
  return (
    <div className="min-h-screen rounded-tr-customm-tr bg-gradient-to-b from-[#122023] via-[#0e2f08] to-[#323909] text-white xxs:rounded-tr-customx-tr xs:rounded-tr-customx-tr sm:rounded-tr-customx-tr md:rounded-tr-customs-tr lg:rounded-tr-customm-tr">
      <div className="flex flex-col items-center px-4 py-10 md:ml-[20px] md:flex-row md:items-center md:justify-center lg:ml-[30px]">
        <div className="max-w-xl text-left md:max-w-[50%] lg:max-w-xl xl:pt-[40px] 2xl:mr-[40px]">
          <div className="flex flex-col justify-between rounded-lg bg-opacity-75">
            <p className="mb-4 flex h-9 flex-row rounded-full border border-yellow-neon bg-[#3B3A33] xxs:w-[265px] xs:w-[265px] sm:mb-8 sm:w-64 md:w-64">
              <span className="xs:w-30 mx-1 my-[2px] w-36 rounded-full border border-yellow-neon bg-[#122023] px-2 py-px xxs:w-[125px] xxs:pt-1 xxs:text-sm xs:pt-1 xs:text-sm sm:w-28 sm:pt-2 sm:text-xs">
                Restez à jour !
              </span>

              <Link
                className="flex items-center px-4 py-1 xxs:px-0 xxs:pl-1 xxs:text-xs xs:pl-1 sm:ml-2 sm:text-xs"
                href="/#news"
              >
                <span>Voir l’actualité</span>
                <ArrowRight />
              </Link>
            </p>

            <h1 className="mb-4 max-w-160 text-4xl leading-tight md:leading-snug lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug">
              <span className="text-[#9cd494]">INOLIB</span>, de l’idée à la réalité digitale pour un numérique
              accessible
            </h1>

            <p className="mb-4 mt-8 max-w-96 text-lg text-[#E0DBC7] md:mt-4 xl:text-xl">
              Ensemble, rendons le numérique accessible à tous
            </p>

            <div className="mt-14 flex flex-col justify-center space-y-4 md:mt-8 md:flex-row md:justify-start md:space-x-4 md:space-y-0">
              <GhostButtonLink
                className="border-2 border-[#E0DBC7] bg-green-dark text-[#E0DBC7] ring-white ring-offset-green-dark"
                href="#services"
              >
                <ArrowDown />
                <span>Découvrir nos services</span>
              </GhostButtonLink>

              <CallToActionButtonLink
                className="bg-yellow-neon text-green-dark ring-white ring-offset-green-dark"
                href="/Contact"
              >
                Nous contacter
              </CallToActionButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center md:mt-0">
          <Image alt="" height={531} src="/images/illustrations/illustration-001.svg" width={551} />
        </div>
      </div>
    </div>
  );
};

export default Main;
