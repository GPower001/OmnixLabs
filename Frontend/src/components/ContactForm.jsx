// import React from "react";

// export default function ContactSection() {
//   return (
//     <div className="w-full bg-base-100 text-base-content py-16 px-6">
//       {/* HEADING SECTION */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-bold text-base-content">
//           Let's Build Something <span className="text-indigo-600 dark:text-indigo-400">Amazing Together</span>
//         </h1>
//         <p className="text-base-content/70 mt-4 max-w-2xl mx-auto">
//           Ready to transform your ideas into reality? Get in touch with our team and let's discuss
//           how we can help your business succeed.
//         </p>
//       </div>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT SIDE — SEND US A MESSAGE */}
//         <div className="bg-base-200 rounded-xl p-8 border border-base-300 shadow-sm">
//           <h2 className="text-2xl font-semibold mb-6 text-base-content">Send us a message</h2>

//           <form className="space-y-6">
//             {/* First + Last Name */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium mb-1 text-base-content">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="John"
//                   className="w-full border border-base-300 rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1 text-base-content">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Doe"
//                   className="w-full border border-base-300 rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-base-content">Email</label>
//               <input
//                 type="email"
//                 placeholder="john@example.com"
//                 className="w-full border border-base-300 rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition"
//               />
//             </div>

//             {/* Company */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-base-content">Company</label>
//               <input
//                 type="text"
//                 placeholder="Your Company"
//                 className="w-full border border-base-300 rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition"
//               />
//             </div>

//             {/* Project Type */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-base-content">Project Type</label>
//               <select
//                 className="w-full border border-base-300 rounded-md px-4 py-3 bg-base-100 text-base-content focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition"
//               >
//                 <option>Select Project Type</option>
//                 <option>Web Development</option>
//                 <option>Mobile App Development</option>
//                 <option>Software Development</option>
//                 <option>Branding and Identity</option>
//                 <option>Graphic Design</option>
//                 <option>Video and Animation</option>
//                 <option>Digital Marketing</option>
//                 <option>Social Media Mangement</option>
//                 <option>Content Creation</option>
//                 <option>SEO and Analytics</option>
//               </select>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-base-content">Message</label>
//               <textarea
//                 rows="4"
//                 placeholder="Tell us about your project..."
//                 className="w-full border border-base-300 rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 resize-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition"
//               ></textarea>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-3 rounded-md font-medium transition-colors duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* RIGHT SIDE — GET IN TOUCH */}
//         <div className="pt-4">
//           <h2 className="text-2xl font-semibold mb-4 text-base-content">Get in Touch</h2>
//           <p className="text-base-content/70 mb-8 max-w-md">
//             We're here to help you every step of the way. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
//           </p>

//           <div className="space-y-6">
//             {/* Email */}
//             <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">✉️</div>
//               <div>
//                 <h4 className="font-semibold text-base-content">Email Us</h4>
//                 <p className="text-base-content/70 text-sm">info@theomnixlabs.com</p>
//               </div>
//             </div>

//             {/* Call */}
//             <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">📞</div>
//               <div>
//                 <h4 className="font-semibold text-base-content">Call Us</h4>
//                 <p className="text-base-content/70 text-sm"> (+234)8062690220</p>
//               </div>
//             </div>

//             {/* Visit */}
//             <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">📍</div>
//               <div>
//                 <h4 className="font-semibold text-base-content">Visit Us</h4>
//                 <p className="text-base-content/70 text-sm">Bamisoro Raheem T-junction, Epe Lagos State Nigeria</p>
//               </div>
//             </div>

//             {/* Business Hours */}
//             <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">⏰</div>
//               <div>
//                 <h4 className="font-semibold text-base-content">Business Hours</h4>
//                 <p className="text-base-content/70 text-sm">Mon–Fri: 9AM–6PM PST</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.projectType || formData.projectType === "Select Project Type") {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // For Create React App, use this instead:
      // const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      // const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      // const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        project_type: formData.projectType,
        message: formData.message,
        to_email: 'info@theomnixlabs.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
      
      setSubmitStatus("success");
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-base-100 text-base-content py-16 px-6">
      {/* HEADING SECTION */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-base-content">
          Let's Build Something <span className="text-indigo-600 dark:text-indigo-400">Amazing Together</span>
        </h1>
        <p className="text-base-content/70 mt-4 max-w-2xl mx-auto">
          Ready to transform your ideas into reality? Get in touch with our team and let's discuss
          how we can help your business succeed.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE — SEND US A MESSAGE */}
        <div className="bg-base-200 rounded-xl p-8 border border-base-300 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-base-content">Send us a message</h2>

          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-400 rounded-md">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-400 rounded-md">
              Something went wrong. Please try again or email us directly at info@theomnixlabs.com
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-base-content">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-base-300'} rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-base-content">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-base-300'} rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-base-content">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-base-300'} rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-1 text-base-content">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className={`w-full border ${errors.company ? 'border-red-500' : 'border-base-300'} rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition`}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium mb-1 text-base-content">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full border ${errors.projectType ? 'border-red-500' : 'border-base-300'} rounded-md px-4 py-3 bg-base-100 text-base-content focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition`}
              >
                <option>Select Project Type</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Software Development</option>
                <option>Branding and Identity</option>
                <option>Graphic Design</option>
                <option>Video and Animation</option>
                <option>Digital Marketing</option>
                <option>Social Media Management</option>
                <option>Content Creation</option>
                <option>SEO and Analytics</option>
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1 text-base-content">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your project..."
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-base-300'} rounded-md px-4 py-3 bg-base-100 text-base-content placeholder:text-base-content/50 resize-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-3 rounded-md font-medium transition-colors duration-200 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — GET IN TOUCH */}
        <div className="pt-4">
          <h2 className="text-2xl font-semibold mb-4 text-base-content">Get in Touch</h2>
          <p className="text-base-content/70 mb-8 max-w-md">
            We're here to help you every step of the way. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">✉️</div>
              <div>
                <h4 className="font-semibold text-base-content">Email Us</h4>
                <p className="text-base-content/70 text-sm">info@theomnixlabs.com</p>
              </div>
            </div>

            {/* Call */}
            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">📞</div>
              <div>
                <h4 className="font-semibold text-base-content">Call Us</h4>
                <p className="text-base-content/70 text-sm"> (+234)8062690220</p>
              </div>
            </div>

            {/* Visit */}
            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">📍</div>
              <div>
                <h4 className="font-semibold text-base-content">Visit Us</h4>
                <p className="text-base-content/70 text-sm">Bamisoro Raheem T-junction, Epe Lagos State Nigeria</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-200 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">⏰</div>
              <div>
                <h4 className="font-semibold text-base-content">Business Hours</h4>
                <p className="text-base-content/70 text-sm">Mon–Fri: 9AM–6PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}