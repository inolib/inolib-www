'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchLatestPosts } from '~/lib/hooks/fetchLatestPosts';

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

export default function BlogSection() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchLatestPosts();
        setLatestPosts(posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-8 bg-white">
      <div className='flex flex-rows justify-between px-16'>
      <div>
      <span className="inline-block bg-[#CBE0E4] text-sm text-black-500 px-3 py-[1px]  mb-2 h-6 rounded-full" aria-label="articles recents">Actualité</span>
      <h2 className="text-3xl font-bold mb-4 pb-4">Nos dernières actualités</h2>
      <p className="text-gray-700 mb-8">Tool and strategies modern teams need to help their companies grow.</p>
      </div>
      <div>
<Link href='/blog' className='bg-[#254147] rounded-lg w-56 h-48 text-white'>voir tous les articles </Link></div>
</div>
      <div className="grid gap-6 px-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {latestPosts.map((post) => (
          <article key={post.id}  className=''>
            {post.img && (
              <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
                <Image
                  src={post.img}
                  alt={post.title.rendered}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              {post.categoryNames.map((category, index) => (
                <span key={index} className="inline-block bg-[#CBE0E4] text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                  {category}
                </span>
              ))}
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`}  dangerouslySetInnerHTML={{ __html: post.title.rendered }} >
                 
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.authorName}</p>
              <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
