export type Category = {
  id: number;
  name: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type JobOffer = {
  title: string;
  location: string;
  type: string;
  salaryRange: string;
};

export type MenuItemProps = {
  href: string;
  label: string;
  subItems?: { href: string; label: string }[];
};

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
  categoryNames: string[];

  date: string;
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

export type Props = {
  params: {
    slug: string;
  };
};

export type PropsPost = {
  id: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  img: string;
  authorName: string;
  date: string;
  categoryNames: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

export type TeamMember = {
  name: string;
  position: string;
  description: string;
  image: string;
  alt: string;
};

export type ValueItem = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};
