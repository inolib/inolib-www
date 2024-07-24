
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '~/components/UI/Button';
import { SocialButton } from '~/components/UI/SocialButton';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "~/components/UI/Breadcrumb";

export default function MainContact() {
  return (
    <main className="container mx-auto py-8 px-4 lg:px-0">
             <Breadcrumb >
  <BreadcrumbList className='mb-10'>
  
    <BreadcrumbItem>
      <BreadcrumbLink href="/"><Image src='/Icons/BreadcrumIcon.svg' alt='' width={20} height={20}></Image></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
    </BreadcrumbItem>
   
   
  </BreadcrumbList>
      

      <section className="lg:flex lg:space-x-64">
        <aside className="lg:w-64 mb-8 lg:mb-0  ml-12 md:w-64 sm:w-50">
          <div className="bg-blue-100 p-4 rounded-lg shadow mb-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Chat to sales</h2>
            <p className="text-gray-700 mb-2">Speak to our friendly team.</p>
            <a href="mailto:sales@untitledui.com" className="text-blue-500">sales@untitledui.com</a>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow mb-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Call us</h2>
            <p className="text-gray-700 mb-2">Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+15550000000" className="text-blue-500">+1 (555) 000-0000</a>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Visit us</h2>
            <p className="text-gray-700 mb-2">Visit our office HQ.</p>
            <address className="not-italic text-gray-700">
              100 Smith Street<br />
              Collingwood VIC 3066 AU
            </address>
          </div>
          <SocialButton />
        </aside>

        <div className="lg:w-96">
          <form className="space-y-4">
            <fieldset className="mb-4">
              <legend className="text-lg font-semibold text-gray-900 mb-2 w-96 border-b-2 border-b-gray-200">Vous êtes intéressé par :</legend>
              <div className="flex flex-wrap gap-2 ">
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">Audit</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">Accompagnement</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">Développement</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100 ">Formation</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">Autre</button>
              </div>
            </fieldset>

            <fieldset className="mb-4">
              <legend className="text-lg font-semibold text-gray-900 mb-2 w-96 border-b-2 border-b-gray-200">Votre budget</legend>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">1000€</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">5k - 10k€</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">10k-20k€</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100 ">20k-50k€</button>
                <button type="button" className="px-4 py-2 border rounded-full focus:outline-none hover:bg-green-100 bg-blue-100">Autre</button>
              </div>
            </fieldset>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" id="firstName" className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50" placeholder="First name" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" id="lastName" className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50" placeholder="Last name" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50" placeholder="you@company.com" />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone number</label>
              <input type="tel" id="phoneNumber" className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50" placeholder="+1 (555) 000-0000" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50" placeholder="Leave us a message..."></textarea>
            </div>

            <div className="flex items-start">
              <input id="privacyPolicy" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring focus:ring-opacity-50" />
              <label htmlFor="privacyPolicy" className="ml-2 block text-sm text-gray-900">
                You agree to our friendly <a href="#" className="text-blue-500">privacy policy</a>.
              </label>
            </div>

            <div>
              <Button variant="buttonNoir">
                Prendre rendez-vous
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="flex ml-80">
        <Image src="/homepage/contact.svg" 
        alt="Illustration contact" 
        width={800} height={500} />
      
      </section>
      </Breadcrumb>
    </main>
  );
}
