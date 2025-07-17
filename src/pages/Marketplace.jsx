import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaEthereum, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BrowserProvider } from "ethers";
import logo from "./Images/Logo.png";
import "./Marketplace.css";

const items = [
  { id: 1, title: "Swag", price: "0.001 ETH", highestBid: "0.002 ETH", time: "8 hours ago", likes: 56, category: "Art", image: require("./Images/Swag.jpg") },
  { id: 2, title: "underwater", price: "0.051 ETH", highestBid: "0.062 ETH", time: "8 hours ago", likes: 44, category: "Art", image: require("./Images/underwater.jpg") },
  { id: 3, title: "clg", price: "0.901 ETH", highestBid: "0.902 ETH", time: "8 hours ago", likes: 11, category: "Art", image: require("./Images/clg.jpg") },
  { id: 4, title: "lights", price: "0.501 ETH", highestBid: "0.602 ETH", time: "8 hours ago", likes: 85, category: "Art", image: require("./Images/lights.jpg") },
  { id: 5, title: "direction", price: "0.5 ETH", highestBid: "0.6 ETH", time: "8 hours ago", likes: 75, category: "Photos", image: require("./Images/direction.jpg") },
  { id: 6, title: "animated", price: "1.004 ETH", highestBid: "1.006 ETH", time: "8 hours ago", likes: 42, category: "Photos", image: require("./Images/animated.jpg") },
  { id: 7, title: "Cool Cats", price: "0.089 ETH", highestBid: "0.096 ETH", time: "8 hours ago", likes: 79, category: "Photos", image: require("./Images/CoolCats.webp") },
  { id: 8, title: "Mens", price: "0.025 ETH", highestBid: "0.050 ETH", time: "8 hours ago", likes: 69, category: "Game", image: require("./Images/mens.jpg") },
  { id: 9, title: "World Song", price: "0.025 ETH", highestBid: "0.050 ETH", time: "8 hours ago", likes: 69, category: "Music", image: require("./Images/mens.jpg") },
  { id: 10, title: "Music", price: "0.74 ETH", highestBid: "0.86 ETH", time: "8 hours ago", likes: 20, category: "Music", image: require("./Images/Music.jpg") },
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [nfts, setNfts] = useState([]);

   useEffect(() => {
    axios.get("http://localhost:5000/api/nfts")
      .then(res => setNfts(res.data))
      .catch(err => console.error("Error fetching NFTs:", err));
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="marketplace">
      <header className="header">
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <input type="text" className="search" placeholder="Search items, collections, creators" />
        <div className="actions">
          <li><Link className="Link" to="/">Home</Link></li>
          <li><Link className="Link" to="/AboutUs">AboutUs</Link></li>
          <button className="wallet-btn" onClick={connectWallet}>
            {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
          </button>
        </div>
      </header>

      <main>
        <h2>Explore</h2>
        <div className="items-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="item-card" onClick={() => setSelectedNFT(item)}>
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p><FaEthereum /> {item.price}</p>
                <button className="buy-btn" onClick={() => setShowPaymentOptions(true)}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>

        {showPaymentOptions && (
          <div className="popup">
            <div className="popup-content">
              <h2>Select Payment Method</h2>
              <button onClick={() => setSelectedPaymentMethod("Card")}>Card</button>
              <button onClick={() => setSelectedPaymentMethod("UPI")}>UPI</button>
              <button onClick={() => setSelectedPaymentMethod("Wallet")}>Wallet</button>
              <button onClick={() => setShowPaymentOptions(false)}>Close</button>
            </div>
          </div>
        )}

        {selectedPaymentMethod === "Card" && (
          <div className="popup">
            <div className="popup-content">
              <h2>Enter Card Details</h2>
              <input type="text" placeholder="Card Holder Name" />
              <input type="text" placeholder="Card Number" maxLength="16" />
              <input type="text" placeholder="Expiry Date (MM/YY)" maxLength="5" />
              <input type="password" placeholder="CVV" maxLength="3" />
              <button onClick={() => setSelectedPaymentMethod(null)}>Submit</button>
            </div>
          </div>
        )}

        {selectedPaymentMethod === "UPI" && (
          <div className="popup">
            <div className="popup-content">
              <h2>Enter UPI ID</h2>
              <input type="text" placeholder="yourupi@bank" />
              <button onClick={() => setSelectedPaymentMethod(null)}>Submit</button>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 ArtGenesis. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Marketplace;
