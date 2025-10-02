import React from "react";
import { testimonials } from "../Data.js";


const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Quote */}
            <p className="text-gray-700 italic mb-4">{t.text}</p>

            {/* Client Info */}
            <div>
              <h4 className="font-bold text-gray-900">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;