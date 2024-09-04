import Link from 'next/link';
import {jobOffers } from '~/DATA/data';

export  const CarrerSection:React.FC = () => {
  return(
    <section className="bg-[#F5F4EE]  py-16">
    <div className="container mx-auto px-6">
      <header className="text-center mb-12">
        <span className="inline-block bg-[#CBE0E4]  text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
          Carrières
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Rejoindre notre équipe
        </h1>
        <p className="text-gray-600 mt-2">
          We&apos;re a 100% remote team spread all across the world. Join us!
        </p>
      </header>

      <div className="space-y-6 mx-auto w-160">
        {jobOffers.map((offer, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {offer.title}
              </h2>
              <p className="text-gray-600 mt-1">{offer.type}</p>
              <p className="text-gray-600 mt-1">{offer.salaryRange}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-800">{offer.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Candidater spontanément
        </h2>
        <p className="text-gray-600 mb-8 w-80 mx-auto">
          Aucune offre ne correspond à votre profil ? Envoyez-nous votre candidature spontanée 
       <a href="mailto:carriere@inolib.com" className="text-[#3E6D77] border-b border-[#3E6D77]"> carriere@inolib.com</a> 
        </p>
        <Link href="/" className="bg-[#254147] text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:outline-none">
          
            Envoyer ma candidature spontanée
          
        </Link>
      </div>
    </div>


</section>
  )
}