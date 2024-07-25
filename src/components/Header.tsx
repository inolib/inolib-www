"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/UI/BurgerMenu";
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
       <DropdownMenu >
      <div className="container mx-auto  flex items-center space-x-6 ml-10">
        <div className="logo">
          <Link href="/" aria-label="Inolib Home">
            <Image
              src={logosrc}
              alt="Inolib Accueil"
              width={150}
              height={50}
            />
          </Link>
        </div>
       
  <DropdownMenuTrigger className=''>☰</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Menu</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href='/pages/audit'>Auditer</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href='/pages/accompagner'>Accompagner</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href='/pages/developpement'>Developper</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href='/pages/former'>Formations</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href='/pages/ABout'>A propos</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href='/blog'>Blog</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href='/pages/contact'><Button variant='buttonNoir'> Nous contacter</Button> </Link></DropdownMenuItem>
  </DropdownMenuContent>


       
        <nav aria-label="Main navigation">
          <ul className="flex space-x-12 font-sans">
            <li className="relative group">
              <Link href="/pages/audit" className="hover:text-yellow-500 flex items-center">
                Auditer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">Audit de conformité  </Link>
                <Link href="/pages/audit/sous-pages/testU" className="block px-4 py-2 hover:bg-gray-200">Test Utilisateurs </Link>
                
              </div>
            </li>
            <li className="relative group">
              <Link href="/pages/accompagner" className="hover:text-yellow-500 flex items-center">
                Accompagner
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">Accompagnemet de projet</Link>
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200"> Assictence</Link>
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">referent en Accessibilité</Link>
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">Test utilisateur</Link>
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">schema</Link>
              </div>
            </li>
            <li className="relative group">
              <Link href="/pages/developpement" className="hover:text-yellow-500 flex items-center">
                Développer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">Developpement Web</Link>
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">Developpement mobile</Link>
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">Saas</Link>
              </div>
               
            </li>
            <li className="relative group">
              <Link href="/pages/former" className="hover:text-yellow-500 flex items-center">
                Former
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/audit" className="block px-4 py-2 hover:bg-gray-200">Nos formations </Link>
              </div>
            </li>
            <li>
              <Link href="/pages/ABout" className="hover:text-yellow-500">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-500">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </DropdownMenu>
    </header>
  );
}
