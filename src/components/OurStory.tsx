import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="container bg-[#FAFAFA] px-4 py-16 xxs:min-w-full xs:min-w-full lg:px-0">
      <div className="mx-4 my-10 grid grid-cols-1 gap-8 md:mx-10 md:grid-cols-2">
        <article className="prose max-w-none md:ml-10 md:max-w-lg">
          <header>
            <p className="pb-2 font-medium text-[#3E6D77]">Our story</p>
            <h2 className="pb-2 text-3xl font-bold text-gray-900">We’re just getting started</h2>
          </header>
          <p className="text-md text-[#525252]">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
            vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
          </p>
          <p className="text-md text-[#525252]">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
            donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </p>
        </article>
        <article className="prose max-w-none md:mr-10 md:max-w-lg">
          <header>
            <p className="pb-2 font-medium text-[#3E6D77]">Our story</p>
            <h2 className="pb-2 text-3xl font-bold text-gray-900">We’re just getting started</h2>
          </header>
          <p className="text-md text-[#525252]">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat
            dolor enim. Ornare id morbi eget ipsum. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
            aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
          </p>
        </article>
      </div>
    </section>
  );
};

export default OurStory;
