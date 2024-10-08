import type { Metadata } from "next";

import News from "~/components/BlogSection";
import Main from "~/components/Main";
import Newsletter from "~/components/Newsletter";
import Services from "~/components/Services";
import SocialProof from "~/components/SocialProof";
import Testimonials from "~/components/Testimonial";
import Line from "~/components/UI/Line";

export const metadata: Metadata = {
  title: "Accueil | INOLIB",
  description: "",
};

const Page = () => {
  return (
    <div className="overflow-hidden bg-[#233f41]">
      <Main />

      <SocialProof />

      <Line />

      <div id="services">
        <Services />
      </div>

      <Testimonials />

      <div className="flex w-full justify-center bg-white" id="news" aria-hidden>
        <News />
      </div>

      <Newsletter />
    </div>
  );
};

export default Page;
