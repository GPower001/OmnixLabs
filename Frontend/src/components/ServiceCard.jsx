

import React from "react";

const ServiceCard = ({
  title,
  description,
  features,
  icon,
  gradientFrom = "from-indigo-500",
  gradientTo = "to-purple-600",
}) => {
  return (
    <div className="group bg-base-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      {/* ===== ICON + HEADER ===== */}
      <div className="flex items-center space-x-5 mb-6">
        <div
          className={`p-4 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} group-hover:scale-110 transition-transform duration-500 shadow-lg`}
        >
          <div className="w-10 h-10 flex items-center justify-center text-white">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-base-content dark:text-black leading-snug">
            {title}
          </h3>
          <p className="text-base-content dark:text-black mt-1 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* ===== FEATURES LIST ===== */}
      <ul className="space-y-3 mb-8 text-base-content dark:text-black">
        {features.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 text-[15px] transition-colors duration-300"
          >
            <svg
              className="h-5 w-5 text-indigo-500 dark:text-purple-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>

      {/* ===== BUTTON ===== */}
      <button
        className={`w-full md:w-auto bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-indigo-500/40 hover:opacity-95 transition-all duration-300`}
      >
        Learn More →
      </button>
    </div>
  );
};

export default ServiceCard;
