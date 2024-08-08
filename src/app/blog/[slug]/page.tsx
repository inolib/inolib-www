import Header from '~/components/Header';
import HeaderHat from '~/components/HeaderHat';
import Footer from '~/components/Footer';
import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";
import CommentForm from '~/components/Comment';
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
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-10 flex items-center w-5/12 ml-11">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src='/Icons/BreadcrumIcon.svg' alt='Home' width={20} height={20} />
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
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='py-14 px-10'>
      <h1>{post.title.rendered}</h1>
      
      <article  className='font-bold' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      
      <p className='font-manrope'>{post.authorName}  {new Date(post.date).toLocaleDateString()}</p>
      </div>
<div>
    <Image 
    src='/HomePage/article.svg'
    alt=''
    width={500} 
    height={500} />
    
    </div>
    </div>
   { /*<CommentForm/>**/}
    <Footer/>
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