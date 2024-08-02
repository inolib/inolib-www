import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section className="container  py-16 px-4 lg:px-0 bg-[#FAFAFA]">
      <div className="grid md:grid-cols-2 gap-8 mx-10 my-10">
        <article className="prose ml-10 max-w-lg">
          <header>
            <p className="text-[#3E6D77] font-medium pb-2">Our story</p>
            <h2 className="text-3xl font-bold text-gray-900 pb-2">We’re just getting started</h2>
          </header>
          <p className='text-md text-[#525252]'>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
          </p>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </p>
        </article>
        <article className="prose mr-10">
          <header>
            <p className="text-[#3E6D77] font-medium pb-2">Our story</p>
            <h2 className="text-3xl font-bold text-gray-900 pb-2">We’re just getting started</h2>
          </header>
          <p className='text-md text-[#525252]'>
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
          </p>
        </article>
      </div>
    </section>
  );
};

export default OurStory;
