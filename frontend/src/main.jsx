import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./LandingPage/Home/HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./LandingPage/Login/Login";
import Wealth from "./WealthPlanning/Wealth";
import Contact from "./LandingPage/Contact Us/Contact";
import Gallery from "./LandingPage/Gallery/Gallery";
import Download from "./LandingPage/Download/Download";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);

//  <BrowserRouter>
//
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         </Routes>
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="*" element={<PageNotFound />} />
//       <Footer />
//     </BrowserRouter>
