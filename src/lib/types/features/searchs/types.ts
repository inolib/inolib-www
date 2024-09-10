export type Results = {
  articles: SearchResult[];
  staticPages: StaticPage[];
};

export type SearchContent = (query: string) => Promise<Results>;

export type SearchResult = {
  id: number;
  title: string;

  content: string;

  img: string;
  slug: string;

  categoryNames: [];
  authorName: string;
  date: string;
};

export type StaticPage = {
  title: string;
  url: string;
};
