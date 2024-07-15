import Header from '../components/Header';
import HearderHat from '../components/HeaderHat';
import Main from '~/components/main';
import Footer from'~/components/footer';
import Services from '~/components/service';

export default function Home() {
  return (
    <div className="bg-[#1f5a67]">
      <HearderHat />
      <Header />
      <Main />
      <Services />
      <Footer/> 
      </div>
  );
}
