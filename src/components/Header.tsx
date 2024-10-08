"use client";

import Image from "next/image";
import Link from "next/link";
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
      <div className="flex w-full flex-row items-center justify-between px-6 md:ml-[20px] lg:ml-[3%] lg:justify-start xl:w-[1200px] xl:p-0 2xl:mr-[60px]">
        <div className="logo py-2">
          <Link aria-label="accueil" href="/">
            <Image alt="" className="object-contain" height={40} src={logosrc} width={120} />
          </Link>
        </div>
        <div>
          <BurgerMenu buttonVariant="buttonNoir" navMenu={burgerMenu} />
        </div>
        <section className="hidden lg:block" id="nav">
          <MainNav {...MainNavProps} />
        </section>
      </div>
    </header>
  );
};

export default Header;
