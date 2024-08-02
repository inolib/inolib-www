// types.ts
export interface SearchResult {
    id: number;
    title: {
      rendered: string;
    };
    slug: string;
  }
  
  export interface StaticPage {
    title: string;
    url: string;
  }
  
  export interface Results {
    articles: SearchResult[];
    pages: SearchResult[];
    staticPages: StaticPage[];
  }
  
  export type SearchContent = (query: string) => Promise<Results>;
  