import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";

const Intro = () => {
  return (
    <section className="bg-white px-4 py-16 text-center" aria-labelledby="about-heading">
      <Breadcrumb>
        <BreadcrumbList className="mb-6 ml-16 mt-0 flex items-center space-x-2">
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

      <div className="mx-auto max-w-3xl">
        <span className="mb-4 inline-block rounded-full bg-[#CBE0E4] px-3 py-1 text-sm font-medium">À propos</span>
        <h2 id="about-heading" className="m-auto mb-4 w-128 text-3xl font-bold text-gray-900">
          Nous faisons de l’inclusivité notre mot d’ordre.
        </h2>
        <p className="m-auto mb-6 w-160 text-gray-600">
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
    </section>
  );
};

export default Intro;
