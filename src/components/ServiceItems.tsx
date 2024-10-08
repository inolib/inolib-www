import { ArrowRight } from "lucide-react";
import Image from "next/image";

type ServiceitemProps = {
  title: string;
  description: string;
  skills: string[];
  link: string;
  leftDirection: boolean;
  image: {
    src1: string;
    src2: string;
    width: number;
    heigth: number;
  };
};

export const ServiceItem = ({ data }: { data: ServiceitemProps }) => {
  const { title, description, skills, link, leftDirection, image } = data;

  const skillsToDisplay = skills.map((skill, index) => {
    return (
      <li className="flex items-start py-1" key={index}>
        <Image alt="" className="mr-2" height={20} src="/Icons/CheckIcon.svg" width={20} />
        {skill}
      </li>
    );
  });

  return (
    <>
      {leftDirection ? (
        <div className="flex w-full flex-col items-center justify-center py-6 xxs:py-2 xs:py-3 md:flex-row md:justify-between xl:w-[1280px]">
          <div className="max-w-128 flex-col md:w-[50%] md:pr-2 lg:mx-10">
            <Image alt="" height={50} src={image.src1} width={50}></Image>

            <h3 className="xxs:w-92 my-2 pt-2 text-2xl font-semibold">{title}</h3>

            <p className="mb-4 text-justify text-gray-600">{description}</p>

            <ul className="mb-4 list-disc pl-5 xxs:pl-1">{skillsToDisplay}</ul>

            <a
              className="mt-2 inline-flex rounded-lg border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
              href={link}
            >
              En savoir plus
              <ArrowRight className="ml-2 size-5" />
            </a>
          </div>

          <div className="mb-6 flex items-center justify-center xxs:mt-8 md:mb-0 md:w-[50%]">
            <Image alt="" height={image.heigth} src={image.src2} width={image.width} />
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col-reverse items-center justify-center py-6 xxs:py-2 xs:py-3 md:flex-row md:justify-between xl:w-[1280px]">
          <div className="mb-6 flex items-center justify-center xxs:mt-8 md:mb-0 md:w-[50%]">
            <Image alt="" height={image.heigth} src={image.src2} width={image.width} />
          </div>

          <div className="max-w-128 flex-col md:w-[50%] md:pr-2 lg:mx-10">
            <Image alt="" height={50} src={image.src1} width={50}></Image>

            <h3 className="xxs:w-92 my-2 pt-2 text-2xl font-semibold">{title}</h3>

            <p className="mb-4 text-justify text-gray-600">{description}</p>

            <ul className="mb-4 list-disc pl-5 xxs:pl-1">{skillsToDisplay}</ul>

            <a
              className="mt-2 inline-flex rounded-lg border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
              href={link}
            >
              En savoir plus
              <ArrowRight className="ml-2 size-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
