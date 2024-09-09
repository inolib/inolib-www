import Header from '../components/Header';
import HearderHat from '../components/HeaderHat';
import Main from '~/components/Main_';
import Footer from'~/components/Footer_';
import Services from '~/components/Service_';
import SocialProof from '~/components/SocialProof';
import Testimonials from '~/components/Testimonial';
import Newsletter from '~/components/Newsletter_';
import News from '~/components/BlogSection_';
import Line from "~/components/UI/Line";

export default function Home() {
  return (
    <div className=" overflow-hidden bg-[#233f41]">
      <HearderHat 
      bgColor="bg-[#111F22]"
      textColor='text-white' 
      buttonVariant='ButtonJaune' 
      link="/#services " 
       />
      <Header 
      textColor='text-white'
      logosrc={'/Logo/LogoJaune.svg'}
      burgerMenu='/Icons/Navmenu.svg'
      />
      
      <Main />
      <SocialProof />
      <Line />
      
     <section id='services'>
      <Services />
      </section>
      <Testimonials />
      <News  />
      <Newsletter />
      <Footer/> 
      </div>
  );
}
