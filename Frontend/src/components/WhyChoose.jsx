// CardsSection.js
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
    <section className="py-16 px-6 bg-gray-50 font-montserrat">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            className="group w-96 min-h-[320px] bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer"
          >
            {/* Icon that animates when parent card is hovered */}
            <motion.div
              variants={{
                hover: { rotate: [0, -10, 10, 0], scale: 1.2 },
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-5xl mb-6 text-blue-600"
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-4">{card.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
