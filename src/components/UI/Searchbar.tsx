"use client";

import debounce from "lodash/debounce";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type SearchProps = {
  color : string;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
};

const SearchBar = ({ isSearchOpen, setIsSearchOpen, color }: SearchProps) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Définit une fonction qui exécute la recherche après un délai de 300ms
  const debouncedSearch = debounce((query: string) => {
    if (query.trim()) {
      // Vérifie que la recherche n'est pas vide
      router.push(`/search-results?query=${query}`);
    }
  }, 300);
  // on inclut la fonction de recherche dans un hook useCallback pour éviter les répétitions
  const handleSearch = useCallback(
    (query: string) => {
      debouncedSearch(query);
    },
    [debouncedSearch],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="relative">
      <div className={`relative ${isSearchOpen ? "block" : "hidden"} lg:block`}>
        <svg
          className="absolute left-3 top-2.5 h-6 w-6 text-gray-500"
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
        <input
          type="text"
          placeholder="Rechercher"
          className="w-72 rounded-full border-2 px-4 py-2 pl-10 text-black focus:outline-none"
          aria-label="barre de recherche articles ou pages"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim() && handleSearch(query)} // Exécute seulement si le champ n'est pas vide
        />

        <button
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-500 md:hidden"
          aria-label="Fermer la recherche"
          onClick={() => setIsSearchOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {!isSearchOpen && (
        <button
          className="lg:hidden mr-6"
          aria-label="Ouvrir la recherche"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <svg
            className={`h-8 w-8 ${color}`}
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
        </button>
      )}
    </div>
  );
};

export default SearchBar;
