import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";

const Intro = () => {
  return (
    <section className="w-full bg-white " aria-labelledby="about-heading">
    <div className="w-full px-4 py-16 flex flex-col items-center text-center ">

    <Breadcrumb className="hidden xl:block mb-6 xl:pl-20 xl:w-[1280px]">
      <BreadcrumbList className=" space-x-2 ">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Image src="/Icons/BreadcrumIcon.svg" alt="Home" width={20} height={20} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/About" className="text-gray-600">
            À propos
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <div className="w-full flex flex-col items-center max-w-3xl sm:w-[600px] ">

      <span className="mb-4 w-40 inline-block rounded-full bg-[#CBE0E4] px-3 py-1 text-sm font-medium">À propos</span>
      <h2 id="about-heading" className="m-auto mb-4 w-[100%] text-3xl font-bold text-gray-900">
        Nous faisons de l’inclusivité notre mot d’ordre.
      </h2>
      <p className="m-auto mb-6 w-[100%] text-gray-600">
        Untitled is a technology company that builds infrastructure for your startup, so you don’t have to. Businesses
        of every size—from new startups to public companies—use our software to manage their businesses.
      </p>
      <Link
        href="/About#Carrer"
        className="rounded-lg bg-[#254147] px-6 py-3 text-white shadow hover:bg-green-700 focus:outline-none focus:ring-4"
      >
        Rejoindre notre equipe
      </Link>
    </div>

    </div>
  </section>
);
};

export default Intro;
