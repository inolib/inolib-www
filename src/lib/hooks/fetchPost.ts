import type { OneComment, Post } from "~/lib/types/features/componentTypes/types";

// fetch les posts et les commentaires d'un post depuis l'API REST de WordPress.
// fetch les posts
export const fetchPost = async (slug: string): Promise<Post | null> => {
  try {
    // On utilise `_embed` pour récupérer les données de l'auteur directement dans la réponse du post
    const res = await fetch(`https://backend.inolib.fr/wp-json/wp/v2/posts?slug=${slug}&_embed`);

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    const posts = await res.json();

    if (posts.length === 0) {
      return null; // Aucun post trouvé pour ce slug
    }

    const post = posts[0]; // On prend le premier post trouvé

    // Récupération du nom de l'auteur à partir de la réponse `_embedded`
    const authorName = post._embedded?.['author']?.[0]?.name || "Auteur inconnu";
    post.authorName = authorName;

    // Récupération des catégories à partir de la réponse `_embedded`
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


