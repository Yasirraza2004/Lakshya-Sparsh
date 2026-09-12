import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./LandingPage/Home/HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./LandingPage/Login/Login";
import Wealth from "./WealthPlanning/Wealth";
import ELSS from "./ELSS/elss";

import AboutUs from "./LandingPage/About Us/AboutUs";
import StartInvesting from "./LandingPage/Start Investing/StartInvesting";
import NriCorner from "./LandingPage/NRICorner/NriCorner";
import Download from "./LandingPage/Download/Download";
import Gallery from "./LandingPage/Gallery/Gallery";
import Contact from "./LandingPage/Contact Us/Contact";


import LiquidFunds from "./LandingPage/Home/DebtFundsSection/LiquidFunds/LiquidFunds";
import ConservativeHybridFunds from "./LandingPage/Home/DebtFundsSection/ConservativeHybridFunds/ConservativeHybridFunds";
import LongTermDebtFunds from "./LandingPage/Home/DebtFundsSection/LongTermDebtFunds/LongTermDebtFunds";


import LargeCapFund from "./LandingPage/Home/EquityMutalFundSection/LargeCapFund/largeCapFund";
import MidCapFund from "./LandingPage/Home/EquityMutalFundSection/MidCapFund/MidCapFund";
import MultiCapFund from "./LandingPage/Home/EquityMutalFundSection/MultiCapFund/MultiCapFund";
import SmallCapFund from "./LandingPage/Home/EquityMutalFundSection/SmallCapFund/SmallCapFund";
import ThematicFund from "./LandingPage/Home/EquityMutalFundSection/ThematicFund/ThematicFund";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/start" element={<StartInvesting />} />
        <Route path="/nri" element={<NriCorner />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/elss" element={<ELSS />} />

        <Route path="/liquid_funds" element={<LiquidFunds />} />
        <Route path="/long_term_debt_funds" element={<LongTermDebtFunds />} />
        <Route path="/hybrid_funds" element={<ConservativeHybridFunds />} />

        <Route path="/large_cap_fund" element={<LargeCapFund />} />
        <Route path="/thematic_fund" element={<ThematicFund />} />
        <Route path="/multi_cap_fund" element={<MultiCapFund />} />
        <Route path="/mid_cap_fund" element={<MidCapFund />} />
        <Route path="/small_cap_fund" element={<SmallCapFund />} />


        

      {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
