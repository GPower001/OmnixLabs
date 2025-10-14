// // src/components/TechnologySection.jsx
// import React from "react";
// import ServiceCard from "./ServiceCard";

// const TechnologySection = () => {
//   return (
//     <section className="bg-[#0b0b0c] text-white py-20 px-6 relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-purple-900/5 to-transparent pointer-events-none"></div>

//       {/* Header */}
//       <div className="relative text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
//           Technology
//         </h2>
//         <p className="text-gray-400 text-lg">Cutting-edge technical solutions</p>
//       </div>

//       {/* Cards */}
//       <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//         <ServiceCard
//           title="Website Development"
//           description="Responsive, fast, and scalable web applications"
//           features={[
//             "Custom Web Applications",
//             "E-commerce Platforms",
//             "CMS Development",
//             "Progressive Web Apps",
//           ]}
//           gradientFrom="from-indigo-500"
//           gradientTo="to-purple-600"
//           icon={
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <rect x="2" y="3" width="20" height="14" rx="2" />
//               <line x1="8" y1="21" x2="16" y2="21" />
//               <line x1="12" y1="17" x2="12" y2="21" />
//             </svg>
//           }
//         />

//         <ServiceCard
//           title="Mobile App Development"
//           description="Native and cross-platform mobile solutions"
//           features={[
//             "iOS Applications",
//             "Android Applications",
//             "React Native",
//             "Flutter Development",
//           ]}
//           gradientFrom="from-purple-500"
//           gradientTo="to-indigo-600"
//           icon={
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
//               <line x1="11" y1="18" x2="13" y2="18" />
//             </svg>
//           }
//         />
//       </div>
//     </section>
//   );
// };

// export default TechnologySection;

// src/components/TechnologySection.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import { Code2, Smartphone, Server } from "lucide-react"; // ✅ Added Server icon

const TechnologySection = () => {
  return (
    <section className="bg-base-200 text-black py-20 px-6 relative overflow-hidden">
      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          Technology
        </h2>
        <p className="text-gray-700 text-lg">
          Cutting-edge technical solutions
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title="Website Development"
          description="Responsive, fast, and scalable web applications"
          features={[
            "Custom Web Applications",
            "E-commerce Platforms",
            "CMS Development",
            "Progressive Web Apps",
          ]}
          gradientFrom="from-indigo-500"
          gradientTo="to-purple-600"
          icon={<Code2 className="w-7 h-7" />}
        />

        <ServiceCard
          title="Mobile App Development"
          description="Native and cross-platform mobile solutions"
          features={[
            "iOS Applications",
            "Android Applications",
            "React Native",
            "Flutter Development",
          ]}
          gradientFrom="from-purple-500"
          gradientTo="to-indigo-600"
          icon={<Smartphone className="w-7 h-7" />}
        />

        <ServiceCard
          title="Software Development"
          description="Enterprise software and custom solutions"
          features={[
            "Enterprise Software",
            "API Development",
            "Cloud Solutions",
            "System Integration",
          ]}
          gradientFrom="from-violet-500"
          gradientTo="to-blue-600"
          icon={<Server className="w-7 h-7" />}
        />
      </div>
    </section>
  );
};

export default TechnologySection;
