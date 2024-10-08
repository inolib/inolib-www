"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
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
    <div className="flex justify-center bg-primary">
      <div className="relative w-full rounded-lg p-8 text-white md:p-16 2xl:w-[1440px]">
        <div className="text-justify md:mx-20">
          <h3 className="sr-only">Nos clients parlent de nous</h3>

          <p className="mb-4 mt-6 text-2xl md:text-4xl">{testimonials[current].text}</p>

          <div>
            <p className="font-bold">{testimonials[current].name}</p>
            <p className="text-sm">{testimonials[current].role}</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 flex items-center justify-between md:absolute md:inset-x-8 md:top-1/3 md:-translate-y-1/2">
          <button
            onClick={prevTestimonial}
            aria-label="Témoignage précédent"
            className="w-11 rounded-full border-1 border-white p-2 text-white shadow-lg md:ml-4"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Témoignage suivant"
            className="w-11 rounded-full border-1 border-white p-2 text-white shadow-lg md:mr-4"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
