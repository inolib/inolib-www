import Image from "next/image";

import { services } from "~/DATA/data";

const ServiceSection = () => {
  return (
    <div className="bg-[#FAFAFA] px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-4 text-3xl font-bold" id="services-heading">
          Services complémentaires pour propulser votre projet
        </h1>

        <p className="mb-12 text-gray-600">
          Everything you need to know about the product and billing. Can't find the answer you're looking for? Please
          chat to our friendly team.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="mb-4">
                <Image alt="" height={40} src={service.icon} width={40} />
              </div>

              <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
