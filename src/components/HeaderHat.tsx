"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "~/components/UI/Button";
import SearchBar from "~/components/UI/Searchbar";

type HeaderHatProps = {
  bgColor: string;
  textColor: string;
  buttonVariant: "ButtonJaune" | "buttonNoir" | "buttonNoirOutline" | "ghost" | "link" | "outline" | "secondary";
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
    <header className={`relative ${bgColor} ${textColor} flex h-20 justify-center 2xl:pl-6`}>
      <div className="flex size-full items-center justify-between 2xl:w-[1536px]">
        {/* Lien d'accès au contenu principal */}
        {!isSearchOpen && (
          <Link
            aria-label="Accéder au contenu principal"
            className={`${textColor} ml-8 flex flex-row font-semibold hover:text-gray-400`}
            href={link}
          >
            Accéder au contenu
            <svg
              className="ml-2 mt-[5px] size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19l7-7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </Link>
        )}

        {/* Barre de recherche */}
        <div>
          <SearchBar color={textColor} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        </div>

        {/* Bouton "Nous contacter" */}
        <Button onClick={handleLink} className="mr-8 hidden lg:block" variant={buttonVariant}>
          Nous contacter
        </Button>

        {/* Élément pour informer les lecteurs d'écran après la redirection */}
        <div aria-live="polite" className="sr-only"></div>
      </div>
    </header>
  );
};

export default HeaderHat;
