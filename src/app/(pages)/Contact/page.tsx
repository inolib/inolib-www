import MainContact from "~/app/(pages)/Contact/main";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const ContactPage = () => {
  return (
    <>
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/Contact/#contact" />
      <Header textColor="text-black" logosrc="/Logo/LogoNoir.svg" burgerMenu="/Icons/menuBlack.svg" />
      <section id="contact">
        <MainContact />
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
