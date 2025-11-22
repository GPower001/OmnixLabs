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
    <section className="page overflow-hidden">
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
            className="text-5xl font-bold mb-4 text-gray-900"
            variants={fadeInUp}
          >
            Case{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Studies
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            From legal services to creative studios and wellness brands, we've
            helped diverse businesses build powerful digital presences that drive
            real results.
          </motion.p>
        </div>
      </motion.section>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caseStudies && caseStudies.length > 0 ? (
          caseStudies.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold text-gray-900">Service:</span>{" "}
                {item.service}
              </p>
              <p className="text-gray-700 mb-4">{item.description}</p>

              {item.technologies && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">
                    Technologies:
                  </span>{" "}
                  {item.technologies}
                </p>
              )}
              {item.focus && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Focus:</span>{" "}
                  {item.focus}
                </p>
              )}
              {item.results && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Results:</span>{" "}
                  {item.results}
                </p>
              )}
              {item.linkText && (
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No case studies available.
          </p>
        )}
      </div>
    </section>
  );
}

