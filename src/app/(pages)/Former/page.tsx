import MainFormation from "~/app/(pages)/Former/main";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const Developpement = () => {
  return (
    <>
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/Former/#formation " />
      <Header
        textColor="text-black"
        logosrc="\Logo\LogoNoir.svg"
        burgerMenu="/Icons/menuBlack.svg"
        MainNavProps={{
          hoverClass: "hover:text-green-800",
          hoverBorder: "hover:border-green-800",
        }}
      />
      <section id="formation">
        <MainFormation />
      </section>
      <Footer />
    </>
  );
};

export default Developpement;
