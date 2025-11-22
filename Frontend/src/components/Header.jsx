// import { NavLink } from "react-router-dom";
// import { NavLinks} from '../Data.js';
// import "../Style.css";

// export default function Navbar() {
//   return (
//     <div className="flex justify-between p-4 px-10 bg-gray-900 text-white shadow-lg">
//       <div>
//         <NavLink to="/" className="normal-case text-xl">
//           <img
//             src="/Images/OmixLabs.gif"
//             alt="OmnixLab Logo"
//             className="h-5 mt-2"
//           />
//         </NavLink>
//       </div>
//       <div className="flex-none px-10">
//         <ul className="flex items-center justify-center gap-6">
//           {NavLinks.map((links, index) => (
//             <li
//               key={index}
//               className={links.name === "Get Started" ? "my-button" : ""}
//             >
//               {links.name === "Get Started" ? (
//                 <NavLink to={links.path}>{links.name}</NavLink>
//               ) : (
//                 <NavLink
//                   to={links.path}
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                 >
//                   {links.name}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { NavLinks } from "../Data.js";
// import "../Style.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white shadow-lg">
//       <div className="flex justify-between items-center p-4 px-6 md:px-10">
//         {/* Logo */}
//         <NavLink to="/" className="normal-case text-xl">
//           <img
//             src="/Images/OmixLabs.gif"
//             alt="OmnixLab Logo"
//             className="h-6"
//           />
//         </NavLink>

//         {/* Hamburger (mobile only) */}
//         <button
//           className="md:hidden block focus:outline-none"
//           onClick={() => setOpen(!open)}
//         >
//           <svg
//             className="w-7 h-7"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             {open ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-6">
//           {NavLinks.map((links, index) => (
//             <li
//               key={index}
//               className={links.name === "Get Started" ? "my-button" : ""}
//             >
//               {links.name === "Get Started" ? (
//                 <NavLink to={links.path}>{links.name}</NavLink>
//               ) : (
//                 <NavLink
//                   to={links.path}
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                 >
//                   {links.name}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {open && (
//         <ul className="md:hidden flex flex-col bg-gray-800 px-6 pb-4 space-y-4">
//           {NavLinks.map((links, index) => (
//             <li
//               key={index}
//               className={links.name === "Get Started" ? "my-button w-max" : ""}
//             >
//               {links.name === "Get Started" ? (
//                 <NavLink to={links.path} onClick={() => setOpen(false)}>
//                   {links.name}
//                 </NavLink>
//               ) : (
//                 <NavLink
//                   to={links.path}
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active block" : "nav-link block"
//                   }
//                 >
//                   {links.name}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../Data.js";
import "../Style.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-500
        ${scrolled ? "bg-gray-900/70 backdrop-blur-md" : "bg-gray-900"}
      `}
    >
    <div className="flex justify-between items-center px-6 md:px-10 h-16 md:h-20 transition-all duration-500">
      <NavLink to="/" className="normal-case text-xl flex items-center h-full">
        <img
          src="/Images/OMNIXLABfull.svg"
          alt="OmnixLab Logo"
          className="h-16 md:h-20 w-auto object-contain"
        />
      </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {NavLinks.map((links, index) => (
            <li key={index} className={links.name === "Get Started" ? "my-button" : ""}>
              {links.name === "Get Started" ? (
                <NavLink to={links.path}>{links.name}</NavLink>
              ) : (
                <NavLink
                  to={links.path}
                  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                  {links.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-white my-1 transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 right-0 md:hidden w-64 bg-gray-800 shadow-lg z-40
          pt-[70px] h-[60vh] rounded-l-xl
          transition-all duration-500 ease-in-out
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-6 px-6">
          {NavLinks.map((links, index) => (
            <li key={index} className={links.name === "Get Started" ? "my-button w-max" : ""}>
              {links.name === "Get Started" ? (
                <NavLink to={links.path} onClick={() => setOpen(false)}>
                  {links.name}
                </NavLink>
              ) : (
                <NavLink
                  to={links.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "nav-link active block" : "nav-link block"
                  }
                >
                  {links.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
}
