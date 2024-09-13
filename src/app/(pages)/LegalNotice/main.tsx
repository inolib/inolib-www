import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/UI/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function MainLegal(): JSX.Element {
  return (
    <>
      {/* SEO and Accessibility */}
      <Head>
        <title>Mentions Légales - INOLIB</title>
        <meta
          name="description"
          content="Mentions légales du site INOLIB SAS, société au capital de 5 000 € et immatriculée au RCS de Lyon sous le numéro B 909 129 454."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="mx-auto ml-6 mt-12 px-4">
        {/* Breadcrumb */}
        <section aria-label="Breadcrumb navigation" className="mb-8">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center space-x-2 text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" aria-label="Homepage">
                  <Image src="/Icons/BreadcrumIcon.svg" alt="Home" width={20} height={20} />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/mentions-legales" className="text-gray-600" aria-current="page">
                  Mentions légales
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        {/* Main Legal Content */}
        <article className="prose lg:prose-lg mx-auto leading-7 text-gray-700">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-900">Mentions Légales</h1>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Éditeur du site</h2>
            <ul className="list-none space-y-2">
              <li>
                <strong>Société :</strong> INOLIB SAS
              </li>
              <li>
                <strong>Numéro SIRET :</strong> 909 129 454 00015
              </li>
              <li>
                <strong>Responsable éditorial :</strong> Djebrine ALOUI
              </li>
              <li>
                <strong>Forme juridique :</strong> Société par actions simplifiée (SAS) au capital de 5 000 €
              </li>
              <li>
                <strong>Siège social :</strong> 254 rue Vendôme - 69003 Lyon
              </li>
              <li>
                <strong>Immatriculation :</strong> RCS de Lyon sous le numéro B 909 129 454
              </li>
              <li>
                <strong>Numéro de TVA intracommunautaire :</strong> FR89909129454
              </li>
              <li>
                <strong>Téléphone :</strong> <span className="text-sky-600">06 47 21 86 69</span>
              </li>
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@inolib.com" className="text-sky-600 underline">
                  contact@inolib.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Hébergement</h2>
            <p>Le site est hébergé en France par :</p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Société :</strong> o2switch
              </li>
              <li>
                <strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand
              </li>
              <li>
                <strong>Téléphone :</strong> 04 44 44 60 40
              </li>
              <li>
                <strong>Site web :</strong>
                <a
                  href="https://www.o2switch.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 underline"
                >
                  https://www.o2switch.fr
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Contact service clients</h2>
            <p>
              <strong>Téléphone :</strong> 06 47 21 86 69 <br />
              <strong>Horaires :</strong> Du lundi au vendredi de 9h00 à 12h00 et de 14h00 à 18h00 <br />
              <strong>Adresse postale :</strong> 254 rue Vendôme - 69003 Lyon <br />
              <strong>Email :</strong>{" "}
              <a href="mailto:contact@inolib.com" className="text-sky-600 underline">
                contact@inolib.com
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Conditions d'utilisation</h2>
            <p>
              La société INOLIB met tout en œuvre pour fournir une information fiable et actualisée. Toutefois, des
              erreurs ou omissions peuvent survenir. Il est conseillé à l'internaute de vérifier l'exactitude des
              informations auprès d'INOLIB et de signaler toute modification jugée utile. INOLIB ne saurait être tenue
              responsable de l'utilisation des informations fournies ni de tout dommage direct ou indirect pouvant en
              découler.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Liens hypertextes</h2>
            <p>
              Le site www.inolib.com peut proposer des liens vers d'autres sites ou ressources disponibles sur Internet.
              INOLIB ne contrôle pas ces sites externes et n'est pas responsable de leur disponibilité ni de leur
              contenu. L'internaute est seul responsable des risques liés à leur utilisation et doit se conformer à
              leurs conditions d'utilisation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Propriété intellectuelle</h2>
            <p>
              Le contenu du site www.inolib.com (incluant, sans s'y limiter, les graphismes, textes, images, vidéos,
              sons, logos, et icônes) est la propriété exclusive d'INOLIB. Toute reproduction, distribution,
              modification, ou publication de ces éléments sans l'accord d'INOLIB est strictement interdite.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Litiges</h2>
            <p>
              Les présentes conditions sont régies par le droit français. Tout litige relatif à l'utilisation du site
              www.inolib.com sera de la compétence exclusive des tribunaux dont dépend le siège social de la société
              INOLIB.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Données personnelles</h2>
            <p className="mb-10">
              En règle générale, vous n'êtes pas tenu de nous fournir vos données personnelles lorsque vous visitez
              notre site www.inolib.com. Toutefois, pour certains services, vous pouvez être amené à fournir des
              informations telles que votre nom, votre adresse mail et votre numéro de téléphone.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
