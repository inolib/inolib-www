import HeaderHat from'~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Confo from '~/app/(sous-pages)/Audit/Conform/main';
import ServiceSection from '~/components/ServiceSection';
import ContactBanner from '~/components/ContactBanner';
import Faqs from '~/components/Faqs';
import Statis from '~/components/Statistique';




export default function pageConfo(){
return(
<div className='overflow-hidden'>
 <HeaderHat 
   bgColor="bg-[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"
   link="/#services "/>
<Header 
  textColor="text-black"
  logosrc="/Logo/LogoNoir.svg"
  burgerMenu='/Icons/menuBlack.svg'/>
<Confo/>
<Statis />
<ServiceSection />
<Faqs />
<ContactBanner />
<Footer />
</div>
)}