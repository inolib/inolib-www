
import HeaderHat from '~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/footer';
import MainContact from '~/app/pages/contact/main';

export default function ContactPage(){

  return(
<>
<HeaderHat 
   bgColor="bg-blue-100"
   textColor="text-black"
   buttonVariant="buttonNoir"/>
<Header 
  textColor="text-black"
  logosrc="/Logo/logo-jaune-noir.svg"/>
<MainContact />
<Footer />


</>
  )
}