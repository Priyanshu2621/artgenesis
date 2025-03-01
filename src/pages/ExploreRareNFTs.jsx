import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExploreRareNFTs.css";
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const filteredNFTs = dummyNFTs.filter(
    (nft) =>
      (category === "All" || nft.category === category) &&
      (blockchain === "All" || nft.blockchain === blockchain) &&
      nft.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="explore-container">
      <header className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <input
          type="text"
          className="search"
          placeholder="Search items, collections, and users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="actions">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/marketplace">Marketplace</Link>
          <Link className="link" to="/AboutUs">About Us</Link>
          <button className="wallet-open-btn" onClick={() => setIsWalletOpen(true)}>Open Wallet</button>
          <button className="login-button" onClick={() => setShowLogin(true)}>Login</button>
          <button className="menu-button" onClick={toggleMenu}>{isMenuOpen ? "Close Menu" : "Open Menu"}</button>
        </div>
      </header>

      {isWalletOpen && <Wallet onClose={() => setIsWalletOpen(false)} />}
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}

      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><Link className="link" to="/Dashboard">Dashboard</Link></li>
            <li><Link className="link" to="/marketplace">Market</Link></li>
            <li><Link className="link" to="/ActiveBids">Active Bids</Link></li>
            <li><Link className="link" to="/MyPortfolio">My Portfolio</Link></li>
            <li><Link className="link" to="/Wallet">Wallet</Link></li>
          </ul>
        </div>
      )}

      <h1>Explore Rare NFTs</h1>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Art">Art</option>
          <option value="Collectibles">Collectibles</option>
        </select>
        <select onChange={(e) => setBlockchain(e.target.value)}>
          <option value="All">All Blockchains</option>
          <option value="Polygon">Polygon</option>
        </select>
      </div>
      <div className="nft-grid">
        {filteredNFTs.map((nft) => (
          <div key={nft.id} className="nft-card">
            <img src={nft.image} alt={nft.name} className="nft-image" />
            <h2 className="nft-title">{nft.name}</h2>
            <p className="nft-price">{nft.price} Eth</p>
          </div>
        ))}
      </div>
      <footer className="footer">
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
