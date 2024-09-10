"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";
import SearchResults from "~/components/UI/SearchResults";
import { searchContent } from "~/lib/hooks/searchContent";
import useSearchContent from "~/lib/hooks/useSearchContent";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const results = useSearchContent(query, searchContent);

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb>
        <BreadcrumbList className="mb-10">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src="/Icons/BreadcrumIcon.svg" alt="retour a la page d'accueil" width={20} height={20}></Image>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/search-results">Resultas</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mb-4 ml-20 mt-4 text-2xl font-bold">Résultats de recherche pour &quot;{query}&quot;</h1>
      <SearchResults query={query} results={results} />
    </div>
  );
};

export default SearchResultsPage;
