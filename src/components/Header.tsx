"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import MainNav from "~/components/MainNav";
import BurgerMenu from "~/components/UI/BurgerMenu";

type HeaderProps = {
  textColor: string;
  logosrc: string;
  burgerMenu: string;
  MainNavProps: {
    hoverClass: string;
    hoverBorder: string;
  };
};

const Header = ({ textColor, logosrc, burgerMenu, MainNavProps }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`relative ${textColor} h-20 flex  sm:justify-center `} >
      <div className="w-full flex flex-row items-center justify-between pl-6 pr-6 md:ml-[20px] lg:ml-[3%] xl:p-0 2xl:mr-[60px] lg:justify-start xl:w-[1200px]">
        <div className="logo py-2 ">
          <Link href="/">
            <Image src={logosrc} alt="Accueil" width={120} height={40} className="object-contain" />
            <Image src={logosrc} alt="Accueil" width={120} height={40} className="object-contain" />
          </Link>
        </div>
        <div>
          <BurgerMenu navMenu={burgerMenu} />
        </div>

        <MainNav {...MainNavProps} />

      </div>

    </header>
  );
};

export default Header;
