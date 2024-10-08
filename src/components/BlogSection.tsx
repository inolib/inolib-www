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
    const fetchData = async () => {
      try {
        const posts = await fetchLatestPosts();
        setLatestPosts(posts);
      } catch (error) {
        console.error((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    void (async () => {
      await fetchData();
    })();
  }, []);

  if (loading) {
    return <div>Chargement…</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-8">
      <div className="flex-rows flex justify-between px-16 2xl:w-[1440px]">
        <div>
          <span
            className="text-black-500 bg-turquoise-light mb-2 inline-block h-6 rounded-full px-3 py-px text-sm"
            aria-hidden
          >
            Actualité
          </span>

          <h2 className="mb-4 pb-4 text-3xl font-bold">Nos dernières actualités</h2>

          <p className="mb-8 text-gray-700">Tool and strategies modern teams need to help their companies grow.</p>
        </div>

        <div>
          <Button onClick={handleLink} className="" href="/blog" variant={"buttonNoir"}>
            voir tous les articles
          </Button>
        </div>
      </div>

      <div className="grid gap-6 px-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <article className="" key={post.id}>
            {post.img && (
              <div className="mb-4 h-48 w-full overflow-hidden rounded-xl">
                <Image alt="" className="size-full object-cover" height={200} src={post.img} width={200} />
              </div>
            )}
            <div>
              {post.categoryNames.map((category, index) => (
                <span
                  className="bg-turquoise-light mb-2 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800"
                  key={index}
                >
                  {category}
                </span>
              ))}
              <h3 className="mb-2 text-xl font-semibold">
                <Link dangerouslySetInnerHTML={{ __html: post.title.rendered }} href={`/blog/${post.slug}`}></Link>
              </h3>
              <div
                className="mt-4 line-clamp-3 text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
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
