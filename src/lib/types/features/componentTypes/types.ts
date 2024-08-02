 
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