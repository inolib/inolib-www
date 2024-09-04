import HeaderHat from "~/components/HeaderHat";
import MainAudit from "~/app/(pages)/Audit/mainAudit";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import ContactBanner from "~/components/ContactBanner";
import Faqs from "~/components/Faqs";
import SerciceSection from "~/components/ServiceSection";

export default function Audit(){

  return(
    <div>

      <HeaderHat 
      bgColor="bg-[#F5F9FA]"
      textColor="text-black"
      buttonVariant="buttonNoir"/>
      <Header 
      textColor="text-black"
      logosrc="/Logo/LogoNoir.svg"
      burgerMenu='/Icons/menuBlack.svg'/>
      <MainAudit />
      <SerciceSection />
      <Faqs />
      <ContactBanner/>
      
      <Footer />
    </div>
  )
}