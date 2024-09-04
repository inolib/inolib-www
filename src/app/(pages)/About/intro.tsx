import Link from 'next/link'; 
import Image from 'next/image';
import { Breadcrumb , BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from '~/components/UI/Breadcrumb';
const Intro = () => {
  return (
    <section className="py-16 px-4 bg-white text-center" aria-labelledby="about-heading">
    <Breadcrumb>
    <BreadcrumbList className="ml-16 flex items-center space-x-2 mb-6 mt-0">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Image src='/Icons/BreadcrumIcon.svg' alt='Home' width={20} height={20} />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/About" className="text-gray-600">À propos</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
    
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-[#CBE0E4] rounded-full">À propos</span>
        <h2 id="about-heading" className="text-3xl font-bold text-gray-900 mb-4 w-128 m-auto">
          Nous faisons de l’inclusivité notre mot d’ordre.
        </h2>
        <p className="text-gray-600 mb-6 w-160 m-auto">
          Untitled is a technology company that builds infrastructure for your startup, so you don’t have to. Businesses of every size—from new startups to public companies—use our software to manage their businesses.
        </p>
        <Link href="/About#Carrer" className=" bg-[#254147] text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 focus:ring-4  focus:outline-none">
          
          Rejoindre notre equipe 
        
      </Link>
      </div>
    </section>
  );
};

export default Intro;
