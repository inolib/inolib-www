"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative text-white">
      <div className="container mx-auto py-4 flex items-center space-x-6">
        <div className="logo">
          <Link href="/" aria-label="Inolib Home">
            <Image
              src="/Logo/logo_jaune_blanc.svg"
              alt="Inolib Accueil"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex space-x-12 font-sans">
            <li className="relative group">
              <Link href="/auditer" className="hover:text-yellow-500 flex items-center">
                Auditer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/auditer/option1" className="block px-4 py-2 hover:bg-gray-200">Audit d'accessibilité numérique </Link>
                <Link href="/auditer/option2" className="block px-4 py-2 hover:bg-gray-200">Test utilisateurs</Link>
                <Link href="/auditer/option2" className="block px-4 py-2 hover:bg-gray-200">Audit de conformité</Link>
              </div>
            </li>
            <li className="relative group">
              <Link href="/accompagner" className="hover:text-yellow-500 flex items-center">
                Accompagner
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             
              </div>
            </li>
            <li className="relative group">
              <Link href="/developper" className="hover:text-yellow-500 flex items-center">
                Développer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               
            </li>
            <li className="relative group">
              <Link href="/former" className="hover:text-yellow-500 flex items-center">
                Former
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
              </div>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-yellow-500">
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
    </header>
  );
}
