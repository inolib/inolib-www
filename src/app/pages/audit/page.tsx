import HeaderHat from "~/components/HeaderHat";
import MainAudit from "~/app/pages/audit/mainAudit";
import Header from '~/components/Header';
import Footer from '~/components/footer';
import ContactBanner from "~/components/contactBanner";
import Faqs from "~/components/Faqs";
import SerciceSection from "~/components/serviceSection";

export default function Audit(){

  return(
    <div>

      <HeaderHat 
      bgColor="bg-[#F5F9FA]"
      textColor="text-black"
      buttonVariant="buttonNoir"/>
      <Header 
      textColor="text-black"
      logosrc="/Logo/logo-jaune-noir.svg"/>
      <MainAudit />
      <SerciceSection />
      <Faqs />
      <ContactBanner/>
      
      <Footer />
    </div>
  )
}