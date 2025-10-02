// import { Link } from "react-router-dom";
// import NavLinks from "../Data";
// import "../Style.css";

// export default function Navbar() {
//   return (
//     <div className="flex justify-between p-4 px-10 bg-gray-900 text-white shadow-lg">
//       <div>
//         <Link to="/" className="normal-case text-xl">
//           <img src="/Images/OmixLabs.gif" alt="OmnixLab Logo" className="h-5 mt-2" />
//         </Link>
//       </div>
//       <div className="flex-none px-10">
//         <ul className="flex items-center justify-center gap-6">
//           {NavLinks.map((links, index) => (
//             <li key={index} className={links.name ==="Get Started" ? "my-button" : "text-white font-semibold"}>
//               <Link to={links.path}>{links.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";
import { NavLinks} from '../Data.js';
import "../Style.css";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 px-10 bg-gray-900 text-white shadow-lg">
      <div>
        <NavLink to="/" className="normal-case text-xl">
          <img
            src="/Images/OmixLabs.gif"
            alt="OmnixLab Logo"
            className="h-5 mt-2"
          />
        </NavLink>
      </div>
      <div className="flex-none px-10">
        <ul className="flex items-center justify-center gap-6">
          {NavLinks.map((links, index) => (
            <li
              key={index}
              className={links.name === "Get Started" ? "my-button" : ""}
            >
              {links.name === "Get Started" ? (
                <NavLink to={links.path}>{links.name}</NavLink>
              ) : (
                <NavLink
                  to={links.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {links.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

