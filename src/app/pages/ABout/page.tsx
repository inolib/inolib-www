import Intro from '~/app/pages/ABout/intro';
import ValuesSection from '~/app/pages/ABout/valeur';
import TeamSection from '~/app/pages/ABout/team';
import HeaderHat from '~/components/HeaderHat';
import Header from '~/components/Header';
import Footer from '~/components/footer';


export default function ABout(){
  return (
    <div className='overflow-hidden'>
       <HeaderHat 
   bgColor="bg--[#F5F9FA]"
   textColor="text-black"
   buttonVariant="buttonNoir"/>
      <Header 
  textColor="text-black"
  logosrc="/Logo/logo-jaune-noir.svg"/>
      <Intro />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </div>
  )
}