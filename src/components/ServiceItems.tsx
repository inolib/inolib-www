import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type ServiceitemProps =
{
  title:string,
  description : string,
  skills : string[],
  link : string,
  leftDirection : boolean,
  image :
  {
    src1 :string
    src2 : string,
    width : number,
    heigth : number
  }
}
export const ServiceItem = ({data}: {data:ServiceitemProps}) => {
  const { title, description, skills, link, leftDirection, image } = data;

const skillsToDisplay = skills.map((skill, index)=> {
  return <li key={index} className="Items-start flex py-1">
  <Image src="/Icons/CheckIcon.svg" alt="" width={20} height={20} className="mr-2" />
  {skill}
</li>
})

  return(
<>
            {leftDirection ?(
               <div className="flex w-full flex-col justify-center items-center py-6 xxs:py-2 xs:py-3 md:flex-row md:justify-between xl:w-[1280px] ">
                          <div className="lg:mx-10 max-w-128 md:w-[50%] md:pr-2 flex-col">
                            <Image src={image.src1} alt="" width={50} height={50}></Image>

                            <h3 className="mb-2 mt-2 pt-2 text-2xl font-semibold xxs:w-92 ">{title}</h3>
                            <p className="mb-4 text-gray-600 text-justify">
                              {description}
                            </p>
                            <ul className="mb-4 list-disc pl-5 xxs:pl-1">
                              {skillsToDisplay}
                            </ul>
                            <a
                            aria-label={title}
                              href={link}
                              className="mt-2 inline-flex rounded-lg border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
                            >
                              En savoir plus
                              <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </a>
                          </div>


                        <div className="mb-6 flex justify-center items-center md:mb-0 md:w-[50%] xxs:mt-8 ">
                          <Image src={image.src2} alt="" width={image.width} height={image.heigth} />
                        </div>
               </div>
            ):(
              <div className="flex w-full flex-col-reverse justify-center items-center py-6 xxs:py-2 xs:py-3 md:flex-row md:justify-between xl:w-[1280px] ">

<div className="mb-6 flex justify-center items-center md:mb-0 md:w-[50%] xxs:mt-8 ">
                          <Image src={image.src2} alt="" width={image.width} height={image.heigth} />
                        </div>
            <div className="lg:mx-10 max-w-128 md:w-[50%] md:pr-2 flex-col">
                            <Image src={image.src1} alt="" width={50} height={50}></Image>

                            <h3 className="mb-2 mt-2 pt-2 text-2xl font-semibold xxs:w-92 ">{title}</h3>
                            <p className="mb-4 text-gray-600 text-justify">
                              {description}
                            </p>
                            <ul className="mb-4 list-disc pl-5 xxs:pl-1">
                              {skillsToDisplay}
                            </ul>
                            <a
                            aria-label={title}
                              href={link}
                              className="mt-2 inline-flex rounded-lg border-[1.5px] border-solid border-[#254147] bg-transparent px-4 py-2 text-black transition hover:bg-[#b4cfd6]"
                            >
                              En savoir plus
                              <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </a>
                          </div>
              </div>
              )
            }
       </>
  )
}
