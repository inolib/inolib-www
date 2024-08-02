import Image from 'next/image';
import { valuesData, ValueItem } from '~/DATA/data';

const ValuesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white text-center" aria-labelledby="values-heading">
      <div className="max-w-6xl mx-auto mx-14 ">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-[#CBE0E4] rounded-full">Nos valeurs</span>
        <h2 id="values-heading" className="text-3xl font-bold text-gray-900 mb-4">
          Ce qui nous anime au quotidien
        </h2>
        <p className="text-gray-600 mb-12">
          Our shared values keep us connected and guide us as one team.
        </p>
        <div className="grid gap-8 md:grid-cols-3 sm: grid-cols-1">
          {valuesData.map((value: ValueItem, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <Image 
                src={value.icon} 
                alt={value.alt} 
                width={50} 
                height={50} 
                className="mb-4" 
              />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
