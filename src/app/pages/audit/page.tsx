import HeaderHat from "~/components/HeaderHat";
import MainAudit from "~/app/pages/audit/mainAudit";
import Header from '~/components/Header';
import Footer from '~/components/footer';

export default function Audit(){

  return(
    <div>

      <HeaderHat 
      bgColor="bg-blue-100"
      textColor="text-black"
      buttonVariant="buttonNoir"/>
      <Header 
      textColor="text-black"
      logosrc="/Logo/logo-jaune-noir.svg"/>
      <MainAudit />
      
      <Footer />
    </div>
  )
}