import MainAccompagnement from "~/app/(pages)/Accompagner/main";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const PageAccoumpagner = () => {
  return (
    <>
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/#services " />
      <Header textColor="text-black" logosrc="/Logo/LogoNoir.svg" burgerMenu="/Icons/menuBlack.svg" />
      <MainAccompagnement />
      <Footer />
    </>
  );
};

export default PageAccoumpagner;
