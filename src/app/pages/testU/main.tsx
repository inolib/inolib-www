import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";

const MainTest = () => {
  return (
    <main className="py-16 px-4 bg-white" aria-labelledby="main-test-heading">
             <Breadcrumb >
  <BreadcrumbList className='mb-10'>
  
    <BreadcrumbItem>
      <BreadcrumbLink href="/"><Image src='/Icons/BreadcrumIcon.svg' alt='' width={20} height={20}></Image></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/testU">Test utilisateurs</BreadcrumbLink>
    </BreadcrumbItem>
   
   
  </BreadcrumbList>
      <div className="max-w-6xl mx-auto">
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <Image src="" alt="Instant answers icon" width={40} height={40} />
              <h2 className="text-2xl font-bold ml-2">Deliver instant answers</h2>
            </div>
            <p className="text-gray-600 mb-4">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Élargir votre audience en incluant tous les utilisateurs</li>
              <li>Améliorer l'expérience utilisateur pour tous</li>
              <li>Respecter les obligations en matière d'accessibilité numérique</li>
            </ul>
            <Link href="/pages/contact">
             
                Nous contacter
              
            </Link>
          </div>
          <div className="flex justify-center">
            <Image src="/Homepage/image.svg" alt="Customer service team" width={600} height={400} className="rounded-lg" />
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Image src="/Hoempage/meufBD.svg" alt="Customer support illustration" width={300} height={300} />
          </div>
          <div>
            <h2 id="main-test-heading" className="text-3xl font-bold mb-4">Le processus d'audit Inolib en 4 étapes clés :</h2>
            <p className="text-gray-600 mb-4">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <ol className="list-decimal list-inside text-gray-600 space-y-4">
              <li>
                <h3 className="font-semibold">1. Co-construction</h3>
                <p>Sélection d'un échantillon représentatif en collaboration avec vous.</p>
              </li>
              <li>
                <h3 className="font-semibold">2. Investigation</h3>
                <p>Audit de conformité réalisé par nos experts, grâce à une grille de test spécifique.</p>
              </li>
              <li>
                <h3 className="font-semibold">3. Synthèse</h3>
                <p>Rédaction d'un rapport d'audit détaillé, incluant nos recommandations d'accessibilité.</p>
              </li>
              <li>
                <h3 className="font-semibold">4. Échange</h3>
                <p>Restitution des résultats pour vous offrir une vue d'ensemble et répondre à vos questions.</p>
              </li>
            </ol>
          </div>
        </section>
      </div>
      </Breadcrumb>
    </main>
  );
};

export default MainTest;
