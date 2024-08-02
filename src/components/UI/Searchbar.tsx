'use client';
import { useState } from 'react';
import Link from 'next/link';
import useSearchContent from '~/lib/hooks/useSearchContent';
import SearchResults from './SearchResults';
import { Results } from '~/lib/types/features/searchs/types';

// Fonction pour rechercher des articles et des pages
async function searchContent(query: string): Promise<Results> {
  const apiBaseUrl = 'http://localhost/WORDPRESS/wp-json/wp/v2';

  // Recherche d'articles
  const articlesRes = await fetch(`${apiBaseUrl}/posts?search=${query}`);
  const articles = await articlesRes.json();

  // Recherche de pages
  const pagesRes = await fetch(`${apiBaseUrl}/pages?search=${query}`);
  const pages = await pagesRes.json();

  // Pages statiques
  const staticPagesData = [
    'Audit',
    'Accompagnement',
    'Développement',
    'Formations',
    'À propos',
    'Contact',
  ];


//
  const staticPages = staticPagesData 
    .map(title => ({ title, url: `/pages/${title.toLowerCase().replace(/ /g, '')}` }))
    .filter(page => page.title.toLowerCase().includes(query.toLowerCase()));

  return { articles, pages, staticPages };
}

export default function SearchBar() {
  const [query, setQuery] = useState(''); 
  const [showSearch, setShowSearch] = useState(false);
  const results = useSearchContent(query, searchContent);

  return (
    <div className="relative">
      {/* Barre de recherche visible au-dessus de 820px */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Rechercher"
          className="rounded-full py-2 px-4 pl-10 w-64 text-black focus:outline-none"
          aria-label="Rechercher"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

        {query && <SearchResults query={query} results={results} />}
      </div>

      {/* Icône de loupe visible en dessous de 820px */}
      <button
        className="md:hidden absolute left-14 mr-2 "
        aria-label="Ouvrir la recherche"
        onClick={() => setShowSearch(true)}
        aria-expanded={showSearch}
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

      {/* Modal de recherche pour les écrans a partir de 820 px */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowSearch(false)}
              aria-label="Fermer la recherche"
            >
              &times;
            </button>
            <input
              type="text"
              placeholder="Rechercher"
              className="rounded-full py-2 px-4 pl-10 w-full text-black focus:outline-none"
              aria-label="Rechercher"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && <SearchResults query={query} results={results} />}
          </div>
        </div>
      )}
    </div>
  );
}
