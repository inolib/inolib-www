import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";

const MainTest = () => {
  return (
    <main className="container mx-auto mt-28 px-4 py-8 lg:px-0">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-10 ml-11 flex items-center xxs:ml-0 xxs:mr-0 xxs:w-80 sm:w-128 lg:ml-10 lg:w-80">
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

      <div className="xxs:mx-1 xxs:w-80 xxs:items-start md:w-auto lg:mx-auto lg:w-auto">
        <header className="xxs: mb-8 xxs:ml-0">
          <h1 className="ml-11 text-3xl font-bold text-gray-900">Nos formations</h1>
        </header>

        {/* Main content */}
        <article className="mb-16 grid gap-8 md:grid-cols-2">
          <p className="px-10 text-gray-600 sm:w-128 md:w-160">
            INOLIB vous accompagne dans la creation d'expériences numérique accessibleset conviviales pour
            tous,conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation,interactives et
            pratique , sont conçues pour repondre aux besoins de tout public, tels que les managers, chefs de
            projet,developpeurs, designers et webmasters.
          </p>
        </article>
        <div className="ml-10 border-t-2 xxs:w-60 sm:w-128 md:w-[600px] lg:w-[1160px]"></div>
        <section className="grid gap-8 md:grid-cols-2">
          <div className="mt-32 flex justify-center">
            <Image src="/Homepage/seated 2.svg" alt="" width={500} height={500} />
          </div>
          <div>
            <h2 id="main-test-heading" className="mb-4 mt-16 py-2 text-3xl font-bold">
              Le processus d'audit Inolib en 4 étapes clés :
            </h2>
            <p className="mb-4 text-gray-600">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
            <ol className="list-none space-y-6 text-gray-600">
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/Aicon.svg" alt="" width={30} height={30} />
                <div>
                  <h3 className="font-semibold">1. Co-construction</h3>
                  <p>Sélection d'un échantillon représentatif en collaboration avec vous.</p>
                </div>
              </li>
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/loupe.svg" alt="" width={30} height={30} />
                <div>
                  <h3 className="font-semibold">2. Investigation</h3>
                  <p>Audit de conformité réalisé par nos experts, grâce à une grille de test spécifique.</p>
                </div>
              </li>
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/eg.svg" alt="" width={30} height={30} />
                <div>
                  <h3 className="font-semibold">3. Synthèse</h3>
                  <p>Rédaction d'un rapport d'audit détaillé, incluant nos recommandations d'accessibilité.</p>
                </div>
              </li>
              <li className="mr-8 flex items-start space-x-3 rounded-xl bg-[#F5F9FA] p-4">
                <Image src="/Icons/chat.svg" alt="" width={30} height={30} />
                <div>
                  <h3 className="font-semibold">4. Échange</h3>
                  <p>Restitution des résultats pour vous offrir une vue d'ensemble et répondre à vos questions.</p>
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
