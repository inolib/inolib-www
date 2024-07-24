import Link from 'next/link';
import { Button } from "~/components/UI/Button";

type HeaderHatProps ={
  bgColor: string ;
  textColor: string;
  buttonVariant: string;
  
  

}

export default function HeaderHat({ bgColor, textColor, buttonVariant,  }: HeaderHatProps) {
  return (
    <header className={`relative ${bgColor} ${textColor} p-4 flex items-center justify-between`}>
      <Link href="#content" className={`${textColor} hover:text-gray-400 ml-20 `} aria-label="Accéder au contenu">
        Accéder au contenu
      </Link>
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher"
            className="rounded-full py-2 px-4 pl-10 w-64 text-black focus:outline-none"
            aria-label="Rechercher"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.65-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <Button  variant={buttonVariant} aria-label="Nous contacter" > <Link href='/pages/contact'>Nous contacter </Link></Button>
    </header>
  );
}
