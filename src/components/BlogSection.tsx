"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "~/components/UI/Button";
import { fetchLatestPosts } from "~/lib/hooks/fetchLatestPosts";
import type { PropsPost } from "~/lib/types/features/componentTypes/types";

const BlogSection = () => {
  const [latestPosts, setLatestPosts] = useState<PropsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleLink = () => {
    router.push("/blog");
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchLatestPosts();
        setLatestPosts(posts);
      } catch (error) {
        (error as Error).message;
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
    <section className="py-8 ">
      <div className="flex-rows flex justify-between px-16 2xl:w-[1440px]">
        <div>
          <span
            className="text-black-500 mb-2 inline-block h-6 rounded-full bg-[#CBE0E4] px-3 py-[1px] text-sm"
            aria-label="articles recents"
          >
            Actualité
          </span>
          <h2 className="mb-4 pb-4 text-3xl font-bold">Nos dernières actualités</h2>
          <p className="mb-8 text-gray-700">Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <div>
          <Button href="/blog" variant={"buttonNoir"} onClick={handleLink} className="">
            voir tous les articles{" "}
          </Button>{" "}
        </div>
      </div>
      <div className="grid gap-6 px-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {latestPosts.map((post) => (
          <article key={post.id} className="">
            {post.img && (
              <div className="mb-4 h-48 w-full overflow-hidden rounded-xl">
                <Image src={post.img} alt="" width={200} height={200} className="h-full w-full object-cover" />
              </div>
            )}
            <div>
              {post.categoryNames.map((category, index) => (
                <span
                  key={index}
                  className="mb-2 inline-block rounded-full bg-[#CBE0E4] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800"
                >
                  {category}
                </span>
              ))}
              <h3 className="mb-2 text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                className="mt-4 line-clamp-3 text-gray-700"
              />
              <p className="mb-1 mt-4 font-semibold text-black">{post.authorName}</p>
              <p className="text-gray-500">
                {new Date(post.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
