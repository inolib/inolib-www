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

type Comment = {
  id: number;
  author_name: string;
  content: {
    rendered: string;
  };
};

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  img:string;
  slug: string;
  authorName: string;
  date: string;
};

type Props = {
  params: {
    slug: string;
  };
};

export default function Single({ params }: Props) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
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

  const handleCommentAdded = (newComment: Comment) => {
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
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" />
      <Header textColor="text-black" logosrc="/Logo/logo-jaune-noir.svg" burgerMenu="" />
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-10 flex items-center w-5/12 ml-11">
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
      <div className="grid md:grid-cols-2 gap-8">
        <div className="py-14 px-10">
          <Image src={post.img} alt='' width={200}> height={200}</Image>
          <h1>{post.title.rendered}</h1>
          <article className="font-bold" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <p className="font-manrope">
            {post.authorName} {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
        <div>
          <Image src="/HomePage/article.svg" alt="" width={500} height={500} />
        </div>
      </div>
      <div>
        <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>
                <strong>{comment.author_name}</strong>
              </p>
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content.rendered) }} />
              <button onClick={() => handleDeleteComment(comment.id)} className="text-red-500">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
