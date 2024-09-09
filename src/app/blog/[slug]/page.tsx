"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { CommentForm } from "~/components/Comment";
import Footer from "~/components/Footer";
import HeaderHat from "~/components/HeaderHat";
import Header from "~/components/Header";
import Image from "next/image";
import { fetchComments, fetchPost } from "~/lib/hooks/fetchPost";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";

import { Post, OneComment, Props } from "~/lib/types/features/componentTypes/types";

export default function Single({ params }: Props) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<OneComment[]>([]);
  const [loading, setLoading] = useState(true);

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
      const response = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/comments/${commentId}`, {
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
    <div>
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/#services " />
      <Header textColor="text-black" logosrc="/Logo/LogoNoir.svg" burgerMenu="" />
      <Breadcrumb>
        <BreadcrumbList className="mb-6 mt-10 w-96 ml-20">
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
            <BreadcrumbLink href={`/blog/${post.slug}`}>{post.title.rendered}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid md:grid-cols-2 gap-8 ml-10">
         {/* Breadcrumb */}
      
        <div className="py-14 px-10">
        {post.categoryNames.map((category, index) => (
                  <span key={index} className="inline-block bg-[#CBE0E4] text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                    {category}
                  </span> ))}
          <h1 className="font-semibold text-3xl mt-2">{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="mt-4 text-gray-700 line-clamp-3 mb-4"/>
        <p className="font-manrope mb-6">
            {post.authorName} {new Date(post.date).toLocaleDateString('fr-FR', {
              day:'2-digit',
              month:'short',
              year:'numeric'
            })}
          </p>
          <article className="" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        <div>
          <Image src="/HomePage/article.svg" alt="" width={500} height={500} />
        </div>
      </div>
      <div className="flex flex-row justify-between">
      <Image src="/Homepage/meufBD.svg" alt="" width={200} height={200} className="m-auto"/>
        <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
        </div>
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="comment py-4 justify-end"  aria-label='lire le commentaire'>
              <p>
                <strong>{comment.author_name}</strong>
              </p>
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content.rendered) }} />
            </div>
          ))}
       
      </div>
      <Footer />
    </div>
  );
}
