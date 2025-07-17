import React, { useState, useEffect } from "react";
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./LiveAuction.css";
import Swag from "./Images/Swag.jpg";
import Underwater from "./Images/underwater.jpg";
import clg from "./Images/clg.jpg";
import lights from "./Images/lights.jpg";
import direction from "./Images/direction.jpg";
import RetroGaming from "./Images/RetroGaming.png";
import SpaceOdyssey from "./Images/SpaceOdyssey.png";
import logo from "./Images/Logo.png";

const auctionItems = [
  { name: "Retro Gaming Nostalgia", image: RetroGaming },
  { name: "Space Odyssey", image: SpaceOdyssey },
  { name: "clg", image: clg },
  { name: "lights", image: lights },
  { name: "Underwater", image: Underwater },
  { name: "direction", image: direction },
  { name: "Swag", image: Swag },
];
const getRandomEthValue = () => (Math.random() * (5 - 1) + 1).toFixed(2);

const LiveAuction = () => {
  const [timeLeft, setTimeLeft] = useState(600);
  const [highestBid, setHighestBid] = useState(getRandomEthValue());
  const [bidAmount, setBidAmount] = useState("");
  const [auctionItem, setAuctionItem] = useState({ name: "", image: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bidTimer, setBidTimer] = useState(null);
  const [bidCountdown, setBidCountdown] = useState(0);

  useEffect(() => {
    const randomItem = auctionItems[Math.floor(Math.random() * auctionItems.length)];
    setAuctionItem(randomItem);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (bidCountdown > 0) {
      const countdownInterval = setInterval(() => {
        setBidCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [bidCountdown]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const placeBid = () => {
    const newBid = parseFloat(bidAmount);
    if (newBid > highestBid) {
      setHighestBid(newBid.toFixed(2));
      setBidAmount("");
      alert("Your bid has been placed successfully!");
      
      if (bidTimer) clearTimeout(bidTimer);
      setBidCountdown(10);
      setBidTimer(
        setTimeout(() => {
          alert("NFT bought successfully!");
          const nextItem = auctionItems[Math.floor(Math.random() * auctionItems.length)];
          setAuctionItem(nextItem);
          setHighestBid(getRandomEthValue());
          setBidCountdown(0);
        }, 10000)
      );
    } else {
      alert("Your bid must be higher than the current highest bid!");
    }
  };

  return (
    <div className="dashboard">
      <header className="Live-header">
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <input type="text" className="search" placeholder="Search items, collections, and users" />
        <div className="actions-live">
          <li><Link className="Link-Live" to="/">Home</Link></li>
          <li><Link className="Link-Live" to="/marketplace">Marketplace</Link></li>
          <li><Link className="Link-Live" to="/AboutUs">AboutUs</Link></li>
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            <li><Link className="Links" to="/MyPortfolio">My Portfolio</Link></li>
            <li><Link className="Links" to="/Wallet">Wallet</Link></li>
          </ul>
        </div>
      )}

      <motion.div className="auction-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="auction-content">
          <motion.img src={auctionItem.image} alt={auctionItem.name} className="auction-image" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
          <h2 className="art-title">{auctionItem.name}</h2>
          <div className="auction-details">
            <div className="auction-timer">⏳ Time Left: <span>{formatTime(timeLeft)}</span></div>
            <p className="current-bid">💰 Highest Bid: <span>{highestBid} Pol</span></p>
            {bidCountdown > 0 && <p className="bid-countdown">⏳ Bid Closing In: {bidCountdown}s</p>}
            <input type="number" placeholder="Enter bid (ETH)" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} className="bid-input" />
            <motion.button onClick={placeBid} className="bid-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>🚀 Place Bid</motion.button>
          </div>
        </div>
      </motion.div>
   
      <footer className="footer-Live">
                <div className="footer-content-Live">
                  <div className="footer-section-Live">
                    <h2>Marketplace</h2>
                    <ul>
                      <li><Link className="Links" to="/marketplace">Marketplace</Link></li>
                      <li><Link className="Links" to="/marketplace">Art</Link></li>
                      <li><Link className="Links" to="/marketplace">Game</Link></li>
                      <li><Link className="Links" to="/marketplace">Music</Link></li>
                    </ul>
                  </div>
                  <div className="footer-section-Live">
                    <h2>Resources</h2>
                    <ul>
                      <li><Link className="Links" to="/HelpCenter">HelpCenter</Link></li>
                    </ul>
                  </div>
                  <div className="footer-section-Live">
                    <h2>Community</h2>
                    <ul>
                      <li><Link className="Links" to="/AboutUs">AboutUs</Link></li>
                    </ul>
                  </div>
                  <div className="footer-section social-icons-Live">
                    <h3>Follow Us</h3>
                    <FaTwitter className="social-icon-Live" />
                    <FaDiscord className="social-icon-Live" />
                    <FaInstagram className="social-icon-Live" />
                  </div>
                </div>
              </footer>
    </div>
  );
};

export default LiveAuction;
