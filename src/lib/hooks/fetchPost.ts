import type { OneComment, Post } from "~/lib/types/features/componentTypes/types";

// fetch les posts et les commentaires d'un post depuis l'API REST de WordPress.
// fetch les posts
export const fetchPost = async (slug: string): Promise<Post | null> => {
  try {
    const res = await fetch(`https://backend.inolib.fr/wp-json/wp/v2/posts?slug=${slug}&_embed`);

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    const posts = await res.json();

    if (posts.length === 0) {
      return null; // Aucun post trouvé pour ce slug
    }

    const post = posts[0]; // On prend le premier post trouvé
    console.log("post trouvé", post);
    const authorRes = await fetch(`https://backend.inolib.fr/wp-json/wp/v2/users/${post.author}`);
    console.log("authorRes", authorRes);
    /*if (!authorRes.ok) {
      throw new Error("Failed to fetch author");
    }

    const author = await authorRes.json();
    post.authorName = author.name;
*/
    const categories = post._embedded["wp:term"]?.[0]?.map((term: any) => term.name) || [];
    post.categoryNames = categories;

    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

// fetch les commentaires d'un post depuis l'API REST de WordPress.
export const fetchComments = async (postId: number): Promise<OneComment[]> => {
  try {
    const res = await fetch(`https://backend.inolib.fr/wp-json/wp/v2/comments?post=${postId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch comments");
    }

    const comments = await res.json();

    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
