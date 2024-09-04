// types.ts
export interface SearchResult {
    id: number;
    title: {
      rendered: string;
    };
    content:{
      rendred:string;
    }
    img:string;
    slug: string;
   
    categoryNames:[];
    authorName: string;
    date:string;
  }
  
  export interface StaticPage {
    title: string;
    url: string;
  }
  
  export interface Results {
    articles: SearchResult[];
    
    staticPages: StaticPage[];
  }
  
  export type SearchContent = (query: string) => Promise<Results>;
  