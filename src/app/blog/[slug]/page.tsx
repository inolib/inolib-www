
import Image from 'next/image';
type Post = { 
  id: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  img:string;
};

type Props = {
  params: { slug: string };
};
/*   §§§§§§§ API REST pour recupérer un article*/ 
async function fetchPost(slug: string) {
  const res = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/posts/?slug=${slug}`);
  const posts = await res.json();
  return posts.length ? posts[0] : null;
}

export default async function Single({ params }: Props) {
  const post = await fetchPost(params.slug);

  if (!post) { 
    return <div>Post non trouvé</div>;
  }

  return (
    <div >
         {post.img && <Image src={post.img} 
         alt={post.title.rendered} 
         width={600} 
         height={400} />}
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      
    </div>
  );
}
/**API pour récupérer tous les articles */
export async function generateStaticParams() {
  const res = await fetch('http://localhost/WORDPRESS/wp-json/wp/v2/posts');
  const posts = await res.json();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}
export const revalidate = 0;