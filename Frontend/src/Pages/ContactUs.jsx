// import React from "react";
// import { motion } from "framer-motion";
// import ContactForm from "../components/contactForm";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
// };

// const ContactUs = () => {
//   return (
//     <div id="about" className="page overflow-hidden">
      
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
//             Contact{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Us
//             </span>
//           </motion.h1>

//           <motion.p
//             className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
//             variants={fadeInUp}
//           >
//             Ready to start your next project? Get in touch with our team and 
//             let's discuss how we can help transform your ideas into reality.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* ===== Form Section with Motion Added ===== */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeInUp}
//         className="container mx-auto px-6"
//       >
//         <motion.div
//           variants={fadeIn}
//           transition={{ staggerChildren: 0.2 }}
//         >
//           <ContactForm />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactUs;


import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/contactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const ContactUs = () => {
  return (
    <div id="about" className="page overflow-hidden bg-base-100">
      
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
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Ready to start your next project? Get in touch with our team and 
            let's discuss how we can help transform your ideas into reality.
          </motion.p>
        </div>
      </motion.section>

      {/* ===== Form Section with Motion Added ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container mx-auto px-6 pb-20"
      >
        <motion.div
          variants={fadeIn}
          transition={{ staggerChildren: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;