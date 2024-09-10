import Link from "next/link";

import { jobOffers } from "~/DATA/data";

export const CarrerSection = () => {
  return (
    <section className="bg-[#F5F4EE] py-16">
      <div className="container mx-auto px-6">
        <header className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[#CBE0E4] px-4 py-1 text-sm font-semibold text-gray-800">
            Carrières
          </span>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Rejoindre notre équipe</h1>
          <p className="mt-2 text-gray-600">We&apos;re a 100% remote team spread all across the world. Join us!</p>
        </header>

        <div className="mx-auto w-160 space-y-6">
          {jobOffers.map((offer, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg bg-white p-6 shadow">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{offer.title}</h2>
                <p className="mt-1 text-gray-600">{offer.type}</p>
                <p className="mt-1 text-gray-600">{offer.salaryRange}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-800">{offer.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Candidater spontanément</h2>
          <p className="mx-auto mb-8 w-80 text-gray-600">
            Aucune offre ne correspond à votre profil ? Envoyez-nous votre candidature spontanée
            <a href="mailto:carriere@inolib.com" className="border-b border-[#3E6D77] text-[#3E6D77]">
              {" "}
              carriere@inolib.com
            </a>
          </p>
          <Link
            href="/"
            className="rounded-lg bg-[#254147] px-6 py-3 text-white shadow hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Envoyer ma candidature spontanée
          </Link>
        </div>
      </div>
    </section>
  );
};
