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
    <div className="relative rounded-lg bg-[#111F22] p-16 text-white">
      <div className="ml-20">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl text-green-500">
              ★
            </span>
          ))}
        </div>
        <p className="mb-4 mt-6 w-192 text-4xl">{testimonials[current].text}</p>
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
      <button
        onClick={prevTestimonial}
        aria-label="temoignage precedent"
        className="absolute left-4 top-1/2 ml-7 -translate-y-1/2 transform rounded-full border-[1px] border-white p-2 text-white shadow-lg"
      >
        ←
      </button>
      <button
        onClick={nextTestimonial}
        aria-label="prochain temoignage"
        className="absolute right-2 top-1/2 mr-8 -translate-y-1/2 transform rounded-full border-[1px] border-white p-2 text-white"
      >
        →
      </button>
    </div>
  );
};

export default Testimonials;
