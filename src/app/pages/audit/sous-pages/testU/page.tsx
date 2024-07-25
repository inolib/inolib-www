import HeaderHat from'~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/footer';
import MainTest from '~/app/pages/audit/sous-pages/testU/main';
import ServiceSection from '~/components/serviceSection';
import ContactBanner from '~/components/contactBanner';
import Faqs from '~/components/Faqs';
import Statis from '~/components/statistique';




export default function Developpement(){
return(
<div className='overflow-hidden'>
 <HeaderHat 
   bgColor="bg-[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"/>
<Header 
  textColor="text-black"
  logosrc="/Logo/logo-jaune-noir.svg"/>
<MainTest/>
<Statis />
<ServiceSection />
<Faqs />
<ContactBanner />
<Footer />
</div>
)}