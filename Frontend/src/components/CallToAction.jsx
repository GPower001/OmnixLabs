import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Build Your Digital Future?
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-8">
        Join the businesses that trust Omnix Labs to deliver digital powerhouses
        that drive real growth.
      </p>

      {/* Button */}
      <div className="flex justify-center">
        <a
          href="#contact"
          className="relative overflow-hidden px-6 py-3 text-white font-semibold rounded-full shadow-md 
          bg-gradient-to-r from-[#0d8ab8] to-[#0aa1d6] transition-all duration-300 
          before:absolute before:top-0 before:left-0 before:h-full before:w-0 
          before:bg-gradient-to-r before:from-[#0aa1d6] before:to-[#0d8ab8] 
          before:transition-all before:duration-500 before:z-0 hover:before:w-full"
        >
          <span className="relative z-10">Start Your Project Today</span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
