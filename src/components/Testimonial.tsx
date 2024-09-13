"use client";

import Image from "next/image";
import { useState } from "react";

import { testimonials } from "~/DATA/data";

type TestimonialProps = {
  aligned : boolean
}
const Testimonials = (aligned : TestimonialProps) => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>


    {aligned ?
      (
        <div className="relative rounded-lg bg-[#111F22] px-6 pt-10 text-white flex items-center">
          <button
            onClick={prevTestimonial}
            aria-label="temoignage precedent"
            className=" left-4 w-11 top-1/2  -translate-y-1/2 transform rounded-full border-[1px] border-white p-2 text-white shadow-lg"
          >
            ←
          </button>

        <div className=" border-[1px] border-[#E1FF01]">
          <div className="mb-4 flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl" style={{ color: "#E1FF01" }}>
                ★
              </span>
            ))}
          </div>
          <p className="text-4xl">{testimonials[current].text}</p>
          <div className="flex items-center gap-4 pt-4">
            <Image
              src={testimonials[current].image}
              width={50}
              height={50}
              className="rounded-full"
              alt={`Photo of ${testimonials[current].name}`}
            />
            <div>
              <p className="font-bold">{testimonials[current].name}</p>
              <p className="text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </div>


  <button
    onClick={nextTestimonial}
    aria-label="prochain temoignage"
    className=" right-2 top-1/2 w-11 -translate-y-1/2 transform rounded-full border-[1px] border-white p-2 text-white"
  >
    →
  </button>

</div>
      ):(
    <div className="relative rounded-lg bg-[#111F22] px-6 pt-10 text-white flex flex-col">
            <div className=" border-[1px] border-[#E1FF01]">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: "#E1FF01" }}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-4xl">{testimonials[current].text}</p>
              <div className="flex items-center gap-4 pt-4">
                <Image
                  src={testimonials[current].image}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={`Photo of ${testimonials[current].name}`}
                />
                <div>
                  <p className="font-bold">{testimonials[current].name}</p>
                  <p className="text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
      <div className="flex justify-between mt-12">
         <button
        onClick={prevTestimonial}
        aria-label="temoignage precedent"
        className=" left-4 w-11 top-1/2  -translate-y-1/2 transform rounded-full border-[1px] border-white p-2 text-white shadow-lg"
      >
        ←
      </button>
      <button
        onClick={nextTestimonial}
        aria-label="prochain temoignage"
        className=" right-2 top-1/2 w-11 -translate-y-1/2 transform rounded-full border-[1px] border-white p-2 text-white"
      >
        →
      </button>
      </div>

    </div>) }
     </>
  );
};

export default Testimonials;
