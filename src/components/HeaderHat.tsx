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
  const handleLink = () => {
    router.push("/Contact");
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className={`relative ${bgColor} ${textColor} flex h-20 justify-center 2xl:pl-6`}>
      <div className="flex h-full w-full items-center justify-between 2xl:w-[1536px]">
        {!isSearchOpen && (
          <Link
            href={link}
            className={`${textColor} ml-8 flex flex-row font-semibold hover:text-gray-400`}
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
          className="mr-8 hidden lg:block"
        >
          {" "}
          Nous contacter{" "}
        </Button>
      </div>
    </header>
  );
};

export default HeaderHat;
