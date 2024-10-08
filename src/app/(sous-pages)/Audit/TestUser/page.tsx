import MainTest from "~/app/(sous-pages)/Audit/TestUser/main";
import ContactBanner from "~/components/ContactBanner";
import Faqs from "~/components/Faqs";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";
import ServiceSection from "~/components/ServiceSection";
import Statis from "~/components/Statistique";

const PageTest = () => {
  return (
    <div className="overflow-hidden">
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/Audit/TestUser/#test " />
      <Header
        textColor="text-black"
        logosrc="/Logo/LogoNoir.svg"
        burgerMenu="/Icons/menuBlack.svg"
        MainNavProps={{
          hoverClass: "hover:text-green-800",
          hoverBorder: "hover:border-green-800",
        }}
      />
      <section id="test">
      <MainTest />
      </section>
      <Statis />
      <ServiceSection />
      <Faqs />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default PageTest;
