"use client";

import DOMPurify from "dompurify";
import { indexOf } from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";

import { CommentForm } from "~/components/Comment";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";
import { fetchComments, fetchPost } from "~/lib/hooks/fetchPost";
import type { OneComment, Post, Props } from "~/lib/types/features/componentTypes/types";

const Single = ({ params }: Props) => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<OneComment[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("params", params.slug);
  console.log("post", post);
  useEffect(() => {
    async function fetchPostAndComments() {
      try {
        const fetchedPost = await fetchPost(params.slug);
        setPost(fetchedPost);
        if (fetchedPost) {
          const fetchedComments = await fetchComments(fetchedPost.id);
          setComments(fetchedComments);
        }
      } catch (error) {
        console.error("Failed to fetch post or comments:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPostAndComments();
  }, [params.slug]);

  const handleCommentAdded = (newComment: OneComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      const response = await fetch(`https://backend.inolib.fr/wp-json/wp/v2/comments/${commentId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post non trouvé</div>;
  }


  return (
    <div className="overflow-hidden">
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/blog/slug/#slug " />
      <Header
        textColor="text-black"
        logosrc="/Logo/LogoNoir.svg"
        burgerMenu="/Icons/menuBlack.svg"
        MainNavProps={{
          hoverClass: "hover:text-green-800",
          hoverBorder: "hover:border-green-800",
        }}
      />
      <section id="slug">
      <div className="flex w-full flex-col items-center px-6 md:px-10">
        <div className="flex w-full justify-start xl:w-[1200px]">
          <Breadcrumb className="flex  flex-row flex-nowrap items-center">
            <BreadcrumbList className="mb-6 mt-10 hidden flex-row items-center space-x-2 md:flex w-80">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Image src="/Icons/BreadcrumIcon.svg" alt="Home" width={20} height={20} />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/blog/${post.slug}`}>{post.title.rendered.slice(0, 15)}...</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex w-full flex-col-reverse py-16 md:flex-row xl:w-[1200px]">
          <div className="flex flex-col items-start md:w-[50%]">
            {post.categoryNames.map((category, index) => (
              <span
                key={index}
                className="mb-2 mt-10 inline-block rounded-full bg-[#CBE0E4] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800"
              >
                {category}
              </span>
            ))}
            <h1 className="mt-2 text-3xl font-semibold">{post.title.rendered}</h1>
            <div className="mt-4 text-gray-700 line-clamp-2">
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
            <p className="mb-6 mt-4 font-manrope">
              {post.authorName}{" "}
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center justify-center md:w-[50%]">
            <Image src="/Homepage/article.svg" alt="" width={500} height={500} />
          </div>
        </div>{" "}
        <div className="py-14 xl:w-[1200px]">
          <article className="" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className="mb-4 mt-4 line-clamp-3 text-gray-700"
          />
        </div>
      </div>

      <div className="ml-10 grid gap-8 md:grid-cols-2">{/* Breadcrumb */}</div>
        <div className="flex mx-auto ">

        <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
      </div>
     <div>
        {comments.map((comment) => (
          <div key={comment.id} className="comment justify-end py-4" aria-label="lire le commentaire">
            <p>
              <strong>{comment.author_name}</strong>
            </p>
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content.rendered) }} />
          </div>
        ))}
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default Single;
