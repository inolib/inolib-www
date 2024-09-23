import {data} from "~/DATA/data"
import { ServiceItem } from "./ServiceItems";

export default function Services() {

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


              <div className="flex justify-center items-center w-full space-y-12 flex-col mx-4">
                {servicesToDiplay }
              </div>
      </div>
    </section>
  );
}
