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
    <header className={`relative ${textColor} flex h-20 sm:justify-center`}>
      <div className="flex w-full flex-row items-center justify-between px-6 md:px-10 lg:justify-start xl:w-[1200px] xl:p-0">
        <div className="logo py-2">
          <Link href="/">
            <Image src={logosrc} alt="Accueil" width={120} height={40} className="object-contain" />
          </Link>
        </div>
        <div>
          <div>
            <BurgerMenu navMenu={burgerMenu} />
          </div>
          <section id="nav" className="hidden lg:block">
            <MainNav {...MainNavProps} />
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
