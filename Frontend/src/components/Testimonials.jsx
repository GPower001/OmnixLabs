import React from "react";
import { testimonials } from "../Data.js";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-base-100">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-base-200 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <p className="text-base-content italic mb-4 text-sm sm:text-base">{t.text}</p>
            <div>
              <h4 className="font-bold text-base-content text-base sm:text-lg">{t.name}</h4>
              <p className="text-base-content text-xs sm:text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
