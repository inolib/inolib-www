export type OneComment = {
  id: number;
  author_name: string;
  content: {
    rendered: string;
  };
};

export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  img: string;
  slug: string;
  authorName: string;
  categoryNames:string[];
 
  date: string;
};

export type Props = {
  params: {
    slug: string;
  };
};

export type PostComment = {
  id: number;
  post: number;
  author_name: string;
  author_email: string;
  content: {
    rendered: string;
  };
};
 // typeage pour les données de composant Faqs
 export type Faq={
  question:string;
  answer:string
}
// typeage pour les données de composant faq
export interface Service {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

// typage pour les données de composant team
export interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  alt: string;
}

// type des liens 

export interface MenuItemProps {
  href: string;
  label: string;
  subItems?: { href: string; label: string }[];}


 export  type JobOffer = {
    title: string;
    location: string;
    type: string;
    salaryRange: string;
  };
  export interface ValueItem {
    title: string;
    description: string;
    icon: string;
    alt: string;
  };
  // TypeScript types
export type PropsPost = { 
  id: string;
  title:  string ;
  content:string ;
  slug: string;
  img: string;
  authorName: string;
  date: string;
  categoryNames: string[];
};

export type Category = { 
  id: number;
  name: string;
};

