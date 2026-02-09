// import React from "react";
// import { motion } from "framer-motion";
// import ValuesSection from "../components/ValuesSection";
// import TeamSection from "../components/TeamSection";

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
//   visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
// };

// const About = () => {
//   return (
//     <div id="about" className="page overflow-hidden bg-base-100">

//       {/* ===== Header Section ===== */}
//       <motion.section
//         className="bg-base-100 text-center py-20 md:py-28 lg:py-32"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//       >
//         <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-6xl">
//           <motion.h1
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-base-content leading-tight"
//             variants={fadeInUp}
//           >
//             About{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Omnix Labs
//             </span>
//           </motion.h1>

//           <motion.p
//             className="text-base sm:text-lg lg:text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed"
//             variants={fadeInUp}
//           >
//             We&apos;re a team of passionate innovators dedicated to transforming
//             businesses through cutting-edge technology and creative excellence.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* ===== About Section ===== */}
//       <motion.section
//         className="py-20 md:py-28 bg-base-200"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-7xl">
//           <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

//             {/* Text Section */}
//             <motion.div
//               className="flex-1 space-y-6 text-base sm:text-lg leading-relaxed text-base-content"
//               variants={fadeInUp}
//               transition={{ delay: 0.2 }}
//             >
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
//                 Innovation Hub for Global Impact
//               </h2>

//               <p className="text-base-content/90">
//                 Omnix Labs is a technology and media innovation company that integrates
//                 software development, product design, digital marketing, and data
//                 intelligence to create powerful solutions.
//               </p>

//               <p className="text-base-content/90">
//                 We focus on building scalable, human-centered, and future-proof digital
//                 ecosystems, empowering businesses in Nigeria and across the globe to
//                 thrive in a rapidly evolving digital economy.
//               </p>

//               <p className="text-base-content/90">
//                 Our goal is to establish ourselves as the world's leading innovation hub,
//                 where technology, creativity, and strategy come together to empower
//                 individuals and businesses on a global scale.
//               </p>
//             </motion.div>

//             {/* Values Section */}
//             <motion.div
//               className="w-full lg:w-[45%]"
//               variants={fadeInUp}
//               transition={{ delay: 0.4 }}
//             >
//               <ValuesSection />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* ===== Team Section ===== */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <TeamSection />
//       </motion.div>

//       {/* ===== Vision & Mission ===== */}
//       <motion.section
//         className="py-20 md:py-28 bg-base-200"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-7xl text-center">
//           <motion.h2
//             className="text-3xl sm:text-4xl font-bold mb-12 text-primary"
//             variants={fadeInUp}
//           >
//             Our Vision & Mission
//           </motion.h2>

//           <motion.div
//             className="grid md:grid-cols-2 gap-10 lg:gap-14"
//             variants={fadeIn}
//             transition={{ staggerChildren: 0.3 }}
//           >
//             {/* Mission */}
//             <motion.div
//               className="card bg-base-100 border border-base-300 shadow-lg p-8 rounded-2xl hover:shadow-xl transition-shadow"
//               variants={fadeInUp}
//             >
//               <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
//                 🎯 Mission
//               </h3>
//               <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
//                 Our goal is to establish ourselves as the world's leading innovation hub,
//                 where technology, creativity, and strategy come together to empower
//                 individuals and businesses on a global scale.
//               </p>
//             </motion.div>

//             {/* Vision */}
//             <motion.div
//               className="card bg-base-100 border border-base-300 shadow-lg p-8 rounded-2xl hover:shadow-xl transition-shadow"
//               variants={fadeInUp}
//               transition={{ delay: 0.3 }}
//             >
//               <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
//                 🌟 Vision
//               </h3>
//               <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
//                 To redefine the digital future by creating technology-driven ecosystems
//                 that connect people, transform industries, and inspire sustainable global
//                 growth.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";

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
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const About = () => {
  return (
    <div id="about" className="page overflow-hidden bg-base-100">

      {/* ===== Header Section ===== */}
      <motion.section
        className="bg-base-100 text-center py-20 md:py-28 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-6xl">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-base-content leading-tight"
            variants={fadeInUp}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
              Omnix Labs
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We&apos;re a team of passionate innovators dedicated to transforming
            businesses through cutting-edge technology and creative excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* ===== About Section ===== */}
      <motion.section
        className="py-20 md:py-28 bg-base-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* Text Section */}
            <motion.div
              className="flex-1 space-y-6 text-base sm:text-lg leading-relaxed text-base-content"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Innovation Hub for Global Impact
              </h2>

              <p className="text-base-content/90">
                Omnix Labs is a technology and media innovation company that integrates
                software development, product design, digital marketing, and data
                intelligence to create powerful solutions.
              </p>

              <p className="text-base-content/90">
                We focus on building scalable, human-centered, and future-proof digital
                ecosystems, empowering businesses in Nigeria and across the globe to
                thrive in a rapidly evolving digital economy.
              </p>

              <p className="text-base-content/90">
                Our goal is to establish ourselves as the world's leading innovation hub,
                where technology, creativity, and strategy come together to empower
                individuals and businesses on a global scale.
              </p>
            </motion.div>

            {/* Values Section */}
            <motion.div
              className="w-full lg:w-[45%]"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <ValuesSection />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== Team Section ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <TeamSection />
      </motion.div>

      {/* ===== Vision & Mission ===== */}
      <motion.section
        className="py-20 md:py-28 bg-base-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-7xl text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-primary"
            variants={fadeInUp}
          >
            Our Vision & Mission
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10 lg:gap-14"
            variants={fadeIn}
            transition={{ staggerChildren: 0.3 }}
          >
            {/* Mission */}
            <motion.div
              className="card bg-base-100 border border-base-300 shadow-lg p-8 rounded-2xl hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
                🎯 Mission
              </h3>
              <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
                Our goal is to establish ourselves as the world's leading innovation hub,
                where technology, creativity, and strategy come together to empower
                individuals and businesses on a global scale.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="card bg-base-100 border border-base-300 shadow-lg p-8 rounded-2xl hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
                🌟 Vision
              </h3>
              <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
                To redefine the digital future by creating technology-driven ecosystems
                that connect people, transform industries, and inspire sustainable global
                growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;