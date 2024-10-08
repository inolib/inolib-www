import { data } from "~/DATA/data";

import { ServiceItem } from "./ServiceItems";

const Services = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="flex flex-col items-center px-4">
        <div className="mb-12 text-center">
          <span className="text-black-500 bg-turquoise-light inline-block rounded-full px-3 py-1 text-sm" aria-hidden>
            Services
          </span>

          <h2 className="my-4 text-center text-3xl xxs:mx-auto xxs:text-3xl sm:w-[720px] md:text-4xl">
            Découvrez nos services proposés autour de l’accessibilité numérique
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
            Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="mx-4 flex w-full flex-col items-center justify-center space-y-12">
          {data.map((service, index) => {
            return <ServiceItem data={service} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
