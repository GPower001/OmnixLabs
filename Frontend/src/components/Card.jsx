import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="w-96 min-h-[320px] bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="text-5xl mb-6">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
