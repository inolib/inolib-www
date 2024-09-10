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
};

const Header = ({ textColor, logosrc, burgerMenu }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`relative ${textColor} h-20`}>
      <div className="container mx-auto flex flex-row xxs:space-x-[130px] xs:space-x-[270px] sm:space-x-[440px] md:space-x-4">
        <div className="logo mt-4 py-2 xxs:ml-0 md:ml-0 lg:ml-24">
          <Link href="/">
            <Image src={logosrc} alt="Accueil" width={100} height={32} className="object-contain" />
          </Link>
        </div>
        <div>
          <BurgerMenu navMenu={burgerMenu} />
        </div>

        <MainNav />
      </div>
    </header>
  );
};

export default Header;
