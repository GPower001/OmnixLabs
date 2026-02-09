import React from "react";
import { motion } from "framer-motion";
import { insights } from "../InsightData";
import { LineChart, Palette, Rocket } from "lucide-react";

// Icon Mapping
const iconMap = {
  LineChart: <LineChart className="w-10 h-10 text-blue-500" />,
  Palette: <Palette className="w-10 h-10 text-pink-500" />,
  Rocket: <Rocket className="w-10 h-10 text-purple-500" />,
};

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Insights() {
  return (
    <section className="page overflow-hidden p-5 bg-base-100">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* ===== Header Section ===== */}
        <motion.section
          className="bg-base-100 text-center py-24"
          variants={fadeIn}
        >
          <motion.h1
            className="text-5xl font-bold mb-4 text-base-content"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Stay ahead with expert perspectives on technology, innovation, and 
            digital transformation shaping the future of business.
          </motion.p>
        </motion.section>

        {/* ===== Cards Section ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-base-300"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-lg font-semibold text-base-content mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-base-content/60 mb-4">{item.date}</p>

              <p className="text-base-content/80 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <a
                href={item.link}
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}