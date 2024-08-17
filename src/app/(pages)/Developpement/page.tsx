import HeaderHat from'~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import MainDeveloppement from '~/app/(pages)/Developpement/main';




export default function Developpement(){
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
<MainDeveloppement />
<Footer />
</>
)}