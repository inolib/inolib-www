import Image from "next/image";

import { CallToActionButtonLink } from "~/components/button-links";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";

const MainForm = () => {
  return (
    <main className="container mx-auto mt-0 lg:px-0">
      {/* Breadcrumb */}
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <Breadcrumb>
            <BreadcrumbList className="mb-6 ml-24 mt-0 flex items-center space-x-2">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Image alt="Accueil" height={20} src="/Icons/BreadcrumIcon.svg" width={20} />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-gray-600" href="/Developpement">
                  Développement
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="lg:ml-24">
            <h1 className="text-4xl font-bold text-gray-900">Développement</h1>
          </div>
        </div>

        <div className="mr-10 mt-10">
          <Image alt="" className="object-cover" height={550} src="/Homepage/newDev.svg" width={550} />
        </div>
      </div>

      <div className="ml-14 mt-6 px-4 pb-4 lg:mt-12 lg:flex lg:space-x-16 lg:px-10">
        <div className="flex flex-col lg:w-1/2">
          <p className="mb-6 text-gray-600">
            INOLIB vous accompagne dans la création d'expériences numériques accessibles et conviviales pour tous,
            conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation, interactives et
            pratiques, sont conçues pour répondre aux besoins de tout public, tels que les managers, chefs de projet,
            développeurs, designers et webmasters.
          </p>

          <ul className="mb-6 ml-2 list-none space-y-3 text-gray-600">
            <li className="flex items-start">
              <Image alt="" className="mr-2" height={20} src="/Icons/CheckIcon.svg" width={20} />
              Élargir votre audience en incluant tous les utilisateurs
            </li>
            <li className="flex items-start">
              <Image alt="" className="mr-2" height={20} src="/Icons/CheckIcon.svg" width={20} />
              Améliorer l'expérience utilisateur pour tous
            </li>
            <li className="flex items-start">
              <Image alt="" className="mr-2" height={20} src="/Icons/CheckIcon.svg" width={20} />
              Respecter les obligations en matière d'accessibilité numérique
            </li>
          </ul>

          <CallToActionButtonLink
            className="bg-primary text-secondary ring-primary ring-offset-secondary"
            href="/Contact"
          >
            Nous contacter
          </CallToActionButtonLink>
        </div>

        <aside className="mb-14 mt-10 space-y-6 lg:mt-0 lg:w-1/2">
          <div className="flex flex-row space-x-4 rounded-2xl bg-[#F5F9FA] p-6 shadow">
            <div className=" ">
              <Image alt="" height={80} src="Icons/appli.svg" width={80}></Image>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Site web</h2>

              <p className="mb-4 text-gray-700">
                Give your team the autonomy they need with access to as many cards as they need. Authorise purchases
                with a click. Simple.
              </p>

              {/* <Link
                className="inline-flex items-center rounded-full border border-black px-4 py-2 font-semibold text-gray-800 transition hover:bg-gray-200"
                href="#"
              >
                En savoir plus
                <svg
                  className="ml-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Link> */}
            </div>
          </div>

          <div className="flex flex-row space-x-4 rounded-2xl bg-[#F5F9FA] p-6 shadow">
            <div className=" ">
              <Image alt="" height={80} src="Icons/siteWeb.svg" width={80}></Image>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Application mobile</h2>

              <p className="mb-4 text-gray-700">
                Every card comes with configurable spending limits, purchase restrictions, and cancellations for each
                employee and team.
              </p>

              {/* <Link
                className="inline-flex items-center rounded-full border border-black px-4 py-2 font-semibold text-gray-800 transition hover:bg-gray-200"
                href="#"
              >
                En savoir plus
                <svg
                  className="ml-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Link> */}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default MainForm;
