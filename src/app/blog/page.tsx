import Header from '~/components/Header';
import HeaderHat from '~/components/HeaderHat';
import BlogList from '~/components/blogLists';
import Footer from '~/components/Footer';

type Post = { 
  id: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  img: string;
};

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost/WORDPRESS/wp-json/wp/v2/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  return posts;
}

export default async function Blog(){

  const posts = await fetchPosts();

  return( 
<div className='overflow-hidden'>
    <HeaderHat 
    bgColor="bg-[#F5F9FA]"
    textColor="text-black"
    buttonVariant="buttonNoir"/>
       <Header 
   textColor="text-black"
   logosrc="/Logo/logo-jaune-noir.svg"/>
   <BlogList posts={posts} />;
   <Footer />
   </div>
  )
}
