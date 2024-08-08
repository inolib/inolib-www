import Link from 'next/link';
import { Button } from "~/components/UI/Button";
import SearchBar from "~/components/UI/Searchbar";

type HeaderHatProps ={
  bgColor: string ;
  textColor: string;
  buttonVariant: string;
  
  

}

export default function HeaderHat({ bgColor, textColor, buttonVariant,  }: HeaderHatProps) {
  return (
    <header className={`relative ${bgColor} ${textColor} p-4 flex items-center justify-between`}>
      <Link href="#content" className={`${textColor} hover:text-gray-400 ml-20 flex flex-row `} aria-label="Accéder au contenu">
        Accéder au contenu
        <svg
      className='w-4 h-4 ml-1 mt-1 transition-transform duration-300  transform rotate-180'
      fill="none"
      stroke="currentColor"
      viewBox=" 0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>

      </Link>
      <div className="flex-1 flex justify-center">

        <SearchBar />
       
      </div>
      <Button   href='/contact' variant={buttonVariant} aria-label="Nous contacter" className="hidden md:block"> Nous contacter </Button>

    </header>
  );
};
