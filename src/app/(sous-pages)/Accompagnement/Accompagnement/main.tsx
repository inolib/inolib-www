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

const Project = () => {
  return (
    <main className="container mx-auto mt-28 px-4 py-8 lg:px-0">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-10 ml-11 flex w-5/12 items-center">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src="/Icons/BreadcrumIcon.svg" alt="Home" width={20} height={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Accompagner">Accompagner</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Accompagnement"> {`Accompagnement des projets`.slice(0,15)}... </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mx-auto">
        <header className="mb-8">
          <h1 className="ml-11 text-4xl font-bold text-gray-900 text-start">Accompagnement projet</h1>
        </header>

        {/* Main content */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="ml-11 flex flex-col justify-center">
            <div className="mb-4 flex items-center">

              <p className="mb-4 text-gray-600">
            Inolib vous accompagne dans vos projets numériques, en intégrant l'accessibilité à chaque étape. Notre expertise en gestion de projet et en accessibilité numérique garantit des solutions inclusives et performantes, adaptées aux besoins de vos équipes de projets, design, développement et éditoriales.
            </p>
            </div>
            <div className="flex w-[500px] items-center space-x-2 border-b-2 border-gray-200 m-4"/>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/Homepage/image.svg" alt="" width={700} height={600} className="w-full rounded-lg" />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 mt-12 mb-12">
          <div className="flex justify-center">
            <Image src="/Homepage/meufBD.svg" alt="" width={300} height={300} />
          </div>
          <div>
            <h2 id="main-test-heading" className="mb-12 text-3xl font-bold text-center">
            Accompagnement Stratégique
            </h2>

            <ol className="list-none space-y-6 text-gray-600">
            <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/eg.svg" alt="" width={30} height={30} />
                <div>
                  <p>Inolib propose des ateliers collaboratifs pour définir vos objectifs fonctionnels et techniques, tout en intégrant les normes d'accessibilité. Nous vous fournissons des outils d’aide à la décision afin de prioriser les grandes orientations de votre transformation numérique.</p>
                </div>
              </li>
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/Aicon.svg" alt="" width={30} height={30} />
                <div>
                  <p>Nous réalisons également un audit des logiciels utilisés et recommandons des solutions adaptées à vos futurs projets. Grâce à une cartographie des parties prenantes, nous identifions les responsables clés au sein de votre organisation pour assurer une gestion claire et une gouvernance efficace.
                  </p>
                </div>
              </li>
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/loupe.svg" alt="" width={30} height={30} />
                <div>
                  <p>Inolib aide à prioriser vos initiatives en fonction de l'effort et de la valeur générée. Nous garantissons une approche équilibrée avec une analyse tripartite (business, technique, accessibilité). En outre, nous élaborons un tableau d’impact des risques pour visualiser leurs répercussions sur l’expérience utilisateur, notamment pour les personnes en situation de handicap.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

         <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 id="main-test-heading" className="mb-12 text-3xl font-bold text-center">
            Accompagnement Opérationnel
            </h2>

            <ol className="list-none space-y-6 text-gray-600">
            <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/eg.svg" alt="" width={30} height={30} />
                <div>
                  <p>Au niveau opérationnel, nous organisons des ateliers pour identifier les besoins spécifiques en design, développement et contenu. Nous définissons un backlog produit évolutif, en priorisant les fonctionnalités selon les exigences d’accessibilité et de performance.
                  </p>
                </div>
              </li>
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/Aicon.svg" alt="" width={30} height={30} />
                <div>
                  <p>La roadmap produit est construite de manière flexible, ajustée à chaque sprint pour répondre aux retours des parties prenantes. Nous adoptons une gestion agile des ressources en adaptant les équipes selon les priorités du projet.
                  </p>
                </div>
              </li>
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/loupe.svg" alt="" width={30} height={30} />
                <div>
                  <p>Le suivi est effectué par sprints, avec des ajustements réguliers basés sur les retours utilisateurs. À la fin du projet, nous organisons une rétrospective pour évaluer les performances et optimiser les pratiques futures. Le transfert progressif vers l’équipe de maintenance se fait avec une documentation complète et une transition fluide.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex justify-center">
            <Image src="/Homepage/meufBD.svg" alt="" width={300} height={300} />
          </div>
        </section>

        <section className="m-10 gap-8 text-center mt-24">
          <div className="flex flex-col justify-center text-center">
            <h2 id="main-test-heading" className="m-10 text-3xl font-bold">
            Sélection des Prestataires
            </h2>
            <div className="flex h-auto flex-col items-center justify-around rounded-lg bg-[#F5F9FA] p-6 shadow-md sm:h-72 sm:flex-row">
            <p className="mb-4 text-gray-600">
            Inolib vous assiste dans la gestion des appels d'offres et la sélection des prestataires techniques, en s'assurant qu'ils respectent les exigences du projet, notamment en matière d'accessibilité. Une grille d'évaluation est mise en place pour choisir les prestataires selon des critères de qualité, coût et délais.
            </p>
            </div>

          </div>
        </section>

        <section className="m-10 gap-8 text-center mt-24">
          <div className="flex flex-col justify-center text-center">
            <h2 id="main-test-heading" className="m-10 text-3xl font-bold">
            Assurance Qualité et Conformité
            </h2>
            <div className="flex h-auto flex-col items-center justify-around rounded-lg bg-[#F5F9FA] p-6 shadow-md sm:h-72">
            <p className="mb-4 text-gray-600">
            Tout au long du projet, nous réalisons des points de contrôle pour évaluer la conformité aux normes d'accessibilité RGAA et WCAG. Des tests exhaustifs sont effectués pour valider la qualité des livrables.
            </p>
            <p className="mb-4 text-gray-600">
            Enfin, nous adoptons une gestion proactive des risques en anticipant les obstacles et en proposant des plans de contingence pour limiter leur impact sur le projet.
            </p>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
};

export default Project;
