import Link from 'next/link';
import { Results } from '~/lib/types/features/searchs/types';

interface SearchResultsProps {
    query: string;
    results: Results;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, results}) => (
    <div className="absolute mt-2 w-full bg-white shadow-lg rounded-md p-4 z-50">
    {results.articles.length === 0 && results.pages.length === 0 && results.staticPages.length === 0 && (
      <p className="text-gray-500">Aucun résultat trouvé</p>
    )}
    {results.articles.length > 0 && (
      <div>
        <h3 className="font-bold">Articles</h3>
        <ul>
          {results.articles.map(article => (
            <li key={article.id}>
              <Link href={`/blog/${article.slug}`}>
                {article.title.rendered}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
    {results.pages.length > 0 && (
      <div>
        <h3 className="font-bold">Pages</h3>
        <ul>
          {results.pages.map(page => (
            <li key={page.id}>
              <Link href={`/${page.slug}`}>
                {page.title.rendered}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
    {results.staticPages.length > 0 && (
      <div>
        <h3 className="font-bold">Pages statiques</h3>
        <ul>
          {results.staticPages.map((page, index) => (
            <li key={index}>
              <Link href={page.url}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default SearchResults;