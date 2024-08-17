import Image from 'next/image';
import Link from 'next/link';
import { RxArrowRight } from "react-icons/rx";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";

const MainTest = () => {
  return (
    <main className="container mx-auto py-8 px-4 lg:px-0 mt-28">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList className="mb-10 flex items-center w-5/12 ml-11 lg:ml-10 sm:w-128 xxs:w-80 xxs:ml-0 xxs:mr-0">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src='/Icons/BreadcrumIcon.svg' alt='Home' width={20} height={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/pages/former">Formations</BreadcrumbLink>
          </BreadcrumbItem> 
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/pages/formation">Nos formations</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className=" lg:mx-auto lg:w-auto md:w-auto xxs:mx-1 xxs:w-80 xxs:items-start">
        <header className="mb-8 xxs: xxs:ml-0">
          <h1 className="text-3xl font-bold text-gray-900 ml-11">Nos formations</h1>
        </header>

        {/* Main content */}
        <article className="grid md:grid-cols-2 gap-8 mb-16">
         
            <p className=' px-10 text-gray-600 md:w-160 sm:w-128'>INOLIB vous accompagne dans la creation d'expériences numérique accessibleset conviviales pour tous,conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation ,interactives et pratique , sont conçues pour repondre aux besoins de tout public,
               tels que les managers, chefs de projet,developpeurs, designers et webmasters.</p>
            
          
         
        </article>
        <div className='lg:w-[1160px] md:w-[600px] sm:w-128 border-t-2 ml-10 xxs:w-60 '></div>
        <section className="grid md:grid-cols-2 gap-8 ">
          
          <div className="flex justify-center mt-32">
            <Image src="/Homepage/seated 2.svg" alt="Customer support illustration" width={500} height={500} />
          </div>
          <div>
            <h2 id="main-test-heading" className="text-3xl font-bold mb-4 py-2 mt-16">Le processus d'audit Inolib en 4 étapes clés :</h2>
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

export default MainTest;
