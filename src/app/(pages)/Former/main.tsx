import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";

export default function MainForm(){
  return(
   


    
      <main className="container mx-auto py-8 px-4 lg:px-0 ml-12 mt-28">
         <Breadcrumb >
  <BreadcrumbList className='mb-10'>
  
    <BreadcrumbItem>
      <BreadcrumbLink href="/"><Image src='/Icons/BreadcrumIcon.svg' alt='' width={20} height={20}></Image></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/former">Formations</BreadcrumbLink>
    </BreadcrumbItem>
   
   
  </BreadcrumbList>
      
       
  
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Formations</h1>
        </header>
  
        <section className="mb-8">
          <Image 
          src="/Homepage/seated 2.svg" 
          alt="Illustration des formations" 
          width={600} 
          height={400} 
           />
        </section>
  
        <section className="lg:flex lg:space-x-8">
          <article className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-xl font-sans text-gray-900 mb-4">INOLIB vous accompagne dans la création d’expériences numériques accessibles et conviviales pour tous, conformément aux normes RGAA et WCAG. Nos formations et sessions de sensibilisation, interactives et pratiques, sont conçues pour répondre aux besoins de tout public, tels que les managers, chefs de projet, développeurs, designers et webmasters.</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Élargir votre audience en incluant tous les utilisateurs</li>
              <li>Améliorer l'expérience utilisateur pour tous</li>
              <li>Respecter les obligations en matière d'accessibilité numérique</li>
            </ul>
            <Link href="#" className="inline-flex items-center px-4 py-2 border border-black text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition">
              Nous contacter
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </article>
  
          <aside className="lg:w-1/3 space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Site web</h3>
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
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application mobile</h3>
              <p className="text-gray-700 mb-4">
                Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.
              </p>
              <Link href="#" className="inline-flex items-center px-4 py-2 border border-black text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition">
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </aside>
        </section>
        </Breadcrumb>
        </main> 
        )}






















