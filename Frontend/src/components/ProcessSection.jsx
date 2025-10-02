
import React from "react";
import { processSteps } from "../Data.js";

const ProcessSection = () => {
  return (
    <section className="py-16 px-6 bg-white font-montserrat">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Our Proven Process</h2>
      </div>

      {/* Steps Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Number Circle */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0d8ab8] text-white text-lg font-bold mb-4">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;