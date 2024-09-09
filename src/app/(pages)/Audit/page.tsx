import HeaderHat from "~/components/HeaderHat";
import MainAudit from "~/app/(pages)/Audit/mainAudit";
import Header from '~/components/Header';
import Footer from '~/components/Footer_';
import ContactBanner from "~/components/ContactBanner_";
import Faqs from "~/components/Faqs";
import SerciceSection from "~/components/ServiceSection_";

export default function Audit(){

  return(
    <div>

      <HeaderHat 
      bgColor="bg-[#F5F9FA]"
      textColor="text-black"
      buttonVariant="buttonNoir"
      link="/Audit/#audit"/>
      <Header 
      textColor="text-black"
      logosrc="/Logo/LogoNoir.svg"
      burgerMenu='/Icons/menuBlack.svg'/>
      <section id='audit'>
      <MainAudit />
      </section>
      <SerciceSection />
      <Faqs />
      <ContactBanner/>
      
      <Footer />
    </div>
  )
}