'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "~/components/UI/Button";
import SearchBar from "~/components/UI/Searchbar";
import {useState } from 'react'

type HeaderHatProps = {
  bgColor: string;
  textColor: string;
  buttonVariant: "ButtonJaune" | "buttonNoir" | "outline" | "secondary" | "ghost" | "link" | "buttonNoirOutline";
  link:string
};

export default function HeaderHat({ bgColor, textColor, buttonVariant,link  }: HeaderHatProps) {
const router = useRouter();
const handleLink = () => {
  router.push('/Contact');
};
const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className={`relative ${bgColor} ${textColor} p-4 lg:flex lg:items-center lg:justify-between xs:space-x-8`}>
      {! isSearchOpen  && ( 
      <Link href={link} className={`${textColor} hover:text-gray-400 lg:ml-28 xs:ml-10 flex flex-row font-semibold`} aria-label="Accéder au contenu">
        Accéder au contenu
        <svg
      className="w-4 h-4 ml-2 mt-[5px] " 
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19l7-7-7-7"
      ></path>
    </svg>

      </Link>
      )}
      <div className="  ">

        <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
       
      </div>
      <Button 
       variant={buttonVariant} 
       aria-label="Nous contacter" 
       onClick={handleLink}
       className="hidden md:block lg:mr-60 "> Nous contacter </Button>

    </header>
  );
};
