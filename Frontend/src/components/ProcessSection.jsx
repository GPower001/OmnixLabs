import React from "react";
import { processSteps } from "../Data.js";

const ProcessSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-base-100 font-montserrat">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">
          Our Proven Process
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-cyan-400 text-white text-lg sm:text-xl font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-base-content text-sm sm:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;