import Header from '../components/Header';
import HearderHat from '../components/HeaderHat';
import Main from '~/components/main';
import Footer from'~/components/footer';
import Services from '~/components/service';
import SocialProof from '~/components/SocialProof';
import Testimonials from '~/components/Testimonials';
import Newsletter from '~/components/newsletter';
import News from '~/components/blogSection';
import Faqs from '~/components/Faqs';
import ServiceSection from '~/components/serviceSection';
import ContactBanner from '~/components/contactBanner';

export default function Home() {
  return (
    <div className=" overflow-hidden bg-[#233f41]">
      <HearderHat 
      bgColor="bg-slate-800"
      textColor='text-white' 
      buttonVariant='ButtonJaune'  
       />
      <Header 
      textColor='text-white'
      logosrc={'/Logo/logo_jaune_blanc.svg'}
      />
      
      <Main />
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
