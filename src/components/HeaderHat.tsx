'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "~/components/UI/Button";
import SearchBar from "~/components/UI/Searchbar";

type HeaderHatProps = {
  bgColor: string;
  textColor: string;
  buttonVariant: "ButtonJaune" | "buttonNoir" | "outline" | "secondary" | "ghost" | "link" | "buttonNoirOutline";
};

export default function HeaderHat({ bgColor, textColor, buttonVariant,  }: HeaderHatProps) {
const router = useRouter();
const handleLink = () => {
  router.push('/Contact');
};

  return (
    <header className={`relative ${bgColor} ${textColor} p-4 flex items-center justify-between`}>
      <Link href="/#services" className={`${textColor} hover:text-gray-400 ml-28 flex flex-row font-semibold`} aria-label="Accéder au contenu">
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
      <div className="flex-1 flex justify-center">

        <SearchBar />
       
      </div>
      <Button 
       variant={buttonVariant} 
       aria-label="Nous contacter" 
       onClick={handleLink}
       className="hidden md:block mr-6"> Nous contacter </Button>

    </header>
  );
};
