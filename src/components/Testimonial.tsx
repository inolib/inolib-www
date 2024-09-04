"use client";
import { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '~/DATA/data';



export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-[#111F22] text-white p-16  rounded-lg relative ">
      <div className=" ml-20">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-green-500 text-xl">★</span>
          ))}
        </div>
        <p className="text-4xl  mb-4 mt-6 w-192">{testimonials[current].text}</p>
        <div className="flex items-center  gap-4">
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
        aria-label="Previous testimonial"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 ml-7 text-white border-[1px] border-white rounded-full p-2 shadow-lg"
      >
        ←
      </button>
      <button
        onClick={nextTestimonial}
        aria-label="Next testimonial"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 mr-8 text-white border-[1px] border-white rounded-full p-2"
      >
        →
      </button>
    </div>
  );
}
