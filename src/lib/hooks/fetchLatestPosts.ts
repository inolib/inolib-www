import type { PropsPost } from "~/lib/types/features/componentTypes/types";

// Fonction pour afficher les 3 derniers articles
export const fetchLatestPosts = async (): Promise<PropsPost[]> => {
  const res = await fetch("https://backend.inolib.fr/wp-json/wp/v2/posts?per_page=3&orderby=date&order=desc&_embed");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const posts = await res.json();

  return posts.map((post: any) => {
    // Extraction de l'auteur
    const author = post._embedded?.author?.[0]?.name || "Unknown Author";

    // Extraction des catégories (si présentes)
    const categories = post._embedded?.["wp:term"]?.[0]?.map((term: any) => term.name) || [];

    return {
      id: post.id,
      title: post.title,
      content: post.content,
      slug: post.slug,
      img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      authorName: author,
      date: post.date,
      categoryNames: categories,
    };
  });
};
