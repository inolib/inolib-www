import Header from '~/components/Header';
import HeaderHat from '~/components/HeaderHat';
import  SearchResultsPage from '~/app/(pages)/search-results/main';
import Footer from '~/components/Footer';

export default function PageSearchResults(){
  return( 
<div className='overflow-hidden'>
    <HeaderHat 
    bgColor="bg-[#F5F9FA]"
    textColor="text-black"
    buttonVariant="buttonNoir"/>
       <Header 
   textColor="text-black"
   logosrc="/Logo/logo-jaune-noir.svg"
   burgerMenu='/Icons/menuBlack.svg'/>
   < SearchResultsPage/>
   <Footer />
   </div>
  )
}
