import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Industries from "./Pages/Industries";
import Insights from "./Pages/Insights";
import CaseStudies from "./Pages/CaseStudies";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="insights" element={<Insights />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}
