import MainAudit from "~/app/(pages)/Audit/mainAudit";
import ContactBanner from "~/components/ContactBanner";
import Faqs from "~/components/Faqs";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";
import SerciceSection from "~/components/ServiceSection";

const Audit = () => {
  return (
    <div>
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/Audit/#audit" />
      <Header
        textColor="text-black"
        logosrc="/Logo/LogoNoir.svg"
        burgerMenu="/Icons/menuBlack.svg"
        MainNavProps={{
          hoverClass: "hover:text-green-800",
          hoverBorder: "hover:border-green-800",
        }}
      />
      <section id="audit">
        <MainAudit />
      </section>
      <SerciceSection />
      <Faqs />
      <ContactBanner />

      <Footer />
    </div>
  );
};

export default Audit;
