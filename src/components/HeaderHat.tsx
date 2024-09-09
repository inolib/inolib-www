"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "~/components/UI/Button";
import SearchBar from "~/components/UI/Searchbar";
import { useState } from "react";

type HeaderHatProps = {
  bgColor: string;
  textColor: string;
  buttonVariant: "ButtonJaune" | "buttonNoir" | "outline" | "secondary" | "ghost" | "link" | "buttonNoirOutline";
  link: string;
};

export default function HeaderHat({ bgColor, textColor, buttonVariant, link }: HeaderHatProps) {
  const router = useRouter();
  const handleLink = () => {
    router.push("/Contact");
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className={`relative ${bgColor} ${textColor} p-4 xs:space-x-8 lg:flex lg:items-center lg:space-x-56`}>
      {!isSearchOpen && (
        <Link
          href={link}
          className={`${textColor} flex flex-row font-semibold hover:text-gray-400 xs:ml-10 lg:ml-28`}
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
      <div className=" ">
        <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      </div>
      <Button
        variant={buttonVariant}
        aria-label="Nous contacter"
        onClick={handleLink}
        className="mr-20 hidden md:block"
      >
        {" "}
        Nous contacter{" "}
      </Button>
    </header>
  );
}
