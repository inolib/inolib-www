import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Services() {
  return (
    <section className="bg-gray-100 py-20" aria-labelledby="services-heading">
       <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#90badf] text-sm text-black-500 px-3 py-1 rounded-full" aria-label="categorie de services">Services</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Découvrez nos services proposés autour de /accessibilité numérique
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
              <Image 
              src="/HomePage/computer 1.svg" 
              alt="Audits d'accessibilité numérique" 
              width={200} 
              height={200} 
               />
                <Image 
              src="/HomePage/med.svg" 
              alt="Audits d'accessibilité numérique" 
              width={200} 
              height={200} 
               />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Audits d'accessibilité numérique</h3>
              <p className="text-gray-600 mb-4">
                Bénéficiez d'audits d'accessibilité réalisés par nos experts, mettant en évidence les points forts et les zones d'amélioration de votre site ou application. Nous proposons des audits de qualité pour vous assurer de respecter les normes d'accessibilité.
              </p>
              < ul className="list-disc pl-5 mb-4">
                <li>Corriger les erreurs en incluant tous les utilisateurs</li>
                <li>Améliorer l'expérience utilisateur pour tous</li>
                <li>Respecter les obligations en matière d'accessibilité numérique</li>
                </ul>
                <a href="#" className="inline-flex bg-transparent text-black border-2 border-black border-solid py-2 px-4 rounded-xl  hover:bg-blue-700 transition">
                En savoir plus
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
              <Image src="/HomePage/sommet.svg" 
              alt="Accompagnement dans vos projets"
               width={200}
              height={200}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Accompagnement dans vos projets</h3>
              <p className="text-gray-600 mb-4">
                Nos experts vous assistent techniquement et vous accompagnent dans vos projets, avec des services sur-mesure.
              </p>
              < ul className="list-disc pl-5 mb-4">
                <li>Rendez-vous et séances d'accompagnement via le chat</li>
                <li>Envoi de briefings et rapports</li>
                <li>Conseils sur les bonnes pratiques et les normes</li>
                </ul>
                <a href="#" className="inline-flex bg-transparent text-black border-2 border-black border-solid py-2 px-4 rounded-xl  hover:bg-blue-700 transition">
                En savoir plus
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
              <Image src="/Homepage/maçon.svg" 
              alt="Développement web et mobile"
               width={200} 
               height={200} 
               />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Développement web et mobile</h3>
              <p className="text-gray-600 mb-4">
                Optez pour des sites web et applications conformes aux normes d'accessibilité grâce à notre équipe de développeurs qualifiés.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Projets sur-mesure, de la conception à la mise en ligne</li>
                <li>Tests, audits, et améliorations en continue</li>
                <li>Intégration avec plus de 100 services et outils</li>
             </ul>
              <a href="#" className="inline-flex bg-transparent text-black border-2 border-black border-solid py-2 px-4 rounded-xl  hover:bg-blue-700 transition">
                En savoir plus
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
              <Image src="/Homepage/seated 2.svg" 
              alt="Formation en accessibilité numérique" 
              width={200} 
              height={200}/>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Formation en accessibilité numérique</h3>
              <p className="text-gray-600 mb-4">
                Participez à des formations spécialisées sur les normes et techniques d'accessibilité numérique, animées par nos experts.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Sessions de formation en direct et à distance</li>
                <li>Accès à des ressources exclusives</li>
                <li>Support continu et sessions de questions-réponses</li>
              </ul>
              <a href="#" className="inline-flex bg-transparent text-black border-2 border-black border-solid py-2 px-4 rounded-xl  hover:bg-blue-700 transition">
                En savoir plus
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
