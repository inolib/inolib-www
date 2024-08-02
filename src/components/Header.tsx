"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import BurgerMenu from '~/components/UI/BurgerMenu';
import MainNav from '~/components/MainNav';

import { Button } from "~/components/UI/Button";

type HeaderProps = {
  textColor: string;
  logosrc: string;
};

export default function Header({ textColor, logosrc }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`relative ${textColor} h-20`}>
      <div className="container mx-auto  flex flex-row space-x-10 px-4 xxs:space-x-14">
        <div className="logo ml-8 xxs:mr-14">
          <Link href="/">
            <Image
              src={logosrc}
              alt="Inolib Accueil"
              width={150}
              height={50}
             
            />
          </Link>
        </div>
        
        
          <MainNav />
          <BurgerMenu />
       
      </div>
      
    </header>
  );
}
