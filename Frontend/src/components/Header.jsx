// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { NavLinks } from "../Data.js";
// import "../Style.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`
//         fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-500
//         ${scrolled ? "bg-gray-900/70 backdrop-blur-md" : "bg-gray-900"}
//       `}
//     >
//     <div className="flex justify-between items-center px-6 md:px-10 h-16 md:h-20 transition-all duration-500">
//       <NavLink to="/" className="normal-case text-xl flex items-center h-full">
//         <img
//           src="/Images/OmnixUpdatedLogo.gif"
//           alt="OmnixLab Logo"
//           className="h-16 md:h-20 w-auto object-contain"
//         />
//       </NavLink>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-6">
//           {NavLinks.map((links, index) => (
//             <li key={index} className={links.name === "Get Started" ? "my-button" : ""}>
//               {links.name === "Get Started" ? (
//                 <NavLink to={links.path}>{links.name}</NavLink>
//               ) : (
//                 <NavLink
//                   to={links.path}
//                   className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
//                 >
//                   {links.name}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger */}
//         <button
//           className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 focus:outline-none"
//           onClick={() => setOpen(!open)}
//         >
//           <span
//             className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
//               open ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-0.5 w-8 bg-white my-1 transition-all duration-300 ease-in-out ${
//               open ? "opacity-0" : "opacity-100"
//             }`}
//           ></span>
//           <span
//             className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
//               open ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </button>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`
//           fixed top-0 right-0 md:hidden w-64 bg-gray-800 shadow-lg z-40
//           pt-[70px] h-[60vh] rounded-l-xl
//           transition-all duration-500 ease-in-out
//           ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
//         `}
//       >
//         <ul className="flex flex-col gap-6 px-6">
//           {NavLinks.map((links, index) => (
//             <li key={index} className={links.name === "Get Started" ? "my-button w-max" : ""}>
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
//       </div>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//           onClick={() => setOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// }



import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../Data.js";
import ThemeToggle from "./ThemeToggle";
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
        ${scrolled 
          ? "bg-gray-900/70 dark:bg-gray-800/70 backdrop-blur-md" 
          : "bg-gray-900 dark:bg-gray-800"
        }
      `}
    >
    <div className="flex justify-between items-center px-6 md:px-10 h-16 md:h-20 transition-all duration-500">
      <NavLink to="/" className="normal-case text-xl flex items-center h-full">
        <img
          src="/Images/OmnixUpdatedLogo.gif"
          alt="OmnixLab Logo"
          className="h-16 md:h-20 w-auto object-contain"
        />
      </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
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
          <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          
          {/* Hamburger */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 z-50 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-0.5 w-8 bg-white dark:bg-gray-200 transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white dark:bg-gray-200 my-1 transition-all duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white dark:bg-gray-200 transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 right-0 md:hidden w-64 bg-gray-800 dark:bg-gray-700 shadow-lg z-40
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