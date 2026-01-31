// import React from "react";
// import { motion } from "framer-motion";
// import TechnologySection from "../components/TechnologySection";
// import CreativeMediaSection from "../components/CreativeMediaSection";
// import MarketingSection from "../components/MarketingSection";
// import ProcessSection from "../components/ProcessSection";
// import CallToAction from "../components/CallToAction";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 1.2, ease: "easeOut" },
//   },
// };

// function Services() {
//   return (
//     <div className="bg-base-100">
//       {/* ===== Header Section ===== */}
//       <motion.section
//         className="bg-base-100 text-center py-24"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//       >
//         <div className="container mx-auto px-6">
//           <motion.h1
//             className="text-5xl font-bold mb-4 text-gray-900"
//             variants={fadeInUp}
//           >
//             Services{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Omnix Labs
//             </span>
//           </motion.h1>
//           <motion.p
//             className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
//             variants={fadeInUp}
//           >
//             We unite technology, creativity, and strategy under one roof to
//             deliver end-to-end solutions that empower businesses to innovate,
//             scale, and lead globally.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* ===== Technology Section ===== */}
//       <motion.section
//         className="bg-gray-50"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <TechnologySection />
//       </motion.section>

//       {/* ===== Creative Media Section ===== */}
//       <motion.section
//         className="bg-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <CreativeMediaSection />
//       </motion.section>

//       {/* ===== Marketing Section ===== */}
//       <motion.section
//         className="bg-gray-50"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <MarketingSection />
//       </motion.section>

//       {/* ===== Process Section ===== */}
//       <motion.section
//         className="bg-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <ProcessSection />
//       </motion.section>

//       {/* ===== Spacer ===== */}
//       <div className="h-20 bg-gray-50"></div>

//       {/* ===== Call To Action Section ===== */}
//       <motion.section
//         className="bg-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <CallToAction />
//       </motion.section>
//     </div>
//   );
// }

// export default Services;



import React from "react";
import { motion } from "framer-motion";
import TechnologySection from "../components/TechnologySection";
import CreativeMediaSection from "../components/CreativeMediaSection";
import MarketingSection from "../components/MarketingSection";
import ProcessSection from "../components/ProcessSection";
import CallToAction from "../components/CallToAction";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

function Services() {
  return (
    <div className="bg-base-100">
      {/* ===== Header Section ===== */}
      <motion.section
        className="bg-base-100 text-center py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-4 text-base-content"
            variants={fadeInUp}
          >
            Services{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Omnix Labs
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We unite technology, creativity, and strategy under one roof to
            deliver end-to-end solutions that empower businesses to innovate,
            scale, and lead globally.
          </motion.p>
        </div>
      </motion.section>

      {/* ===== Technology Section ===== */}
      <motion.section
        className="bg-base-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <TechnologySection />
      </motion.section>

      {/* ===== Creative Media Section ===== */}
      <motion.section
        className="bg-base-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <CreativeMediaSection />
      </motion.section>

      {/* ===== Marketing Section ===== */}
      <motion.section
        className="bg-base-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <MarketingSection />
      </motion.section>

      {/* ===== Process Section ===== */}
      <motion.section
        className="bg-base-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <ProcessSection />
      </motion.section>

      {/* ===== Spacer ===== */}
      <div className="h-20 bg-base-200"></div>

      {/* ===== Call To Action Section ===== */}
      <motion.section
        className="bg-base-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <CallToAction />
      </motion.section>
    </div>
  );
}

export default Services;