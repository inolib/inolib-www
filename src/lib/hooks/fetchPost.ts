// 

export async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/posts?slug=${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }
    const posts = await res.json();
    if (posts.length === 0) {
      return null; // Aucun post trouvé pour ce slug
    }
    const post = posts[0]; // On prend le premier post trouvé
    const authorRes = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/users/${post.author}`);
    if (!authorRes.ok) {
      throw new Error("Failed to fetch author");
    }
    const author = await authorRes.json();
    post.authorName = author.name;
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function fetchComments(postId: number): Promise<Comment[]> {
  try {
    const res = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/comments?post=${postId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch comments");
    }
    const comments = await res.json();
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}
