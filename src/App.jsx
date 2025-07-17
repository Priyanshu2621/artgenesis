import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";          
import Marketplace from "./pages/Marketplace";  
import AboutUs from "./pages/AboutUs";   
import LoginPage from "./pages/LoginPage"; 
import ExploreRareNFTs from "./pages/ExploreRareNFTs"; 
import Dashboard from "./pages/Dashboard"; 
import LiveAuction from "./pages/LiveAuction"; 
import ActiveBids from "./pages/ActiveBids"; 
import BidDetails from "./pages/BidDetails";
import NFTDetails from "./pages/NFTDetails";
import HelpCenter from "./pages/HelpCenter";
import MyPortfoliyo from "./pages/MyPortfoliyo";
import Wallet from "./pages/Wallet";
import SettingsPage from "./pages/Setting";

function App() {
// user stores just the username part (email before '@')
  const [user, setUser] = useState(localStorage.getItem("username") || null);

  // Control the login modal open state
  const [loginOpen, setLoginOpen] = useState(!user);

  const [myNfts, setMyNfts] = useState([]);

  // Function to handle adding NFTs to the collection
  const addNft = (nft) => {
    setMyNfts((prevNfts) => [...prevNfts, nft]);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("username", user);
      setLoginOpen(false);  // Close login modal when logged in
    } else {
      localStorage.removeItem("username");
      setLoginOpen(true);   // Open login modal when logged out
    }
  }, [user]);

  const closeLogin = () => setLoginOpen(false);

  return (
    <Router>
      {/* Login Modal */}
      {loginOpen && <LoginPage isOpen={loginOpen} onClose={closeLogin} setUser={setUser} />}

      <Routes>
        {/* Pass user and setUser to Home */}
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/LoginPage" element={<LoginPage isOpen={loginOpen} onClose={closeLogin} setUser={setUser} />} />
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
        <Route path="/bid-details/:id" element={<BidDetails addNft={addNft} />} />
      </Routes>
    </Router>
  );
}

export default App;
