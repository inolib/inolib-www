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
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="ml-11 flex flex-col justify-center">
            <div className="mb-4 flex items-center">
              <Image src="/Icons/eclaire.svg" alt="" width={40} height={40} className="mr-2" />
              <h2 className="text-2xl font-bold">Deliver instant answers</h2>
            </div>
            <p className="mb-4 text-gray-600">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
            <ul className="mb-6 list-none space-y-2 text-gray-600">
              <li className="flex items-start">
                <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
                Élargir votre audience en incluant tous les utilisateurs
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
            <>
              <Link
                href="/pages/contact"
                className="hover:bg-primary/90 flex w-44 items-center justify-between rounded-lg bg-[#254147] px-4 py-2.5 text-white"
              >
                Nous contacter
                <RxArrowRight className="h-6 w-6" />
              </Link>
            </>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/Homepage/image.svg" alt="" width={700} height={600} className="w-full rounded-lg" />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <Image src="/Homepage/meufBD.svg" alt="" width={300} height={300} />
          </div>
          <div>
            <h2 id="main-test-heading" className="mb-4 text-3xl font-bold">
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

export default Conf;
