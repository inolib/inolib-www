"use client";

import { Suspense } from "react";

import BlogList from "~/components/BlogLists";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeaderHat from "~/components/HeaderHat";

const Blog = () => {
  return (
    <div className="overflow-hidden">
      <HeaderHat bgColor="bg-[#F5F9FA]" textColor="text-black" buttonVariant="buttonNoir" link="/#services " />
      <Header
        textColor="text-black"
        logosrc="/Logo/LogoNoir.svg"
        burgerMenu="/Icons/menuBlack.svg"
        MainNavProps={{
          hoverClass: "hover:text-green-800",
          hoverBorder: "hover:border-green-800",
        }}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <BlogList />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Blog;
