import Image from "next/image";
import { Method } from "~/DATA/data";

const Methodologie = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-16" aria-labelledby="services-heading">
      <div className="mx-auto max-w-5xl text-center">
        <h2 id="services-heading" className="mb-4 text-3xl font-bold">
          Notre méthodologie
        </h2>
        <p className="mb-12 text-gray-600">
        Notre méthodologie de travail repose sur la collaboration, l'innovation et l'efficacité pour offrir des solutions web performantes et adaptées à vos besoins.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {Method.map((service, index) => (
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

export default Methodologie;
