import Image from "next/image";

import { services } from "~/DATA/data";

const ServiceSection = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-16" aria-labelledby="services-heading">
      <div className="mx-auto max-w-5xl text-center">
        <h2 id="services-heading" className="mb-4 text-3xl font-bold">
          Services complémentaires pour propulser votre projet :
        </h2>
        <p className="mb-12 text-gray-600">
          Everything you need to know about the product and billing. Can't find the answer you're looking for? Please
          chat to our friendly team.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                <Image src={service.icon} alt="" width={40} height={40} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
