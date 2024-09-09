import HeaderHat from'~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer_';
import MainDeveloppement from '~/app/(pages)/Developpement/main';




export default function Developpement(){
return(
<>
 <HeaderHat 
   bgColor="bg-[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"
   link="/Developpement/#developpement"/>
<Header 
  textColor="text-black"
  logosrc="/Logo/LogoNoir.svg"
  burgerMenu='/Icons/menuBlack.svg'/>
  <section id='developpement'>
<MainDeveloppement />
</section>
<Footer />
</>
)}