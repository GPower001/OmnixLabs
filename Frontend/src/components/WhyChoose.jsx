import React from "react";
import { motion } from "framer-motion";
import { cardsData } from "../Data.js";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-base-100 font-montserrat">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Why Choose Us?
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            className="group w-full sm:w-80 min-h-[320px] bg-base-200 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer mx-auto"
          >
            <motion.div
              variants={{
                hover: { rotate: [0, -10, 10, 0], scale: 1.2 },
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-blue-600"
            >
              {card.icon}
            </motion.div>

            <h3 className="text-lg sm:text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-base-content text-sm sm:text-base leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
