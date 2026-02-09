// import React from "react";
// import { motion } from "framer-motion";
// import { caseStudies } from "../Data.js";

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8 } },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.15 },
//   }),
// };

// export default function CaseStudies() {
//   return (
//     <section className="page overflow-hidden bg-base-100">
//       {/* Section Heading */}
//       <motion.section
//         className="bg-base-100 text-center py-24"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//       >
//         <div className="container mx-auto px-6">
//           <motion.h1
//             className="text-5xl font-bold mb-4 text-base-content"
//             variants={fadeInUp}
//           >
//             Case{" "}
//             <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
//               Studies
//             </span>
//           </motion.h1>
//           <motion.p
//             className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed"
//             variants={fadeInUp}
//           >
//             From legal services to creative studios and wellness brands, we've
//             helped diverse businesses build powerful digital presences that drive
//             real results.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Case Study Cards */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">
//         {caseStudies && caseStudies.length > 0 ? (
//           caseStudies.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-base-200 rounded-2xl shadow-md border border-base-300 p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index}
//               whileHover={{ scale: 1.03 }}
//             >
//               <h3 className="text-xl font-bold text-base-content mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-base-content/70 mb-4">
//                 <span className="font-semibold text-base-content">Service:</span>{" "}
//                 {item.service}
//               </p>
//               <p className="text-base-content/80 mb-4">{item.description}</p>

//               {item.technologies && (
//                 <p className="text-sm text-base-content/70 mb-2">
//                   <span className="font-semibold text-base-content">
//                     Technologies:
//                   </span>{" "}
//                   {item.technologies}
//                 </p>
//               )}
//               {item.focus && (
//                 <p className="text-sm text-base-content/70 mb-2">
//                   <span className="font-semibold text-base-content">Focus:</span>{" "}
//                   {item.focus}
//                 </p>
//               )}
//               {item.results && (
//                 <p className="text-sm text-base-content/70 mb-2">
//                   <span className="font-semibold text-base-content">Results:</span>{" "}
//                   {item.results}
//                 </p>
//               )}
//               {item.linkText && (
//                 <a
//                   href="#"
//                   className="inline-block mt-4 text-primary font-medium hover:text-primary/80 transition-colors"
//                 >
//                   {item.linkText}
//                 </a>
//               )}
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-base-content/60 col-span-3">
//             No case studies available.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { caseStudies } from "../Data.js";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function CaseStudies() {
  return (
    <section className="page overflow-hidden bg-base-100">
      {/* Section Heading */}
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
            Case{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
              Studies
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            From legal services to creative studios and wellness brands, we've
            helped diverse businesses build powerful digital presences that drive
            real results.
          </motion.p>
        </div>
      </motion.section>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">
        {caseStudies && caseStudies.length > 0 ? (
          caseStudies.map((item, index) => (
            <motion.div
              key={index}
              className="bg-base-200 rounded-2xl shadow-md border border-base-300 p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-base-content mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-base-content/70 mb-4">
                <span className="font-semibold text-base-content">Service:</span>{" "}
                {item.service}
              </p>
              <p className="text-base-content/80 mb-4">{item.description}</p>

              {item.technologies && (
                <p className="text-sm text-base-content/70 mb-2">
                  <span className="font-semibold text-base-content">
                    Technologies:
                  </span>{" "}
                  {item.technologies}
                </p>
              )}
              {item.focus && (
                <p className="text-sm text-base-content/70 mb-2">
                  <span className="font-semibold text-base-content">Focus:</span>{" "}
                  {item.focus}
                </p>
              )}
              {item.results && (
                <p className="text-sm text-base-content/70 mb-2">
                  <span className="font-semibold text-base-content">Results:</span>{" "}
                  {item.results}
                </p>
              )}
              {item.linkText && (
                <a
                  href={item.link || "#"}
                  target={item.link ? "_blank" : "_self"}
                  rel={item.link ? "noopener noreferrer" : ""}
                  className="inline-block mt-4 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-center text-base-content/60 col-span-3">
            No case studies available.
          </p>
        )}
      </div>
    </section>
  );
}