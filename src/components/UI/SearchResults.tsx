import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Results } from '~/lib/types/features/searchs/types';
import { searchContent } from '~/lib/hooks/searchContent'; 
import Image from 'next/image';

interface SearchResultsProps {
  query: string;
  results: Results;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query  }) => {
  const [results, setResults] = useState<Results>({ articles: [], staticPages: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      searchContent(query).then((res) => {
        setResults(res);
        setLoading(false);
      });
    } else {
      setResults({ articles: [], staticPages: [] });
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return <div>Chargement en cours...</div>
  }

  return (
    <div className="flex gap-8 pt-8 ">
      {/* Colonne gauche pour les articles */}
      <div className="w-3/4 space-y-6 ml-10">
        {results.articles.length > 0 && (
          results.articles.map(article => (
            <div key={article.id} className="bg-white rounded-3xl flex space-x-4 p-6">
              {article.img && (
                <div className="flex-shrink-0 w-1/2 h-auto overflow-hidden rounded-xl">
                  <Image
                    src={article.img}
                    alt=""
                    width={300}
                    height={300}
                    className="object-cover h-full w-full"
                  />
                </div>
              )}
              <div className="flex-grow">
                {article.categoryNames.map((category, index) => (
                  <span key={index} className="inline-block bg-[#CBE0E4] text-gray-800
                   text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                    {category}
                  </span>
                ))}
                <div className="flex flex-row">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Link href={`/blog/${article.slug}`} aria-label={'visiter le lien'}>
                      <span dangerouslySetInnerHTML={{ __html: article.title }} />
                    </Link>
                  </h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: article.content}} className="text-gray-700 line-clamp-3 mt-2"/>
                <div className="flex items-center mt-4">
                  <p className="text-gray-600">{article.authorName}</p>
                  <span className="mx-2">•</span>
                  <p className="text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
                </div>
                <Link href={`/blog/${article.slug}`} className="text-[#267888] mt-4 block">
                  Lire l'article   &rarr;
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Colonne droite pour les pages */}
      <div className="w-1/4">
        {results.staticPages.length > 0 && (
          <div className="bg-white p-6 rounded-3xl">
            <h3 className="font-bold mb-4">Pages</h3>
            <ul className="space-y-2">
              {results.staticPages.map((page, index) => (
                <li key={index} className="text-[#267888]">
                  <Link href={page.url}>
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
