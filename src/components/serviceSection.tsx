import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

const services: Service[] = [
  {
    title: 'Accompagnement',
    description: 'Intégration de nos conseils dans votre stratégie de développement et la mise en œuvre des corrections.',
    icon: '/icons/coeur.svg',
    alt: 'Icone d\'accompagnement'
  },
  {
    title: 'Coordination',
    description: 'Création et suivi des tickets d\'anomalies dans votre outil de gestion de projets (Redmine, Jira, Trello, Asana, etc.) pour une conformité optimale.',
    icon: '/icons/fleche.svg',
    alt: 'Icone de coordination'
  },
  {
    title: 'Coaching',
    description: 'Profitez pour chaque réalisation d\'audit de trois heures de coaching en accessibilité numérique pour sensibiliser et booster vos équipes.',
    icon: '/icons/fichier.svg',
    alt: 'Icone de coaching'
  }
];

export default function ServiceSection () {
  return (
    <section className="py-16 px-4 bg-[#FAFAFA]" aria-labelledby="services-heading">
      <div className="max-w-5xl mx-auto text-center">
        <h2 id="services-heading" className="text-3xl font-bold mb-4">Services complémentaires pour propulser votre projet :</h2>
        <p className="text-gray-600 mb-12">Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                <Image src={service.icon} alt={service.alt} width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


