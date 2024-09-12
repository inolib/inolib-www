import Main from "~/app/(sous-pages)/Formation/main";
import ContactBanner from "~/components/ContactBanner";
import Faqs from "~/components/Faqs";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";
import OurStory from "~/components/OurStory";
import ServiceSection from "~/components/ServiceSection";
import Statistique from "~/components/Statistique";

const FormationPage = () => {
  return (
    <div className="overflow-x-hidden">
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
      <Main />
      <OurStory />
      <Statistique />
      <ServiceSection />
      <Faqs />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default FormationPage;
