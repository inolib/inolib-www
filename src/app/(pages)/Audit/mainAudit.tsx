import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";
import { RxArrowRight} from "react-icons/rx";

export default function MainForm() {
  return (
    <main className="container mx-auto  lg:px-0  xs:ml-0 ">
      {/* Breadcrumb */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <section>
      <Breadcrumb>
        <BreadcrumbList className="lg:ml-24 flex items-center space-x-2 mb-6 mt-16 md:ml-10 xs:ml-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image src='/Icons/BreadcrumIcon.svg' alt='Home' width={20} height={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Audit" className="text-gray-600">Audit</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <header className="lg:ml-24 xs:ml-6">
          <h1 className="text-4xl font-bold text-gray-900">Audit d'accessibilité numérique</h1>
        </header>
        </section>

    
       
        <section className="w-1/3  mt-10 mr-10">
          <Image
            src="/Homepage/med1.svg" 
            alt=""
            width={650}
            height={450}
            className="object-cover"
          />
        </section>
      </div>

      <section className="lg:flex lg:space-x-16 mt-6 lg:mt-12 px-4 lg:px-10 ml-14 pb-4 xs:ml-6">
        <div className="flex flex-col lg:w-1/2">
          <p className="text-gray-600 mb-6">
            INOLIB vous accompagne dans la création d'expériences numériques accessibles et conviviales pour tous, conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation, interactives et pratiques, sont conçues pour répondre aux besoins de tout public, tels que les managers, chefs de projet, développeurs, designers et webmasters.
          </p>
          <ul className="list-none text-gray-600 mb-6 space-y-3 ml-2">
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
          <Link href="/contact" className="bg-[#254147] text-white flex items-center justify-between hover:bg-primary/90 py-2.5 px-4 rounded-lg w-44">
            Nous contacter
            <RxArrowRight className="w-6 h-6" />
          </Link>
        </div>

        <aside className="lg:w-1/2 space-y-6 mt-10 lg:mt-0 xs:mr-7">
          <div className="bg-[#F5F9FA] p-6 rounded-lg shadow flex flex-row space-x-4 ">
            <div className=' '>
            <Image src='Icons/appli.svg' alt='' width={80} height={80}></Image>
            </div>
            <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Site web</h2>
            
            <p className="text-gray-700 mb-4">
              Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.
            </p>
            <Link href="#" className="inline-flex items-center px-4 py-2 border border-black text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition">
              En savoir plus
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          </div>
          <div className="bg-[#F5F9FA] p-6 rounded-lg shadow  flex flex-row space-x-4">
          <div className=' '>
            <Image src='Icons/siteWeb.svg' alt='' width={80} height={80}></Image>
            </div>
            <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Application mobile</h2>
            <p className="text-gray-700 mb-4">
              Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.
            </p>
            <Link href="#" className="inline-flex items-center px-4 py-2 border border-black text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition">
              En savoir plus
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            </section>
          </div>
        </aside>
      </section>
    </main>
  );
}
