import MainDeveloppement from "~/app/(pages)/Developpement/main";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const Developpement = () => {
  return (
    <>
      <HeaderHat
        bgColor="bg-[#F5F9FA]"
        textColor="text-black"
        buttonVariant="buttonNoir"
        link="/Developpement/#developpement"
      />
      <Header textColor="text-black" logosrc="/Logo/LogoNoir.svg" burgerMenu="/Icons/menuBlack.svg" />
      <section id="developpement">
        <MainDeveloppement />
      </section>
      <Footer />
    </>
  );
};

export default Developpement;
