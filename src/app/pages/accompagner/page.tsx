import HeaderHat from "~/components/HeaderHat";
import MainAccompagnement from "~/app/pages/accompagner/main";
import Header from'~/components/Header';
import Footer from'~/components/footer';

export default function PageAccoumpagner(){
  return(
    <>
    <HeaderHat 
      bgColor="bg-[#F5F9FA]"
      textColor="text-black"
      buttonVariant="buttonNoir"/>
      <Header 
      textColor="text-black"
      logosrc="/Logo/logo-jaune-noir.svg"/>
      <MainAccompagnement/>
      <Footer />
    
    
    </>
  )
}