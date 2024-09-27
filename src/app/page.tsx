import Head from "next/head";
import News from "~/components/BlogSection";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HearderHat from "~/components/HeaderHat";
import Main from "~/components/Main";
import Newsletter from "~/components/Newsletter";
import Services from "~/components/Service";
import SocialProof from "~/components/SocialProof";
import Testimonials from "~/components/Testimonial";
import Line from "~/components/UI/Line";
import type { Metadata } from "next";
import BurgerMenu from "~/components/UI/BurgerMenu";

export const metadata: Metadata = {
  title: "Inolib de l'idée a la realité digital, pour un numérique accessible",
  description: "Découvrez les services, témoignages et actualités de notre entreprise.",



};
const Home = () => {
  return (
    <div className="overflow-hidden bg-[#233f41]">


      <HearderHat bgColor="bg-[#111F22]" textColor="text-white" buttonVariant="ButtonJaune" link="/#services " />
      <Header
        textColor="text-white"
        logosrc={"/Logo/LogoJaune.svg"}
        burgerMenu="/Icons/Navmenu.svg"
        MainNavProps={{
          hoverClass: "hover:text-[#e6ff58]",
          hoverBorder: "hover:border-[#e6ff58]",
        }}
      />



      <Main />
      <SocialProof />
      <Line />

      <section id="services">
        <Services />
      </section>
      <Testimonials />
      <section id="news" className="flex w-full justify-center bg-white">
        <News />
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
