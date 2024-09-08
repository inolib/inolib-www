'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import debounce from 'lodash/debounce'; 
import { boolean } from 'zod';

type searchProps={
isSearchOpen:boolean;
setIsSearchOpen:(open:boolean)=> void,
};

export default function SearchBar( {isSearchOpen ,setIsSearchOpen}: searchProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

// Définit une fonction qui exécute la recherche après un délai de 300ms
  const debouncedSearch = debounce((query: string) => {
    if (query.trim()) { // Vérifie que la recherche n'est pas vide
      router.push(`/search-results?query=${query}`);
    }
  }, 300);
// on inclut la fonction de recherche dans un hook useCallback pour éviter les répétitions
  const handleSearch = useCallback(
    (query: string) => {
      debouncedSearch(query);
    },
    [debouncedSearch] 
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="relative">
      <div className={`relative ${isSearchOpen ? 'block' : 'hidden'} md:block`}>
        <input
      
          type="text"
          placeholder="Rechercher"
          className="rounded-full py-2 px-4 pl-10 w-64 text-black focus:outline-none border-2"
          aria-label="barre de recherche articles ou pages"
          value={query}
          
          onChange={handleInputChange}
          onFocus={() => query.trim() && handleSearch(query)} // Exécute seulement si le champ n'est pas vide
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
        <button
            className="md:hidden absolute right-3 top-2.5 w-5 h-5 text-gray-500"
            aria-label="Fermer la recherche"
            onClick={() => setIsSearchOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
      </div>
      {!isSearchOpen && (
      <button
        className="md:hidden absolute left-14 mr-2 ml-20 mb-16"
        aria-label="Ouvrir la recherche"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <svg
          className="w-5 h-5 text-gray-500"
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
}
