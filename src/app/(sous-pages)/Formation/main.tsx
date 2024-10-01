import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";
import { RxArrowRight } from 'react-icons/rx';

const MainTest = () => {
  return (
    <main className="mx-4 mt-8 px-2 py-8 lg:px-4 xl:px-10">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-6 flex items-center space-x-2 text-sm w-4/12">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src="/Icons/BreadcrumIcon.svg" alt="Home" width={20} height={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/former">Former</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/formation">Formations</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mx-auto mt-16">
        <header className="mb-6 text-center md:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 text-left">Nos formations</h1>
        </header>

        {/* Main content */}
        <div className="flex flex-col space-y-8 lg:space-y-12">
          <article className="text-gray-700">
            <p className="text-gray-600 text-lg lg:text-xl lg:w-1/2">
              INOLIB vous accompagne dans la création d'expériences numériques accessibles et conviviales pour tous, conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation, interactives et pratiques, sont conçues pour répondre aux besoins de tout public, tels que les managers, chefs de projet, développeurs, designers et webmasters.
            </p>
          </article>

          {/* Link below the article */}
          <Link
            href="/Programme"
            className="inline-flex lg:w-48 sm:w-auto items-center justify-between max-w-xs lg:max-w-sm rounded-lg bg-[#254147] px-4 py-2 text-white shadow hover:bg-primary/90 text-sm lg:text-base"
          >
            Voir le programme
            <RxArrowRight className="h-6 w-6" />
          </Link>
        </div>

        {/* Border divider */}
        <div className="mt-16 border-t-2 w-full"></div>

        {/* Section grid */}
        <section className="grid gap-16 md:grid-cols-2 mt-16">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/Homepage/seated 2.svg"
              alt="Seated Illustration"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 id="main-test-heading" className="mb-6 text-3xl lg:text-4xl font-bold">
              Le processus d'audit Inolib en 4 étapes clés :
            </h2>
            <p className="mb-6 text-gray-600 text-lg lg:text-xl">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>

            {/* Steps list */}
            <ol className="space-y-8 text-gray-600">
              <li className="flex items-start space-x-4 rounded-xl bg-[#F5F9FA] p-6">
                <Image src="/Icons/Aicon.svg" alt="Co-construction" width={40} height={40} />
                <div>
                  <h3 className="font-semibold text-lg">1. Co-construction</h3>
                  <p className="text-base">Sélection d'un échantillon représentatif en collaboration avec vous.</p>
                </div>
              </li>

              <li className="flex items-start space-x-4 rounded-xl bg-[#F5F9FA] p-6">
                <Image src="/Icons/loupe.svg" alt="Investigation" width={40} height={40} />
                <div>
                  <h3 className="font-semibold text-lg">2. Investigation</h3>
                  <p className="text-base">Audit de conformité réalisé par nos experts, grâce à une grille de test spécifique.</p>
                </div>
              </li>

              <li className="flex items-start space-x-4 rounded-xl bg-[#F5F9FA] p-6">
                <Image src="/Icons/eg.svg" alt="Synthèse" width={40} height={40} />
                <div>
                  <h3 className="font-semibold text-lg">3. Synthèse</h3>
                  <p className="text-base">Rédaction d'un rapport d'audit détaillé, incluant nos recommandations d'accessibilité.</p>
                </div>
              </li>

              <li className="flex items-start space-x-4 rounded-xl bg-[#F5F9FA] p-6">
                <Image src="/Icons/chat.svg" alt="Échange" width={40} height={40} />
                <div>
                  <h3 className="font-semibold text-lg">4. Échange</h3>
                  <p className="text-base">Restitution des résultats pour vous offrir une vue d'ensemble et répondre à vos questions.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainTest;
