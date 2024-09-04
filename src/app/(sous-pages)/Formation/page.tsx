
import HeaderHat from '~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Main from '~/app/(sous-pages)/Formation/main';
import OurStory from '~/components/OurStory';
import Faqs from '~/components/Faqs';
import ServiceSection from '~/components/ServiceSection';
import ContactBanner from '~/components/ContactBanner';


export default function FormationPage(){

  return(
<div className=' overflow-x-hidden'>
<HeaderHat 
   bgColor="bg-[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"/>
<Header 
  textColor="text-black"
  logosrc="/Logo/LogoNoir.svg"
  burgerMenu='/Icons/menuBlack.svg'/>
<Main />
<OurStory />
<Faqs />
<ServiceSection />
<ContactBanner />
<Footer />


</div>
  )
}