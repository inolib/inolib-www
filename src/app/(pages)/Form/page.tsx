import MainForm from "~/app/(pages)/Form/main";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const FormPage = () => {
  return (
    <>
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/Form/#form " />
      <Header
        textColor="text-black"
        logosrc="\Logo\LogoNoir.svg"
        burgerMenu="/Icons/menuBlack.svg"
        MainNavProps={{
          hoverClass: "hover:text-green-800",
          hoverBorder: "hover:border-green-800",
        }}
      />
      <section id="form">
        <MainForm />
      </section>
      <Footer />
    </>
  );
};

export default FormPage;
