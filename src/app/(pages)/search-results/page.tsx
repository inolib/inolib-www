import Header from '~/components/Header';
import HeaderHat from '~/components/HeaderHat';

import Footer from '~/components/Footer';
import {Suspense} from 'React'
import dynamic from 'next/dynamic'

const SearchResultsPage = dynamic(() => import('~/app/(pages)/search-results/main'), { ssr: false }); 
export default function PageSearchResults(){
  return( 
<div className='overflow-hidden'>

    <HeaderHat 
    bgColor="bg-[#F5F9FA]"
    textColor="text-black"
    buttonVariant="buttonNoir"/>
       <Header 
   textColor="text-black"
   logosrc="/Logo/LogoNoir.svg"
   burgerMenu='/Icons/menuBlack.svg'/>

   < SearchResultsPage/>
  
   <Footer />
   </div>
  )
}
