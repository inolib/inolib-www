import Header from '../components/Header';
import HearderHat from '../components/HeaderHat';
import Main from '~/components/main';
import Footer from'~/components/Footer';
import Services from '~/components/Service';
import SocialProof from '~/components/SocialProof';
import Testimonials from '~/components/Testimonial';
import Newsletter from '~/components/Newsletter';
import News from '~/components/BlogSection';
import Faqs from '~/components/Faqs';
import ServiceSection from '~/components/ServiceSection';
import ContactBanner from '~/components/ContactBanner';
import OurStory from '~/components/OurStory';

export default function Home() {
  return (
    <div className=" overflow-hidden bg-[#233f41]">
      <HearderHat 
      bgColor="bg-[#111F22]"
      textColor='text-white' 
      buttonVariant='ButtonJaune'  
       />
      <Header 
      textColor='text-white'
      logosrc={'/Logo/logo_jaune_blanc.svg'}
      burgerMenu='/Icons/Navmenu.svg'
      />
      
      <Main />
      <OurStory />
      <ContactBanner />
      <ServiceSection />
      <Faqs />
      <SocialProof />
      <Services />
      <Testimonials />
      <News newsItems={[]} />
      <Newsletter />
      <Footer/> 
      </div>
  );
}
