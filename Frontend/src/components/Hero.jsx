import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleViewWork = () => {
    navigate('/case-studies');
    window.scrollTo(0, 0);
  };

  return (
    <section
      className="hero min-h-[85vh] bg-no-repeat bg-cover bg-center font-montserrat"
      style={{ backgroundImage: "url('/Images/handhero2.gif')" }}
    >
      {/* Dark overlay */}
      <div className="hero-overlay bg-black/70"></div>

      {/* Content */}
      <div className="hero-content text-center text-neutral-content flex flex-col gap-10 mt-10 md:mt-20 px-4 md:px-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-normal md:whitespace-nowrap"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Building Global Futures
          </motion.h1>

          <motion.p
            className="mb-5 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We craft cutting-edge digital solutions that drive innovation across
            industries. From web development to strategic consulting, we turn
            your vision into impactful reality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-10 gap-4 sm:gap-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button 
              onClick={handleStartProject}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition max-w-[200px] w-full mx-auto sm:max-w-[200px]"
            >
              Start Your Project{" "}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button 
              onClick={handleViewWork}
              className="relative overflow-hidden px-6 py-3 rounded-lg font-bold text-white bg-black group mt-2 sm:mt-0 max-w-[200px] w-full mx-auto sm:max-w-[200px]"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                View Our Work
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Counter Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mt-10 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.8 },
            },
          }}
        >
          {[
            { end: 50, suffix: "+", label: "Projects Delivered" },
            { end: 25, suffix: "+", label: "Happy Clients" },
            { end: 6, suffix: "+", label: "Core Services" },
            { end: 99, suffix: "%", label: "Client Satisfaction" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
                <CountUp end={item.end} duration={3} />
                {item.suffix}
              </h2>
              <p className="text-sm sm:text-base md:text-lg">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;