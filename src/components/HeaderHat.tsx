"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "~/components/UI/Button";
import SearchBar from "~/components/UI/Searchbar";

type HeaderHatProps = {
  bgColor: string;
  textColor: string;
  buttonVariant: "ButtonJaune" | "buttonNoir" | "outline" | "secondary" | "ghost" | "link" | "buttonNoirOutline";
  link: string;
};

const HeaderHat = ({ bgColor, textColor, buttonVariant, link }: HeaderHatProps) => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleLink = () => {
    // Rediriger vers la page de contact
    router.push("/Contact");

    // Mettre à jour le message pour les lecteurs d'écran
    setMessage("");
  };

  return (
    <header className={`relative ${bgColor} ${textColor} flex h-20 justify-center`}>
      <div className="flex h-full w-full items-center justify-between md:mx-[3%] xl:w-[1250px]">
        {!isSearchOpen && (
          <Link
            href={link}
            className={`${textColor} ml-10 flex flex-row font-semibold hover:text-gray-400`}
            aria-label="Accéder au contenu"
          >
            Accéder au contenu
            <svg
              className="ml-2 mt-[5px] h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l7-7-7-7"></path>
            </svg>
          </Link>
        )}
        <div className="">
          <SearchBar color={textColor} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        </div>
        <Button
          variant={buttonVariant}
          aria-label="Nous contacter"
          onClick={handleLink}
          className="mr-8 hidden h-[4s6px] w-[156px] lg:block"
        >
          {" "}
          Nous contacter{" "}
        </Button>
      </div>
    </header>
  );
};

export default HeaderHat;
