"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Abdulrahman Gaoba",
    role: "Software Engineer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem non nemo vel corrupti ipsum corporis a, ea eligendi dolor accusantium dignissimos facilis suscipit magnam tenetur reprehenderit praesentium temporibus aspernatur.",
    avatar: "/gaoba.jpg",
  },
  {
    name: "Eskander Alshaibani",
    role: "Full-stack Developer",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem non nemo vel corrupti ipsum corporis a, ea eligendi dolor accusantium dignissimos facilis suscipit magnam tenetur reprehenderit praesentium temporibus aspernatur.",
    avatar: "/gaoba.jpg",
  },
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-8 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 space-y-16 flex justify-center items-center flex-col">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <span className="border border-gray-200 dark:border-gray-800 px-3 py-0.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            Testimonials
          </span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            What they say about us
          </h1>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-2 md:gap-6 relative">
          <div className="absolute -left-10 md:left-0 inset-y-0 w-full md:w-3/5 z-0">
            <Image
              src="/testimonial_test.png"
              alt="woman writing"
              width={1800}
              height={1800}
              className="w-full h-full object-fill rounded-2xl shadow-xl "
            />
          </div>
          <div className="flex col-span-1" />
          <div className="w-full col-span-1 overflow-hidden md:col-span-2 lg:col-span-1 relative flex flex-col gap-8 z-[5] py-10 md:py-14">
            <div className="h-auto rounded-2xl shadow-lg shadow-gray-200/40 dark:shadow-none bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800">
              <div className="h-full">
                <div className="flex gap-5 md:gap-6">
                  <div className="flex min-w-max">
                    <Image
                      src={testimonials[currentTestimonial].avatar}
                      alt="Author Avatar"
                      width={500}
                      height={500}
                      className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-5">
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                        {testimonials[currentTestimonial].name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </span>
                    </div>
                    <div>
                      <p className="line-clamp-5 text-gray-700 dark:text-gray-300">
                        {testimonials[currentTestimonial].testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end mt-6">
              <div className="flex items-center gap-4 w-max p-1.5 rounded-full bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/30 border border-gray-200/40 dark:shadow-none dark:border-gray-800">
                <button
                  aria-label="prev"
                  onClick={prevTestimonial}
                  className="outline-none text-gray-700 transition hover:text-blue-600 dark:text-gray-300 p-2 md:p-2.5 hover:bg-blue-100 dark:hover:bg-blue-100 dark:hover:text-blue-600 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="flex w-max min-w-max items-center">
                  <div className="flex items-center gap-1 border-0 bg-transparent">
                    <span className="cursor-pointer w-4 h-2 rounded-full bg-blue-600 transition border-none" />
                    <span className="cursor-pointer w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-800 transition ease-linear border-none" />
                    <span className="cursor-pointer w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-800 transition ease-linear border-none" />
                  </div>
                </div>
                <button
                  aria-label="next"
                  onClick={nextTestimonial}
                  className="outline-none text-gray-700 transition hover:text-blue-600 dark:text-gray-300 p-2 md:p-2.5 hover:bg-blue-100 dark:hover:bg-blue-100 dark:hover:text-blue-600 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
