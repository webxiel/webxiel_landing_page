import { Route, Routes, Navigate } from "react-router-dom"
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import Home from "./pages/home/Home";
import Partners from "./pages/partners/Partners";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="products" element={<Products />} />
      <Route path="partners" element={<Partners />} />
    </Routes>
  );
}

export default App;
