import { FaInstagram, FaLinkedinIn, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-base-100 border-t border-base-300 px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Omnix Labs */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-base-content">Omnix Labs</h2>
          <p className="text-sm text-base-content/70">
            Building Global Futures Through Human Connection
          </p>
          <p className="text-sm text-base-content/70 mt-2">
            Technology & Media Innovation Company based in Lagos, Nigeria,
            serving clients worldwide.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-base-content">Services</h2>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li>Software Development</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Brand Identity</li>
            <li>Digital Marketing</li>
            <li>Data Intelligence</li>
          </ul>
        </div>
       
        {/* Company */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-base-content">Company</h2>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li><a href="/about">About Us</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-base-content">Connect</h2>
          <div className="flex space-x-3 mb-5">
            {[
              { icon: <FaInstagram />, color: "from-pink-500 to-orange-500", link: "https://www.instagram.com/theomnixlabs/" },
              { icon: <FaLinkedinIn />, color: "from-blue-600 to-blue-400", link: "https://www.linkedin.com/company/omnix-labs/?viewAsMember=true" },
              { icon: <FaTiktok />, color: "from-gray-800 to-pink-500", link: "https://www.tiktok.com/@theomnixlabs?lang=en" },
              { icon: <FaFacebookF />, color: "from-blue-700 to-blue-500", link: "https://www.facebook.com/share/1Aa5w3q7ux/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-12 h-12 flex items-center justify-center rounded-md border 
                  border-base-300 text-lg cursor-pointer relative overflow-hidden
                  text-base-content/70 transition-all duration-500 transform
                  hover:scale-110 hover:rotate-6
                  before:absolute before:inset-0 before:bg-gradient-to-r ${item.color}
                  before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
                `}
              >
                <span className="relative z-10 transition-colors duration-500 hover:text-white">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
          <button className="relative overflow-hidden px-6 py-3 rounded-full shadow-md font-semibold bg-transparent border border-[#0d8ab8] group">
            <a className="relative z-10 text-base-content/70 transition-colors duration-500 group-hover:text-white"
              href="/contact"
            >
              Get Started Today
            </a>
            {/* Hover fill effect */}
            <span className="absolute inset-0 bg-[#0d8ab8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </button>
        </div>
      </div>

      <div className="mt-10 border-t border-base-300 pt-6 text-center text-sm text-base-content/60">
        © {currentYear} Omnix Labs. All rights reserved. | Building digital powerhouses
        that connect, inspire, and transform.
      </div>
    </footer>
  );
}