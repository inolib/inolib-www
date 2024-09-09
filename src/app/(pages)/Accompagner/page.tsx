import HeaderHat from "~/components/HeaderHat";
import MainAccompagnement from "~/app/(pages)/Accompagner/main";
import Header from'~/components/Header';
import Footer from'~/components/Footer_';

export default function PageAccoumpagner(){
  return(
    <>
    <HeaderHat 
      bgColor="bg-[#F5F9FA]"
      textColor="text-black"
      buttonVariant="buttonNoir"
      link="/#services "/>
      <Header 
      textColor="text-black"
      logosrc="/Logo/LogoNoir.svg"
      burgerMenu='/Icons/menuBlack.svg'/>
      <MainAccompagnement/>
      <Footer />
    
    
    </>
  )
}