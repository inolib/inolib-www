import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-[#FCFBF9] py-20" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span
            className="text-black-500 inline-block rounded-full bg-[#CBE0E4] px-3 py-1 text-sm"
            aria-label="categorie de services"
          >
            Services
          </span>
          <h2 id="services-heading" className="mb-4 mt-4 text-3xl font-bold md:text-4xl">
            Découvrez nos services proposés autour d'accessibilité numérique
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
            Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="space-y-12 xxs:flex-col">
          <div className="flex flex-col items-center py-6 xxs:py-2 xs:py-3 md:flex-row">
            <div>
              <div className="mx-10 max-w-128">
                <Image src="/Icons/fichier.svg" alt="" width={40} height={40}></Image>

                <h3 className="mb-2 mt-2 pt-2 text-2xl font-semibold">Audits d'accessibilité numérique</h3>
                <p className="mb-4 text-gray-600">
                  Bénéficiez d'audits d'accessibilité réalisés par nos experts, mettant en évidence les points forts et
                  les zones d'amélioration de votre site ou application. Nous proposons des audits de qualité pour vous
                  assurer de respecter les normes d'accessibilité.
                </p>
                <ul className="mb-4 list-disc pl-5">
                  <li className="Items-start flex py-1">
                    <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                    Corriger les erreurs en incluant tous les utilisateurs
                  </li>
                  <li className="Items-start flex py-1">
                    <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                    Améliorer l'expérience utilisateur pour tous
                  </li>
                  <li className="Items-start flex py-1">
                    <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                    Respecter les obligations en matière d'accessibilité numérique
                  </li>
                </ul>
                <a
                  href="/Audit"
                  className="mt-2 inline-flex rounded-lg border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
                >
                  En savoir plus
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mb-6 ml-24 flex-shrink-0 md:mb-0 md:mr-6">
              <Image src="/Homepage/image1.svg" alt="" width={550} height={550} />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-6 lg:mr-60">
              <Image src="/Homepage/sommet.svg" alt="" width={400} height={400} />
            </div>
            <div className="mr-8 max-w-128 flex-col">
              <Image src="/Icons/flag.svg" alt="" width={40} height={40}></Image>
              <h3 className="mb-2 mt-2 pt-2 text-2xl font-semibold">Accompagnement dans vos projets</h3>
              <p className="mb-4 text-gray-600 md:min-w-128">
                Nos experts vous assistent techniquement et vous accompagnent dans vos projets, avec des services
                sur-mesure.
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Rendez-vous et séances d'accompagnement via le chat
                </li>
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Envoi de briefings et rapports
                </li>
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Conseils sur les bonnes pratiques et les normes
                </li>
              </ul>
              <a
                href="/Accoumpagner"
                className="mt-2 inline-flex rounded-xl border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
              >
                En savoir plus
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center py-6 md:flex-row">
            <div className="max-w-128 flex-col px-10">
              <Image src="/Icons/mobile.svg" alt="" width={40} height={40}></Image>
              <h3 className="mb-2 mt-2 pt-2 text-2xl font-semibold">Développement web et mobile</h3>
              <p className="mb-4 text-gray-600">
                Optez pour des sites web et applications conformes aux normes d'accessibilité grâce à notre équipe de
                développeurs qualifiés.
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Projets sur-mesure, de la conception à la mise en ligne
                </li>
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Tests, audits, et améliorations en continue
                </li>
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Intégration avec plus de 100 services et outils
                </li>
              </ul>
              <a
                href="/Developpement"
                className="mt-2 inline-flex rounded-xl border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
              >
                En savoir plus
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mb-6 flex-shrink-0 px-36 md:mb-0 md:mr-6">
              <Image src="/Homepage/macon.svg" alt="" width={400} height={400} />
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-6 lg:mr-60">
              <Image src="/Homepage/seated 2.svg" alt="" width={400} height={400} />
            </div>
            <div className="mr-12 max-w-128 flex-col">
              <Image src="/Icons/hat.svg" alt="" width={40} height={40}></Image>
              <h3 className="mb-2 mt-2 pt-2 text-2xl font-semibold">Formation en accessibilité numérique</h3>
              <p className="mb-4 text-gray-600">
                Participez à des formations spécialisées sur les normes et techniques d'accessibilité numérique, animées
                par nos experts.
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Sessions de formation en direct et à distance
                </li>
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Accès à des ressources exclusives
                </li>
                <li className="Items-start flex py-1">
                  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                  Support continu et sessions de questions-réponses
                </li>
              </ul>
              <a
                href="/Former"
                className="mt-2 inline-flex rounded-xl border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
              >
                En savoir plus
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
