"use client";

import Image from "next/image";
import { useState } from "react";

import { testimonials } from "~/DATA/data";


const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative rounded-lg bg-[#111F22] p-8 text-white md:p-16">
      <div className="md:ml-20">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-lg text-[#E1FF01] md:text-xl">
              ★
            </span>
          ))}
        </div>
        <p className="mb-4 mt-6 text-2xl md:text-4xl">{testimonials[current].text}</p>
        <div className="flex items-center gap-4">
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

      {/* Navigation buttons */}
      <div className="mt-8 flex items-center justify-between md:absolute md:left-8 md:right-8 md:top-1/2 md:-translate-y-1/2 md:transform">
        <button
          onClick={prevTestimonial}
          aria-label="temoignage precedent"
          className="w-11 rounded-full border-[1px] border-white p-2 text-white shadow-lg md:ml-4"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="prochain temoignage"
          className="w-11 rounded-full border-[1px] border-white p-2 text-white shadow-lg md:mr-4"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
