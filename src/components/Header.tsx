"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import  BurgerMenu from '~/components/UI/BurgerMenu';

import MainNav from '~/components/MainNav';

import {Button} from "~/components/UI/Button";


type Headerprops= {
  textColor:string;
  logosrc:string
}

export default function Header({ textColor, logosrc }: Headerprops) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`relative ${textColor} h-20`}>
       
      <div className="container mx-auto  flex items-center space-x-6 ml-10">
        <div className="logo">
          <Link href="/">
            <Image
              src={logosrc}
              alt="Inolib Accueil"
              width={150}
              height={50}
            />
          </Link>
        </div>
       
        
       <BurgerMenu/>
 
      <MainNav/>
      </div>
   
    </header>
  );
}
