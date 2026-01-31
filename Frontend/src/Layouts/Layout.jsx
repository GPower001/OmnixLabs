// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Header";
// import Footer from "../components/Footer";
// import ScrollToTop from "../components/ScrollToTop";

// export default function Layout() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <ScrollToTop />
//       <Navbar />

//       <main className="flex-1">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}