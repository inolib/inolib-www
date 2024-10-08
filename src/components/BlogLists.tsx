"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";
import type { Post, Category } from "~/lib/types/features/componentTypes/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./UI/DropDownMenu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./UI/Pagination";

// Fonction pour récupérer tous les articles
const fetchAllPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://backend.inolib.fr/wp-json/wp/v2/posts?per_page=100&_embed");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  // les posts sont récupérés sous forme de tableau d'objets
  const posts = await res.json();
  // On retourne un tableau d'objets avec les propriétés id, title, content, slug, img, authorName, date et categoryNames
  return posts.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    slug: post.slug,
    img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    authorName: post._embedded?.author?.[0]?.name || "Inconnu",
    date: post.date,
    categoryNames: post._embedded?.["wp:term"]?.[0]?.map((term: any) => term.name) || [],
  }));
};

// Composant BlogList
const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const categoryParam = searchParams.get("category") || "Tous les articles";
  const currentPage = pageParam ? parseInt(pageParam) : 1; // Définir la page actuelle
  const postsPerPage = 9; // Définir le nombre d'articles par page

  useEffect(() => {
    async function fetchData() {
      try {
        const allPostsData = await fetchAllPosts();
        setAllPosts(allPostsData);
        // Récupérer les catégories uniques
        const uniqueCategories = Array.from(new Set(allPostsData.flatMap((post) => post.categoryNames)));
        setCategories(uniqueCategories.map((name, index) => ({ id: index, name })));
        filterAndPaginatePosts(allPostsData, categoryParam, searchTerm, currentPage);
      } catch (error) {
        (error as Error).message;
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage, categoryParam, searchTerm]);
  const filterAndPaginatePosts = (allPosts: Post[], category: string, searchTerm: string, page: number) => {
    let filteredPosts =
      category === "Tous les articles" ? allPosts : allPosts.filter((post) => post.categoryNames.includes(category));

    if (searchTerm) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.rendered.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setPosts(filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage));
  };

  const handleCategorySelect = (category: string) => {
    setLoading(true);
    setPosts([]);
    router.push(`?category=${category}&page=1`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    filterAndPaginatePosts(allPosts, categoryParam, searchValue, currentPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // calculer le nombre de pages dynamiquement en fonction du nombre d'articles
  const filteredPosts =
    categoryParam === "Tous les articles"
      ? allPosts
      : allPosts.filter((post) => post.categoryNames.includes(categoryParam));
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="container mx-auto px-2 py-8 xs:px-0">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/ ">
              <Image src="/Icons/BreadcrumIcon.svg" alt=" page accueil" width={20} height={20}></Image>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
        <header className="mb-1  sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Blog</h1>
        </header>
        <p className="mb-6 max-w-lg  sm:text-left text-gray-700">
          Décrypte l'actualité de l'accessibilité numérique, publie des articles techniques (design, développement) et partage ses rétrospectives.
        </p>


        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 border-b-2 border-gray-200 w-full sm:w-4/5 lg:w-[80%] mx-auto" >
            <button
              onClick={() => handleCategorySelect("Tous les articles")}
              className={`border-green-300 pb-4 hover:border-b-4 ${categoryParam === "Tous les articles" ? "text-gray-700" : "text-gray-800"}`}
            >
              Tous les articles
            </button>
            {/* Dropdown pour les catégories des articles */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-start px-4 pb-4">
                Catégories
                <ChevronDown className="ml-2 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>Catégories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onSelect={() => handleCategorySelect(category.name)}
                    className={`rounded px-3 py-1 ${categoryParam === category.name ? "text-gray-700" : "text-gray-800"}`}
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Barre de recherche des articles en fonction de leurs titres et contenus */}
          <div className="relative w-full sm:w-auto">
            <input
              id="search-input"
              type="text"
              placeholder="Rechercher un article"
              aria-label="barre de recherche articles"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full sm:w-72 rounded-full border border-gray-300 px-4 py-2"
            />
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.42-1.42l4.25 4.25a1 1 0 01-1.42 1.42l-4.25-4.25zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Liste des articles */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {posts.map((post) => (
    <div key={post.id} className="rounded-3xl bg-white">
      {/* Affichage des images */}
      {post.img && (
        <div className="h-48 w-full overflow-hidden rounded-xl">
          <Image src={post.img} alt="" width={200} height={200} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="pt-6">
        {post.categoryNames.map((category, index) => (
          <span
            key={index}
            className="mb-2 inline-block rounded-full bg-[#CBE0E4] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800"
          >
            {category}
          </span>
        ))}
        <h2 className="mb-2 text-xl font-semibold">
          <Link href={`/blog/${post.slug}`}>
            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
        </h2>
        <div className="mt-4 text-gray-700 line-clamp-3">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        <p className="mt-4 font-semibold text-black">{post.authorName}</p>
        <p className="text-gray-500">
          {new Date(post.date).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  ))}
</div>


      <div className="flex justify-center mt-8">
        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem className="flex justify-center space-x-2 ">
              <PaginationPrevious
                href={`?page=${currentPage - 1}`}
                className={currentPage === 1 ? "cursor-not-allowed opacity-75" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink href={`?page=${index + 1}`} isActive={currentPage === index + 1}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href={`?page=${currentPage + 1}`}
                className={currentPage === totalPages ? "cursor-not-allowed opacity-75" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default BlogList;
