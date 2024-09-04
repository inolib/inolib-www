import Image from 'next/image';
import Link from 'next/link';
import { RxArrowRight } from "react-icons/rx";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";

  const Conf = () => {
  return (
    <main className="container mx-auto py-8 px-4 lg:px-0 mt-28">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-10 flex items-center w-5/12 ml-11">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src='/Icons/BreadcrumIcon.svg' alt='Home' width={20} height={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Developpement">Developpement</BreadcrumbLink>
          </BreadcrumbItem> 
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/appliMobile">Application mobile</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className=" mx-auto">
        <header className="mb-8 ">
          <h1 className="text-3xl font-bold text-gray-900 ml-11">Audit de conformité</h1>
        </header>

        {/* Main content */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center ml-11">
            <div className="flex items-center mb-4">
              <Image src="/Icons/eclaire.svg" alt="" width={40} height={40} className='mr-2' />
              <h2 className="text-2xl font-bold">Deliver instant answers</h2>
            </div>
            <p className="text-gray-600 mb-4">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <ul className="list-none text-gray-600 mb-6 space-y-2">
              <li className="flex items-start">
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />
                Élargir votre audience en incluant tous les utilisateurs
              </li>
              <li className="flex items-start">
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />
                Améliorer l'expérience utilisateur pour tous
              </li>
              <li className="flex items-start">
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />
                Respecter les obligations en matière d'accessibilité numérique
              </li>
            </ul>
            <>
              <Link href="/pages/contact" className="bg-[#254147] text-white flex items-center justify-between hover:bg-primary/90 py-2.5 px-4 rounded-lg w-44">
                Nous contacter
                <RxArrowRight className="w-6 h-6" />
              </Link>
            </>
          </div>
          <div className="flex justify-center items-center">
            <Image src="/Homepage/image.svg" alt="" 
            width={700}
            height={600}
             className="rounded-lg w-full" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Image src="/Homepage/meufBD.svg" alt="Customer support illustration" width={300} height={300} />
          </div>
          <div>
            <h2 id="main-test-heading" className="text-3xl font-bold mb-4">Le processus d'audit Inolib en 4 étapes clés :</h2>
            <p className="text-gray-600 mb-4">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <ol className="list-none text-gray-600 space-y-6 ">
              <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
                <Image src='/Icons/Aicon.svg' alt='' width={30} height={30} />
                <div>
                  <h3 className="font-semibold">1. Co-construction</h3>
                  <p>Sélection d'un échantillon représentatif en collaboration avec vous.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
                <Image src='/Icons/loupe.svg' alt='' width={30} height={30} />
                <div>
                  <h3 className="font-semibold">2. Investigation</h3>
                  <p>Audit de conformité réalisé par nos experts, grâce à une grille de test spécifique.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
                <Image src='/Icons/eg.svg' alt='' width={30} height={30} />
                <div>
                  <h3 className="font-semibold">3. Synthèse</h3>
                  <p>Rédaction d'un rapport d'audit détaillé, incluant nos recommandations d'accessibilité.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
                <Image src='/Icons/chat.svg' alt='' width={30} height={30} />
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
