import HeaderHat from "~/components/HeaderHat";
import MainAccompagnement from "~/app/(pages)/Accompagner/main";
import Header from'~/components/Header';
import Footer from'~/components/Footer';

export default function PageAccoumpagner(){
  return(
    <>
    <HeaderHat 
      bgColor="bg-[#F5F9FA]"
      textColor="text-black"
      buttonVariant="buttonNoir"/>
      <Header 
      textColor="text-black"
      logosrc="/Logo/logo-jaune-noir.svg"
      burgerMenu='/Icons/menuBlack.svg'/>
      <MainAccompagnement/>
      <Footer />
    
    
    </>
  )
}