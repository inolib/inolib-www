"use client";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";
import BlogList from "~/components/BlogLists";
import Footer from "~/components/Footer";
import { Suspense } from "react";

export default function Blog() {
  return (
    <div className="overflow-hidden">
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/#services " />
      <Header textColor="text-black" logosrc="/Logo/LogoNoir.svg" burgerMenu="/Icons/menuBlack.svg" />

      <Suspense fallback={<div>Loading...</div>}>
        <BlogList />
      </Suspense>
      <Footer />
    </div>
  );
}
