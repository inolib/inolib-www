  
"use client";
import { useState, useEffect} from 'react';
import { Results, SearchContent } from '~/lib/types/features/searchs/types';
  
  // Hook personnalisé
  const useSearchContent = (query: string, searchContent: SearchContent) => {
    const [results, setResults] = useState<Results>({ articles: [], pages: [], staticPages: [] });

    useEffect(() => {
        if (query.length > 2) {
          const timeoutId = setTimeout(async () => {
            const searchResults = await searchContent(query);
            setResults(searchResults);
          }, 300);
          return () => clearTimeout(timeoutId);
        } else {
          setResults({ articles: [], pages: [], staticPages: [] });
        }
      }, [query, searchContent]);

      return results;
  };

export default  useSearchContent;