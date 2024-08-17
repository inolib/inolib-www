'use client';
import { Results } from '~/lib/types/features/searchs/types';
import { staticPagesData } from '~/DATA/staticDataPages';

export async function searchContent(query: string): Promise<Results> {
  const apiBaseUrl = 'http://localhost/WORDPRESS/wp-json/wp/v2';

  // Recherche d'articles
  const articlesRes = await fetch(`${apiBaseUrl}/posts?search=${query}&_embed`);
  const articles = await articlesRes.json();

  

  // Pages statiques
  

  const staticPages = staticPagesData
  .filter(page => 
    page.title.toLowerCase().includes(query.toLowerCase()) || 
    page.content.toLowerCase().includes(query.toLowerCase())
  );
  return {
    articles: articles.map((article: any) => ({
      id: article.id,
      title: article.title.rendered,
      
      slug: article.slug,
      img: article._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      categoryNames: article._embedded?.['wp:term']?.[0]?.map((term: any) => term.name) || [],
      authorName: article._embedded?.author?.[0]?.name || 'Unknown',
      date: article.date,
      content: article.content.rendered,
    })),
   
    staticPages: staticPages.map((page) => ({
      title: page.title,
      url: page.url,
      content: page.content,
    })),
  };
}



/*export async function searchContent(query: string): Promise<Results> {
  const apiBaseUrl = 'http://localhost/WORDPRESS/wp-json/wp/v2';

  // Recherche d'articles
  const articlesRes = await fetch(`${apiBaseUrl}/posts?search=${query}`);
  const articles = await articlesRes.json();

  // Recherche de pages
  const pagesRes = await fetch(`${apiBaseUrl}/pages?search=${query}`);
  const pages = await pagesRes.json();

  // Pages statiques
  const staticPagesData = [
    'Audit',
    'Accompagnement',
    'Développement',
    'Formations',
    'À propos',
    'Contact',
  ];

  const staticPages = staticPagesData 
    .map(title => ({ title, url: `/pages/${title.toLowerCase().replace(/ /g, '')}` }))
    .filter(page => page.title.toLowerCase().includes(query.toLowerCase()));

  return { articles, pages, staticPages };
}**/