import HeaderHat from'~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import MainForm from '~/app/(pages)/Former/main';




export default function Developpement(){
return(
<>
 <HeaderHat 
   bgColor="bg-[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"/>
<Header 
  textColor="text-black"
  logosrc="\Logo\LogoNoir.svg"
  burgerMenu='/Icons/menuBlack.svg'/>
<MainForm />
<Footer />
</>
)}