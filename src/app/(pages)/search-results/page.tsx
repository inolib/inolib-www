import dynamic from "next/dynamic";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const SearchResultsPage = dynamic(() => import("~/app/(pages)/search-results/main"), { ssr: false });

const PageSearchResults = () => {
  return (
    <div className="overflow-hidden">
      <HeaderHat
        bgColor="bg-[#F5F9FA]"
        textColor="text-black"
        buttonVariant="buttonNoir"
        link="/search-results/#result "
      />
      <Header textColor="text-black" logosrc="/Logo/LogoNoir.svg" burgerMenu="/Icons/menuBlack.svg" />
      <section id="result">
        <SearchResultsPage />
      </section>

      <Footer />
    </div>
  );
};

export default PageSearchResults;
