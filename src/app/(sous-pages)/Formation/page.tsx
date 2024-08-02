
import HeaderHat from '~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Main from '~/app/(sous-pages)/Formation/main';

export default function ContactPage(){

  return(
<>
<HeaderHat 
   bgColor="bg-[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"/>
<Header 
  textColor="text-black"
  logosrc="/Logo/logo-jaune-noir.svg"/>
<Main />
<Footer />


</>
  )
}