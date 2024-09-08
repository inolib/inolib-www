import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Services() {
  return (
    <section className="bg-[#FCFBF9] py-20" aria-labelledby="services-heading">
       <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#CBE0E4] text-sm text-black-500 px-3 py-1 rounded-full" aria-label="categorie de services">Services</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Découvrez nos services proposés autour d'accessibilité numérique
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="space-y-12 xxs:flex-col">
          <div className="flex flex-col md:flex-row items-center py-6 xxs:py-2 xs:py-3">
            <div >
            <div className='max-w-128 mx-10'>
            <Image src="/Icons/fichier.svg" alt='' width={40} height={40}></Image>
           
              <h3 className="text-2xl font-semibold mb-2 mt-2 pt-2">Audits d'accessibilité numérique</h3>
              <p className="text-gray-600 mb-4 ">
                Bénéficiez d'audits d'accessibilité réalisés par nos experts, mettant en évidence les points forts et les zones d'amélioration de votre site ou application. Nous proposons des audits de qualité pour vous assurer de respecter les normes d'accessibilité.
              </p>
              < ul className="list-disc pl-5 mb-4">
                <li className='flex Items-start py-1'>
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />
                  Corriger les erreurs en incluant tous les utilisateurs</li>
                <li className='flex Items-start py-1'>
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />Améliorer l'expérience utilisateur pour tous</li>
                <li className='flex Items-start py-1'>
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />Respecter les obligations en matière d'accessibilité numérique</li>
                </ul>
                <a href="/Audit" className="inline-flex bg-transparent text-black border-[1.5px] border-[#254147] border-solid py-2 px-4 mt-2 rounded-lg  hover:bg-[#b4cfd6] transition">
                En savoir plus 
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
              </div>
             
            </div>

            <div className='flex-shrink-0 ml-24  mb-6 md:mb-0 md:mr-6'>
             
              <Image 
              src="/HomePage/image1.svg" 
              alt="" 
              width={550} 
              height={550} 
             
               />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 lg:mr-60">
              <Image src="/HomePage/sommet.svg" 
              alt=""
               width={400}
              height={400}
              />
            </div>
            <div className=' flex-col max-w-128 mr-8'>
              <Image src="/Icons/flag.svg"
               alt=""
              width={40} height={40}></Image>
              <h3 className="text-2xl font-semibold mb-2 mt-2 pt-2">Accompagnement dans vos projets</h3>
              <p className="text-gray-600 mb-4 md:min-w-128">
                Nos experts vous assistent techniquement et vous accompagnent dans vos projets, avec des services sur-mesure.
              </p>
              < ul className="list-disc pl-5 mb-4">
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />Rendez-vous et séances d'accompagnement via le chat</li>
                <li className='flex Items-start py-1'>
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />Envoi de briefings et rapports</li>
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />
                Conseils sur les bonnes pratiques et les normes</li>
                </ul>
                <a href="/Accoumpagner" className="inline-flex bg-transparent text-black border-[1.5px] border-[#254147] border-solid py-2 mt-2 px-4 rounded-xl  hover:bg-[#b4cfd6] transition">
                En savoir plus
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center py-6">
          <div className='flex-col max-w-128 px-10'> 
          <Image src="/Icons/mobile.svg"
               alt=""
              width={40} height={40}></Image>
              <h3 className="text-2xl font-semibold mb-2 mt-2 pt-2">Développement web et mobile</h3>
              <p className="text-gray-600 mb-4">
                Optez pour des sites web et applications conformes aux normes d'accessibilité grâce à notre équipe de développeurs qualifiés.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />Projets sur-mesure, de la conception à la mise en ligne</li>
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />Tests, audits, et améliorations en continue</li>
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />Intégration avec plus de 100 services et outils</li>
             </ul>
              <a href="/Developpement" className="inline-flex bg-transparent text-black border-[1.5px] border-[#254147] border-solid py-2 mt-2 px-4 rounded-xl  hover:bg-[#b4cfd6] transition">
                En savoir plus
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
            </div>
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 px-36">
              <Image src="/Homepage/maçon.svg" 
              alt=""
               width={400} 
               height={400} 
               />
            </div>
            
          </div>

          <div className="flex flex-col md:flex-row items-center  ">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 lg:mr-60">
              <Image src="/Homepage/seated 2.svg" 
              alt="" 
              width={400} 
              height={400}/>
            </div>
            <div className='flex-col max-w-128 mr-12'>
            <Image src="/Icons/hat.svg"
               alt=""
              width={40} height={40}></Image>
              <h3 className="text-2xl font-semibold mb-2 mt-2 pt-2">Formation en accessibilité numérique</h3>
              <p className="text-gray-600 mb-4">
                Participez à des formations spécialisées sur les normes et techniques d'accessibilité numérique, animées par nos experts.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />Sessions de formation en direct et à distance</li>
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />Accès à des ressources exclusives</li>
                <li className='flex Items-start py-1'>
                  
                <Image src="/Icons/CheckIcon.svg" alt='' width={20} height={20} className="mr-2" />Support continu et sessions de questions-réponses</li>
              </ul>
              <a href="/Former" className="inline-flex bg-transparent text-black border-[1.5px] border-[#254147] border-solid py-2 mt-2 px-4 rounded-xl  hover:bg-[#b4cfd6] transition">
                En savoir plus
                <ArrowRightIcon className=" w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
