//import { GetStaticProps } from 'next';
import Image from 'next/image';

interface NewsItem {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  alt: string;
}

interface NewsProps {
  newsItems: NewsItem[];
}

const News = ({ newsItems }: NewsProps) => {
  return (
    <section className="bg-neutral-300 py-16 px-4" aria-labelledby="news-heading">
      <div className="container mx-auto">
        <div className='space-x-96'>
        <div className="flex flex-col mb-8">
        <span className="inline-block bg-[#90badf] text-sm text-black-500 px-3 py-1 w-24 rounded-full" aria-label="derniers acualités ">Actualités</span>
          <h2 id="news-heading" className="text-3xl font-bold">Nos dernières actualités</h2>
          <p className="text-gray-600 mb-12">
          Outils et stratégies dont les équipes modernes ont besoin pour aider leurs entreprises à se développer.
        </p>
        </div>
        <div>
        <a href="/blog" className="text-white bg-[#254147]  rounded-lg  py-4 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 pt-2.5 pr-4 pb-2.5 pl-4" aria-label="Voir tous les posts du blog">
            Voir tous les posts
          </a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={item.image}
                alt={item.alt}
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="mt-4">
                <p className="text-sm text-blue-600">{item.category}</p>
                <h3 className="text-lg font-bold mt-2">
                  {item.title} <span aria-hidden="true">→</span>
                </h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <div className="flex items-center mt-4">
                  <Image
                    src="/path_to_images/author-placeholder.jpg"
                    alt={`Photo de ${item.author}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/*export const getStaticProps: GetStaticProps = async () => {
  // Remplacez cette URL par l'endpoint réel de votre API
  const res = await fetch('https://your-api-endpoint.com/api/blog');
  const allNewsItems: NewsItem[] = await res.json();

  // Prendre les trois derniers articles
  const newsItems = allNewsItems.slice(0, 3);

  return {
    props: {
      newsItems,
    },
  };
};*/

export default News;
