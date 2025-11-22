import React from "react";

export default function ContactSection() {
  return (
    <div className="w-full bg-white text-gray-900 py-16 px-6">
      {/* HEADING SECTION */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">
          Let's Build Something <span className="text-indigo-600">Amazing Together</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Ready to transform your ideas into reality? Get in touch with our team and let's discuss
          how we can help your business succeed.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE — SEND US A MESSAGE */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form className="space-y-6">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium mb-1">Project Type</label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Select a service</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — GET IN TOUCH */}
        <div className="pt-4">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            We're here to help you every step of the way. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">✉️</div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-600 text-sm">hello@omnimxlabs.com</p>
              </div>
            </div>

            {/* Call */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">📞</div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Visit */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">📍</div>
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-600 text-sm">123 Innovation Drive, Tech City, TC 12345</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">⏰</div>
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p className="text-gray-600 text-sm">Mon–Fri: 9AM–6PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
