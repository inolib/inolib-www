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
  burgerMenu:string;
};

export default function Header({ textColor, logosrc,burgerMenu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`relative ${textColor} h-20`}>
      <div className="container mx-auto flex flex-row  md:space-x-4 sm:space-x-[440px]  xs:space-x-[270px]  xxs:space-x-[130px]">
        <div className="logo  lg:ml-24 mt-4 md:ml-0 xxs:ml-0 py-2 ">
          <Link href="/">
            <Image
              src={logosrc}
              alt="Accueil"
              width={100}
              height={32}
              className='object-contain'
             
            />
          </Link>
         
        </div>
        <div>
          <BurgerMenu navMenu={burgerMenu}/>
          </div>
        
          <MainNav />
          
       
      </div>
      
    </header>
  );
}
