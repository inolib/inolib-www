// fonction pour afficher les 3 derniers articles 
export async function fetchLatestPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost/WORDPRESS/wp-json/wp/v2/posts?per_page=3&orderby=date&order=desc');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const posts = await res.json();
  // 
  return posts.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    slug: post.slug,
    img: post.img,
    authorName: post.author_name,
    date: post.date,
    categoryNames: post.category_names,
  }));
}
