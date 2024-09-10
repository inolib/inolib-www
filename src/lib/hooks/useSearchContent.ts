"use client";

import { useEffect, useState } from "react";
import type { Results, SearchContent } from "~/lib/types/features/searchs/types";

const useSearchContent = (query: string, searchContent: SearchContent) => {
  const [results, setResults] = useState<Results>({ articles: [], staticPages: [] });

  useEffect(() => {
    if (query.length > 2) {
      const timeoutId = setTimeout(async () => {
        const searchResults = await searchContent(query);
        setResults(searchResults);
      }, 200);

      return () => clearTimeout(timeoutId);
    } else {
      setResults({ articles: [], staticPages: [] });
    }
  }, [query, searchContent]);

  return results;
};

export default useSearchContent;
