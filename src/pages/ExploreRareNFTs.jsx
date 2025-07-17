import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExploreRareNFTs.css";
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import FuturisticCities from "./Images/FuturisticCities.png";
import MythicalCreatures from "./Images/MythicalCreatures.png";
import SteampunkWorld from "./Images/SteampunkWorld.png";
import UnderwaterKingdom from "./Images/UnderwaterKingdom.png";
import CyberpunkVibes from "./Images/CyberpunkVibes.png";
import FantasyForests from "./Images/FantasyForests.png";
import RetroGaming from "./Images/RetroGaming.png";
import SurrealDreamscape from "./Images/SurrealDreamscape.png";
import HistoricalEras from "./Images/HistoricalEras.png";
import AbstractArt from "./Images/AbstractArt.png";
import Wallet from "./Wallet";
import LoginPage from "./LoginPage";
import Logo from "./Images/Logo.png";

const dummyNFTs = [
  { id: 1, name: "FuturisticCities", image: FuturisticCities, price: "2.5", category: "Art", blockchain: "Polygon" },
  { id: 2, name: "MythicalCreatures", image: MythicalCreatures, price: "3.1", category: "Collectibles", blockchain: "Polygon" },
  { id: 3, name: "SteampunkWorld", image: SteampunkWorld, price: "4.08", category: "Art", blockchain: "Polygon" },
  { id: 4, name: "UnderwaterKingdom", image: UnderwaterKingdom, price: "7.9", category: "Art", blockchain: "Polygon" },
  { id: 5, name: "CyberpunkVibes", image: CyberpunkVibes, price: "2.2", category: "Art", blockchain: "Polygon" },
  { id: 6, name: "FantasyForests", image: FantasyForests, price: "5.3", category: "Art", blockchain: "Polygon" },
  { id: 7, name: "RetroGaming", image: RetroGaming, price: "6.6", category: "Art", blockchain: "Polygon" },
  { id: 8, name: "SurrealDreamscape", image: SurrealDreamscape, price: "4.36", category: "Art", blockchain: "Polygon" },
  { id: 9, name: "HistoricalEras", image: HistoricalEras, price: "1.96", category: "Collectibles", blockchain: "Polygon" },
  { id: 10, name: "AbstractArt", image: AbstractArt, price: "5.69", category: "Collectibles", blockchain: "Polygon" },
];

const ExploreRareNFTs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [blockchain, setBlockchain] = useState("All");
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".dropdown-menu") && !event.target.closest(".menu-button")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const filteredNFTs = dummyNFTs.filter(
    (nft) =>
      (category === "All" || nft.category === category) &&
      (blockchain === "All" || nft.blockchain === blockchain) &&
      nft.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle submission of Card payment details
  const handleCardSubmit = (e) => {
    e.preventDefault();
    console.log("Card payment submitted");
    setPaymentMethod(null);
    setShowPayment(false);
  };

  // Handle submission of UPI payment details
  const handleUPISubmit = (e) => {
    e.preventDefault();
    console.log("UPI payment submitted");
    setPaymentMethod(null);
    setShowPayment(false);
  };

  // Handle submission of Crypto Wallet payment details
  const handleCryptoSubmit = (e) => {
    e.preventDefault();
    console.log("Crypto Wallet payment submitted");
    setPaymentMethod(null);
    setShowPayment(false);
  };

  return (
    <div className="explore-container">
      <div>
        {isWalletOpen && <Wallet onClose={() => setIsWalletOpen(false)} />}
        {showLogin && <LoginPage isOpen={showLogin} onClose={() => setShowLogin(false)} />}
      </div>
      <header className="header">
          <div>
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <input
            type="text"
            className="search"
            placeholder="Search items, collections, and users"
          />
          <div className="actions">
            <li><Link className="Link" to="/">Home</Link></li>
            <li><Link className="Link" to="/marketplace">Marketplace</Link></li>
            <li><Link className="Link" to="/AboutUs">AboutUs</Link></li>
            <button className="wallet-open-btn" onClick={() => setIsWalletOpen(true)}>
              <span className="icon">💰</span> Open Wallet
            </button>
            <button className="login-button" onClick={() => setShowLogin(true)}>Login</button>
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? "Close Menu" : "Open Menu"}
            </button>
          </div>
        </header>
        {isMenuOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li><Link className="Links" to="/Dashboard">Dashboard</Link></li>
                      <li><Link className="Links" to="/marketplace">Market</Link></li>
                      <li><Link className="Links" to="/ActiveBids">Active Bids</Link></li>
                      <li><Link className="Links" to="/MyPortfoliyo">My Portfolio</Link></li>
                      <li><Link className="Links" to="/Wallet">Wallet</Link></li>
                    </ul>
                  </div>
                )}
                
      {selectedNFT && (
        <div className="nft-modal">
          <div className="modal-content">
            <img src={selectedNFT.image} alt={selectedNFT.name} className="modal-image" />
            <h2>{selectedNFT.name}</h2>
            <p>Price: {selectedNFT.price} Pol</p>
            {!showPayment ? (
              <button onClick={() => setShowPayment(true)}>Buy Now</button>
            ) : (
              <div className="payment-options">
                <h3>Select Payment Method</h3>
                <button onClick={() => setPaymentMethod("Cards")}>Cards</button>
                <button onClick={() => setPaymentMethod("UPI")}>UPI</button>
                <button onClick={() => setPaymentMethod("Crypto Wallet")}>Crypto Wallet</button>
                <button onClick={() => setShowPayment(false)}>Cancel</button>
              </div>
            )}
            <button onClick={() => { setSelectedNFT(null); setShowPayment(false); }}>Close</button>
          </div>
        </div>
      )}
      

      {paymentMethod && (
        <div className="payment-modal">
          <div className="modal-content">
            {paymentMethod === "Cards" ? (
              <>
                <h2>Card Payment Details</h2>
                <form onSubmit={handleCardSubmit}>
                  <input type="text" placeholder="Card Number" required />
                  <input type="text" placeholder="Expiry Date (MM/YY)" required />
                  <input type="text" placeholder="CVV" required />
                  <button type="submit">Submit Payment</button>
                </form>
                <button onClick={() => setPaymentMethod(null)}>Close</button>
              </>
            ) : paymentMethod === "UPI" ? (
              <>
                <h2>UPI Payment Details</h2>
                <form onSubmit={handleUPISubmit}>
                  <input type="text" placeholder="Enter UPI ID" required />
                  <button type="submit">Submit Payment</button>
                </form>
                <button onClick={() => setPaymentMethod(null)}>Close</button>
              </>
            ) : paymentMethod === "Crypto Wallet" ? (
              <>
                <h2>Crypto Wallet Payment Details</h2>
                <form onSubmit={handleCryptoSubmit}>
                  <input type="text" placeholder="Enter Wallet Address" required />
                  <button type="submit">Submit Payment</button>
                </form>
                <button onClick={() => setPaymentMethod(null)}>Close</button>
              </>
            ) : null}
          </div>
          
        </div>
      )}

      <h1>Explore Rare NFTs</h1>
      <div className="nft-grid">
        {filteredNFTs.map((nft) => (
          <div key={nft.id} className="nft-card" onClick={() => setSelectedNFT(nft)}>
            <img src={nft.image} alt={nft.name} className="nft-image" />
            <h2 className="nft-title">{nft.name}</h2>
            <p className="nft-price">{nft.price} Eth</p>
            
          </div>
          
        ))}
        
      </div>
      <footer className="footers">
        <p>© 2025 ArtGenesis. All Rights Reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </footer>
    </div>
  );
};

export default ExploreRareNFTs;
