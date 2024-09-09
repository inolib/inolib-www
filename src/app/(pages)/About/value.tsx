import Image from "next/image";
import { valuesData } from "~/DATA/data";
import { ValueItem } from "~/lib/types/features/componentTypes/types";

const ValuesSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 text-center" aria-labelledby="values-heading">
      <div className="mx-auto max-w-6xl">
        <span className="mb-4 inline-block rounded-full bg-[#CBE0E4] px-3 py-1 text-sm font-medium">Nos valeurs</span>
        <h2 id="values-heading" className="mb-4 text-3xl font-bold text-gray-900">
          Ce qui nous anime au quotidien
        </h2>
        <p className="mb-12 text-gray-600">Our shared values keep us connected and guide us as one team.</p>
        <div className="sm: grid grid-cols-1 gap-8 md:grid-cols-3">
          {valuesData.map((value: ValueItem, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={value.icon} alt="" width={50} height={50} className="mb-4" />
              <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
