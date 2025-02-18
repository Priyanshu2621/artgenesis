import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";          // Home Page
import Marketplace from "./pages/Marketplace";  // Marketplace Page
import AboutUs from "./pages/AboutUs";   // About Us Page
import LoginPage from "./pages/LoginPage"; // Login Page
import ExploreRareNFTs from "./pages/ExploreRareNFTs"; // Login Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ExploreRareNFTs" element={<ExploreRareNFTs />} />
      </Routes>
    </Router>
  );
}

export default App;
