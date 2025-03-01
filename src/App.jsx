import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";          // Home Page
import Marketplace from "./pages/Marketplace";  // Marketplace Page
import AboutUs from "./pages/AboutUs";   // About Us Page
import LoginPage from "./pages/LoginPage"; // Login Page
import ExploreRareNFTs from "./pages/ExploreRareNFTs"; // ExploreRareNFTs
import Dashboard from "./pages/Dashboard"; // Dashboard 
import LiveAuction from "./pages/LiveAuction"; // LiveAuction
import ActiveBids from "./pages/ActiveBids"; // LiveAuction
import BidDetails from "./pages/BidDetails";
import NFTDetails from "./pages/NFTDetails";
import HelpCenter from "./pages/HelpCenter";
import MyPortfoliyo from "./pages/MyPortfoliyo";
import Wallet from "./pages/Wallet";
// import Settings from "./pages/Setting";
import SettingsPage from "./pages/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ExploreRareNFTs" element={<ExploreRareNFTs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MyPortfoliyo" element={<MyPortfoliyo />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/Setting" element={<SettingsPage />} />
        <Route path="/LiveAuction" element={<LiveAuction />} />
        <Route path="/ActiveBids" element={<ActiveBids />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/bid/:id" element={<BidDetails />} />
        <Route path="/nft-details/:title" element={<NFTDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
