// // src/components/ServiceCard.jsx
// import React from "react";
// import Lottie from "lottie-react";

// const ServiceCard = ({
//   title,
//   description,
//   features,
//   animationData, // 👈 now using Lottie JSON instead of SVG
//   gradientFrom = "from-indigo-500",
//   gradientTo = "to-purple-600",
// }) => {
//   return (
//     <div className="group bg-gradient-to-br from-[#141414] to-[#0e0e0f] border border-gray-800 rounded-2xl p-8 shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(88,80,236,0.3)]">
      
//       {/* ===== ICON + HEADER ===== */}
//       <div className="flex items-center space-x-4 mb-5">
//         <div
//           className={`p-3 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(88,80,236,0.4)]`}
//         >
//           {/* Animated Icon */}
//           <Lottie
//             animationData={animationData}
//             loop={true}
//             autoplay={true}
//             className="w-12 h-12"
//           />
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">{title}</h3>
//           <p className="text-gray-400 text-sm">{description}</p>
//         </div>
//       </div>

//       {/* ===== FEATURES LIST ===== */}
//       <ul className="space-y-3 mb-8 text-gray-300">
//         {features.map((item, idx) => (
//           <li key={idx} className="flex items-center gap-2">
//             <svg
//               className="h-5 w-5 text-indigo-400 flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 13l4 4L19 7" />
//             </svg>
//             {item}
//           </li>
//         ))}
//       </ul>

//       {/* ===== BUTTON ===== */}
//       <button className="btn btn-outline border-gray-700 text-white hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 w-full md:w-auto">
//         Learn More →
//       </button>
//     </div>
//   );
// };

// export default ServiceCard;


// src/components/ServiceCard.jsx
// import React from "react";

// const ServiceCard = ({
//   title,
//   description,
//   features,
//   icon, // 👈 now using normal React or SVG icon
//   gradientFrom = "from-indigo-500",
//   gradientTo = "to-purple-600",
// }) => {
//   return (
//     <div className="group bg-gradient-to-br from-[#141414] to-[#0e0e0f] border border-gray-800 rounded-2xl p-8 shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(88,80,236,0.3)]">
      
//       {/* ===== ICON + HEADER ===== */}
//       <div className="flex items-center space-x-4 mb-5">
//         <div
//           className={`p-3 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(88,80,236,0.4)]`}
//         >
//           <div className="w-12 h-12 flex items-center justify-center text-white">
//             {icon}
//           </div>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">{title}</h3>
//           <p className="text-gray-400 text-sm">{description}</p>
//         </div>
//       </div>

//       {/* ===== FEATURES LIST ===== */}
//       <ul className="space-y-3 mb-8 text-gray-300">
//         {features.map((item, idx) => (
//           <li key={idx} className="flex items-center gap-2">
//             <svg
//               className="h-5 w-5 text-indigo-400 flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 13l4 4L19 7" />
//             </svg>
//             {item}
//           </li>
//         ))}
//       </ul>

//       {/* ===== BUTTON ===== */}
//       <button className="btn btn-outline border-gray-700 text-white hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 w-full md:w-auto">
//         Learn More →
//       </button>
//     </div>
//   );
// };

// export default ServiceCard;


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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-black leading-snug">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-black mt-1 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* ===== FEATURES LIST ===== */}
      <ul className="space-y-3 mb-8 text-gray-800 dark:text-black">
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
