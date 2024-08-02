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
      <Link href="#content" className={`${textColor} hover:text-gray-400 ml-20 `} aria-label="Accéder au contenu">
        Accéder au contenu
      </Link>
      <div className="flex-1 flex justify-center">
        <SearchBar />
       
      </div>
      <Button   href='/contact' variant={buttonVariant} aria-label="Nous contacter" className="hidden md:block"> Nous contacter </Button>
    </header>
  );
}
