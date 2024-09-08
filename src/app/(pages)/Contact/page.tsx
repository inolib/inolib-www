
import HeaderHat from '~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import MainContact from '~/app/(pages)/Contact/main';

export default function ContactPage(){

  return(
<>
<HeaderHat 
   bgColor="bg-[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"
   link='/Contact/#contact'/>
<Header 
  textColor="text-black"
  logosrc="/Logo/LogoNoir.svg"
  burgerMenu='/Icons/menuBlack.svg'/>
  <section id='contact'>
<MainContact />
</section>
<Footer />


</>
  )
}