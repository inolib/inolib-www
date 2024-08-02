import Header from '~/components/Header';
import HeaderHat from '~/components/HeaderHat';
import Footer from '~/components/Footer';
import Image from 'next/image';
type Post = { 
  id: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  img:string;
  authorName: string; // Ajout du nom de l'auteur
  date: string;
};

type Props = {
  params: { slug: string };
};

async function fetchPost(slug: string): Promise<Post | null> {
  const res = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/posts/?slug=${slug}`);
  const posts = await res.json();
  if (posts.length === 0) return null;

  const post = posts[0];
  const authorRes = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/users/${post.author}`);
  const author = await authorRes.json();
  post.authorName = author.name;

  return post;
}

export default async function Single({ params }: Props) {
  const post = await fetchPost(params.slug);

  if (!post) { 
    return <div>Post non trouvé</div>;
  }

  return (
    <div>
      <HeaderHat 
       bgColor='bg-[#F5F9FA]'
       textColor='text-black'
        buttonVariant='buttonNoir'
       />
      <Header
      textColor='text-black' 
      logosrc='/Logo/logo-jaune-noir.svg'
      />
      
      <div>
      <h1>{post.title.rendered}</h1>
      
      <div  className='font-bold' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <p className='font-manrope'>{post.authorName}  {new Date(post.date).toLocaleDateString()}</p>

    <Image 
    src='/HomePage/article.svg'
    alt=''
    width={500} 
    height={500} />
      <Footer />
    </div>
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