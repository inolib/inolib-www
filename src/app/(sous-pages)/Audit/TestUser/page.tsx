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
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/#services " />
      <Header textColor="text-black" logosrc="/Logo/LogoNoir.svg" burgerMenu="/Icons/menuBlack.svg" />
      <MainTest />
      <Statis />
      <ServiceSection />
      <Faqs />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default PageTest;
