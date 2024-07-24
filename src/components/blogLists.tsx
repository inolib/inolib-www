'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '~/components/UI/Breadcrumb';

type Category = {
  id: number;
  name: string;
};

type Post = { 
  id: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  img: string;
  categories: number[];
};

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('http://localhost/WORDPRESS/wp-json/wp/v2/posts');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const postsData = await res.json();
        setPosts(postsData);

        // Extraire les catégories uniques des articles
        const categoriesData: Category[] = [];
        postsData.forEach((post: Post) => {
          post.categories.forEach(catId => {
            if (!categoriesData.find(cat => cat.id === catId)) {
              categoriesData.push({ id: catId, name: '' }); // Nous remplirons les noms plus tard
            }
          });
        });

        setCategories(categoriesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchCategoryNames() {
      if (categories.length > 0) {
        try {
          const categoryIds = categories.map(cat => cat.id).join(',');
          const res = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/categories?include=${categoryIds}`);
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const categoryNamesData = await res.json();
          setCategories(prevCategories => 
            prevCategories.map(cat => {
              const matchedCat = categoryNamesData.find((c: Category) => c.id === cat.id);
              return matchedCat ? { ...cat, name: matchedCat.name } : cat;
            })
          );
        } catch (error) {
          console.error('Failed to fetch category names:', error);
        }
      }
    }

    fetchCategoryNames();
  }, [categories]);

  const filteredPosts = posts.filter(post => 
    (selectedCategory === 'Tous les articles' || post.categories.some(catId => categories.find(cat => cat.id === catId)?.name === selectedCategory)) &&
    (post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.rendered.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="container mx-6 py-8 px-4 lg:px-0 ml-12 mt-28">
      <Breadcrumb >
        <BreadcrumbList className='mb-10'>
          <BreadcrumbItem>
            <BreadcrumbLink href="/"><Image src='/Icons/BreadcrumIcon.svg' alt='' width={20} height={20}></Image></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        </header>
        <p className=" mb-12">Décrypte l'actualité de l'accessibilité numérique, publie des articles techniques (design, développement) et partage ses rétrospectives.</p>
        
        <div className="flex space-x-52 items-center mb-6 ">
          <div className="flex space-x-2 border-b-2">{/*  integrer un combobox de shadcn */}
            {['Tous les articles', ...categories.map(category => category.name)].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded ${selectedCategory === category ? ' text-gray-700' : ' text-gray-800'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un article"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.25 4.25a1 1 0 01-1.42 1.42l-4.25-4.25zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path></svg>
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mr-24 pt-8">
          {filteredPosts.map((post) => (
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
              <div className="pt-6">
                {post.categories.map(catId => {
                  const category = categories.find(cat => cat.id === catId);
                  return (
                    category && (
                      <span key={catId} className="inline-block bg-[#CBE0E4] text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                        {category.name}
                      </span>
                    )
                  );
                })}
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
              </div>
            </div>
          ))}
        </div>
      </Breadcrumb>
    </div>
  );
}
