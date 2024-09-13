import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import {ServiceItem} from "./ServiceItem";

export const Services = () => {

  const data = [{
  title:"Audits d'accessibilité numérique",
  description : "Bénéficiez d'audits d'accessibilité réalisés par nos experts, mettant en évidence les points forts et les zones d\'amélioration de votre site ou application. Nous proposons des audits de qualité pour vous assurer de respecter les normes d'accessibilité.",
  skills :["Corriger les erreurs en incluant tous les utilisateurs", "Améliorer l'expérience utilisateur pour tous", "Respecter les obligations en matière d'accessibilité numérique"],
  link :"/Audit",
  leftDirection : true,
  image :
  {
    src1: "/Icons/fichier.svg",
    src2 : "/Homepage/image1.svg",
    width : 550,
    heigth : 550,
  }
  },
  {
    title:"Accompagnement dans vos projets",
    description : " Nos experts vous assistent techniquement et vous accompagnent dans vos projets, avec des services sur-mesure.",
    skills :["Rendez-vous et séances d'accompagnement via le chat", "Envoi de briefings et rapports", "Conseils sur les bonnes pratiques et les normes"],
    link :"/Accoumpagner",
    leftDirection : false,
    image :
    {
      src1: "/Icons/fichier.svg",
      src2: "/Homepage/sommet.svg",
      width : 400,
      heigth : 400,
    }
    },
    {
      title:"Développement web et mobile",
      description : "Optez pour des sites web et applications conformes aux normes d'accessibilité grâce à notre équipe de développeurs qualifiés.",
      skills :["Projets sur-mesure, de la conception à la mise en ligne", "Tests, audits, et améliorations en continue", "Intégration avec plus de 100 services et outils"],
      link :"/Developpement",
      leftDirection : true,
      image :
      {
        src1: "/Icons/mobile.svg",
        src2 : "/Homepage/macon.svg",
        width : 400,
        heigth : 400,
      }
      },
      {
        title:"Formation en accessibilité numérique",
        description : "Participez à des formations spécialisées sur les normes et techniques d'accessibilité numérique, animées par nos experts.",
        skills :["Sessions de formation en direct et à distance", "Accès à des ressources exclusives", "Support continu et sessions de questions-réponses"],
        link :"/Former",
        leftDirection : false,
        image :
        {
          src1: "/Icons/hat.svg",
          src2 : "/Homepage/seated 2.svg",
          width : 400,
          heigth : 400,
        }
        }
]
const servicesToDiplay = data.map((service,index)=> {
  return<ServiceItem key={index} data= {service}/>
})
  return (
    <section className=" bg-[#FCFBF9] py-20" aria-labelledby="services-heading">
      <div className="flex flex-col items-center px-4 ">
                    <div className="mb-12 text-center">
                      <span
                        className="text-black-500 inline-block rounded-full bg-[#CBE0E4] px-3 py-1 text-sm"
                        aria-label="categorie de services"
                      >
                        Services
                      </span>
                      <h2 id="services-heading" className="mb-4 mt-4  text-3xl text-center sm:w-[720px] md:text-4xl xxs:mx-auto xxs:text-3xl ">
                        Découvrez nos services proposés autour de l'accessibilité numérique
                      </h2>
                      <p className="mx-auto max-w-2xl text-gray-600">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
                        Trusted by over 4,000 startups.
                      </p>
                    </div>
    <section className=" bg-[#FCFBF9] py-20" aria-labelledby="services-heading">
      <div className="flex flex-col items-center px-4 ">
                    <div className="mb-12 text-center">
                      <span
                        className="text-black-500 inline-block rounded-full bg-[#CBE0E4] px-3 py-1 text-sm"
                        aria-label="categorie de services"
                      >
                        Services
                      </span>
                      <h2 id="services-heading" className="mb-4 mt-4  text-3xl text-center sm:w-[720px] md:text-4xl xxs:mx-auto xxs:text-3xl ">
                        Découvrez nos services proposés autour de l'accessibilité numérique
                      </h2>
                      <p className="mx-auto max-w-2xl text-gray-600">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
                        Trusted by over 4,000 startups.
                      </p>
                    </div>


              <div className="flex justify-center items-center w-full space-y-12 flex-col mx-4">
                {servicesToDiplay }
              </div>

              <div className="flex justify-center items-center w-full space-y-12 flex-col mx-4">
                {servicesToDiplay }
              </div>
      </div>
    </section>
  );
}
