import HeaderHat from'~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer_';
import MainTest from '~/app/(sous-pages)/Audit/TestUser/main';
import ServiceSection from '~/components/ServiceSection_';
import ContactBanner from '~/components/ContactBanner_';
import Faqs from '~/components/Faqs';
import Statis from '~/components/Statistique_';




export default function pageTest(){
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
<MainTest/>
<Statis />
<ServiceSection />
<Faqs />
<ContactBanner />
<Footer />
</div>
)}