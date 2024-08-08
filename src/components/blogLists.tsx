'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '~/components/UI/Breadcrumb';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './UI/Pagination';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./UI/DropDownMenu";
import { ChevronDown } from 'lucide-react';

// TypeScript types
type Post = { 
  id: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  img: string;
  authorName: string;
  date: string;
  categoryNames: string[];
};

type Category = { 
  id: number;
  name: string;
};

// Fonction pour récupérer tous les articles
async function fetchAllPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost/WORDPRESS/wp-json/wp/v2/posts?per_page=100');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  // les posts sont récupérés sous forme de tableau d'objets
  const posts = await res.json();
  // On retourne un tableau d'objets avec les propriétés id, title, content, slug, img, authorName, date et categoryNames
  return posts.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    slug: post.slug,
    img: post.img,
    authorName: post.author_name,
    date: post.date,
    categoryNames: post.category_names,
  }));
}

// Fonction pour récupérer les catégories 
// ici on est obligé de faire un appel à l'API pour récupérer les catégories même si on a déjà les catégories dans les articles car pour les filtres on a besoin de toutes les catégories
async function fetchCategories(): Promise<Category[]> {
  const res = await fetch('http://localhost/WORDPRESS/wp-json/wp/v2/categories');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const categories = await res.json();
  return categories.map((category: any) => ({
    id: category.id,
    name: category.name,
  }));
}

// Composant BlogList
export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const categoryParam = searchParams.get('category') || 'Tous les articles';
  const currentPage = pageParam ? parseInt(pageParam) : 1; // Définir la page actuelle
  const postsPerPage = 2; // Définir le nombre d'articles par page

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesData, allPostsData] = await Promise.all([
          fetchCategories(),
          fetchAllPosts()
        ]);
        setCategories(categoriesData);
        setAllPosts(allPostsData);
        filterAndPaginatePosts(allPostsData, categoryParam, searchTerm, currentPage);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage, categoryParam]);

  const filterAndPaginatePosts = (allPosts: Post[], category: string, searchTerm: string, page: number) => {
    let filteredPosts = category === 'Tous les articles'
      ? allPosts
      : allPosts.filter(post => post.categoryNames.includes(category));

    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post => 
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.rendered.toLowerCase().includes(searchTerm.toLowerCase())
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
  const filteredPosts = categoryParam === 'Tous les articles'
    ? allPosts
    : allPosts.filter(post => post.categoryNames.includes(categoryParam));
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="container mx-6 py-8 px-4 lg:px-0 ml-12 mt-28">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className='mb-10'>
          <BreadcrumbItem>
            <BreadcrumbLink href="/"><Image src='/Icons/BreadcrumIcon.svg' alt='' width={20} height={20}></Image></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>

        <header className="mb-1">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        </header>
        <p className=" mb-12 max-w-xl">Décrypte l'actualité de l'accessibilité numérique, publie des articles techniques (design, développement) et partage ses rétrospectives.</p>
        
        <div className="flex space-x-4 mb-6">
          <div className="flex items-center space-x-2 border-b-2 border-gray-200 w-200 " >
            <button
              onClick={() => handleCategorySelect('Tous les articles')}
              className={` pb-4 hover:border-b-4 border-green-300 ${categoryParam === 'Tous les articles' ? ' text-gray-700' : ' text-gray-800'}`}
            >
              Tous les articles
              
            </button>
            {/* Dropdown pour les catégories des articles */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 pb-4 flex flex-row items-start  ">
                Catégories
                <ChevronDown className=" w-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white'>
                <DropdownMenuLabel>Catégories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map(category => (
                  <DropdownMenuItem
                    key={category.id}
                    onSelect={() => handleCategorySelect(category.name)}
                    className={`px-3 py-1 rounded ${categoryParam === category.name ? ' text-gray-700' : ' text-gray-800'}`}
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>

          {/* Barre de recherche des articles en fonction de leurs titres et contenus */}
          <div className="relative" >
            <input
              type="text"
              placeholder="Rechercher un article"
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 border border-gray-300 rounded-full"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.25 4.25a1 1 0 01-1.42 1.42l-4.25-4.25zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path></svg>
            </span>
          </div>
        </div>

        {/* Liste des articles */}

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mr-24 pt-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl  ">
              {post.img && (
                <div className="w-full h-48 overflow-hidden rounded-xl">
                  <Image
                    src={post.img}
                    alt={post.title.rendered}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover "
                  />
                </div>
              )}
              {/* Afficher les catégories de chaque article */}
              <div className="pt-6">
                {post.categoryNames.map((category, index) => (
                  <span key={index} className="inline-block bg-[#CBE0E4] text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                    {category}
                  </span>
                ))}
                {/* Titre, contenu, auteur et date de publication de chaque article */}
                <div className='flex flex-row'>
                  <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <Link href={`/blog/${post.slug}`}>
                      <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </Link>
                  </h2>
                  <Link href={`/blog/${post.slug}`}>
                    <Image 
                      src='/Icons/iconA.svg' 
                      alt=''
                      width={20}
                      height={20}
                      className='' />
                  </Link>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="mt-4 text-gray-700 line-clamp-3"/>
                <p className="mt-4 text-gray-600">{post.authorName}</p>
                <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </Breadcrumb>
      {/* Pagination */}
      <Pagination className='max-w-6xl '>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${currentPage - 1}`}
              className={currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}
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
              className={currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
