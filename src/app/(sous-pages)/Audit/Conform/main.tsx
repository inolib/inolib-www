import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";

const Conf = () => {
  return (
    <main className="mx-auto mt-28 px-4 py-8 lg:px-0">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-10 ml-11 flex w-full items-center lg:w-5/12">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src="/Icons/BreadcrumIcon.svg" alt="Home" width={20} height={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Audit">Audit d'accessibilité numérique</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Audit/Conform">Audit de conformité</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mx-auto">
        <header className="mb-8">
          <h1 className="ml-11 text-3xl font-bold text-gray-900">Audit de conformité</h1>
        </header>

        {/* Main content */}
        <section className="mb-16 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:ml-11">
            <div className="mb-4 flex flex-col">
              <div>
                <Image src="/Icons/eclaire.svg" alt="" width={40} height={40} className="mr-2" />
              </div>
              <h2 className="mt-2 text-2xl font-bold">Qu'est-ce qu'un audit d'accessibilité numérique ?</h2>
            </div>
            <p className="mb-4 text-gray-600">
              L’audit d'accessibilité numérique permet d'évaluer l'accessibilité de vos sites web, applications ou
              logiciels, en identifiant les obstacles rencontrés par les utilisateurs. Nos experts analysent vos
              supports en s'appuyant sur les référentiels RGAA, WCAG, et la norme EN 301 549. Tous nos audits sont
              réalisés par des consultants expérimentés, et nos services sont disponibles en français et en anglais.
            </p>
            <ul className="mb-6 list-none space-y-2 text-gray-600">
              <li className="flex items-start">
                <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                Audit de Certification
              </li>
              <li className="flex items-start">
                <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                Améliorer l'expérience utilisateur pour tous
              </li>
              <li className="flex items-start">
                <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                Respecter les obligations en matière d'accessibilité numérique
              </li>
            </ul>
            <Link
              href="/pages/contact"
              className="hover:bg-primary/90 flex w-44 items-center justify-between rounded-lg bg-[#254147] px-4 py-2.5 text-white"
            >
              Nous contacter
              <RxArrowRight className="h-6 w-6" />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Image src="/Homepage/image.svg" alt="" width={700} height={600} className="w-full rounded-lg" />
          </div>
        </section>

        <h2 id="main-test-heading" className="mx-auto mb-16 text-center text-3xl font-bold">
          Nos trois offres d'audit
        </h2>

        {/* Première offre */}
        <div className="md: mb-8 flex flex-row items-center xxs:flex-col xs:flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:ml-24 xl:ml-36">
            <Image src="/Homepage/meufBD.svg" alt="" width={300} height={350} className="mx-auto" />
          </div>
          <div className="flex flex-col lg:ml-32 lg:mr-2 lg:w-128 xl:ml-48 xl:w-160">
            <h3 className="mb-4 text-2xl font-semibold">Audit de Certification</h3>
            <p className="mb-4 text-gray-600">
              Un diagnostic pour identifier les faiblesses d'accessibilité de votre interface.
            </p>
            <ol className="list-none space-y-6 text-gray-600">
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/Aicon.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">1. Objectif</h4>
                  <p>Évaluer le niveau d’accessibilité de votre site web ou application mobile.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/loupe.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">2. Livrables</h4>
                  <p>
                    Grille d’analyse comprenant les conformités et non-conformités relevées en fonction du référentiel
                    utilisé.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/eg.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">3. Avantage</h4>
                  <p>
                    Comprenez rapidement votre niveau d'accessibilité. Idéal pour les sites en attente de refonte ou
                    avant un audit approfondi.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/chat.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">
                    Call to action :
                    <Link href="/Contact" className="text-lime-700">
                      {" "}
                      Demandez un devis.{" "}
                    </Link>
                  </h4>
                  <p>Restitution des résultats pour vous offrir une vue d'ensemble et répondre à vos questions.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Deuxième offre */}
        <div className="mb-8 flex flex-col items-center lg:flex-row">
          <div className="lg:order-2 lg:w-1/2 lg:pl-16">
            <Image src="/Homepage/med.svg" alt="" width={350} height={350} className="mx-auto" />
          </div>
          <div className="flex flex-col lg:order-1 lg:ml-6 lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold">Audit de Conformité Détaillé</h3>
            <p className="mb-4 text-gray-600">
              Une analyse détaillée couvrant un échantillon représentatif de vos pages ou fonctionnalités.
            </p>
            <ol className="list-none space-y-6 text-gray-600">
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/Aicon.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">1. Objectif</h4>
                  <p>Donner une vision claire de non-conformité et apporter des recommandations sur mesures.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/loupe.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">2. Livrables</h4>
                  <p>
                    Un rapport incluant des recommandations fonctionnelles, techniques, graphiques et éditoriales. Les
                    recommandations sont priorisées en fonction de leur impact sur l'utilisateur.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/eg.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">3. Avantage</h4>
                  <p>
                    Facilitez la résolution des problèmes d'accessibilité avec des recommandations claires, incluant une
                    synthèse pour les non-techniciens.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/chat.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">
                    Call to action :
                    <Link href="/Contact" className="text-lime-700">
                      {" "}
                      Demandez un devis.{" "}
                    </Link>
                  </h4>
                  <p>Restitution des résultats pour vous offrir une vue d'ensemble et répondre à vos questions.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Troisième offre */}

        <div className="mb-8 mt-8 flex flex-col items-center lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:ml-16">
            <Image src="/Homepage/computer.svg" alt="" width={350} height={250} className="mx-auto" />
          </div>
          <div className="flex flex-col lg:ml-32 lg:mr-2 lg:w-128 xl:ml-60 xl:w-160">
            <h3 className="mb-4 text-2xl font-semibold">Audit de Contrôle</h3>
            <p className="mb-4 text-gray-600">
              À la suite d’un premier audit et des corrections des non-conformités, cet audit de contrôle permet de
              valider les corrections et de mettre à jour le taux de conformité ainsi que la déclaration
              d'accessibilité.
            </p>
            <ol className="list-none space-y-6 text-gray-600">
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/Aicon.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">1. Livrable</h4>
                  <p>Sélection d'un échantillon représentatif en collaboration avec vous.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/loupe.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">2. Investigation</h4>
                  <p>Audit de conformité réalisé par nos experts, grâce à une grille de test spécifique.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/eg.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">3. Synthèse</h4>
                  <p>Rédaction d'un rapport d'audit détaillé, incluant nos recommandations d'accessibilité.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/chat.svg" alt="" width={30} height={30} />
                <div>
                  <h4 className="font-semibold">4. Échange</h4>
                  <p>Restitution des résultats pour vous offrir une vue d'ensemble et répondre à vos questions.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Méthodologie */}
        <section className="ml-2 mt-8">
          <div className="mb-4 flex items-center">
            <Image src="/Icons/eclaire.svg" alt="" width={40} height={40} className="mr-2" />
            <h2 className="text-2xl font-bold">Notre Méthodologie</h2>
          </div>

          <ul className="list-none space-y-4 text-gray-600">
            <li className="flex items-start">
              <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
              Co-construction : Sélection d’un échantillon représentatif avec vous.
            </li>
            <li className="flex items-start">
              <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
              Investigation : Analyse de l’échantillon au regard du référentiel choisi.
            </li>
            <li className="flex items-start">
              <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
              Synthèse : Rédaction d’un rapport détaillé avec recommandations.
            </li>
            <li className="flex items-start">
              <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
              Échange : Restitution des résultats en visioconférence, avec explication des non-conformités, des
              solutions et des priorités d’action.
            </li>
            <li className="flex items-start">
              <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
              Livrables : Grille technique, rapport détaillé, déclaration d’accessibilité.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Conf;
