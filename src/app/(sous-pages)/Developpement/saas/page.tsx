import Confo from "~/app/(sous-pages)/Audit/Conform/main";
import ContactBanner from "~/components/ContactBanner";
import Faqs from "~/components/Faqs";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";
import ServiceSection from "~/components/ServiceSection";
import Statis from "~/components/Statistique";

const PageConfo = () => {
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
      <Confo />
      <Statis />
      <ServiceSection />
      <Faqs />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default PageConfo;
