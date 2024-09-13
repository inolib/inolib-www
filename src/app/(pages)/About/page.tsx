import Intro from "~/app/(pages)/About/intro";
import TeamSection from "~/app/(pages)/About/team";
import ValuesSection from "~/app/(pages)/About/value";
import { CarrerSection } from "~/components/CarrerSection";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const About = () => {
  return (
    <div className="overflow-hidden">
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/#services " />
      <Header
        textColor="text-black"
        logosrc="/Logo/LogoNoir.svg"
        burgerMenu="/Icons/menuBlack.svg"
        MainNavProps={{
          hoverClass: "hover:text-green-800",
          hoverBorder: "hover:border-green-800",
        }}
      />
      <Intro />
      <section id="team">
        <TeamSection />
      </section>
      <ValuesSection />
      <section id="Carrer">
        <CarrerSection />
      </section>
      <Footer />
    </div>
  );
};

export default About;
