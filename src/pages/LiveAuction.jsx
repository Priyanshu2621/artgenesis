import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LiveAuction.css";
import MythicalCreatures from "./Images/MythicalCreatures.png";
import SteampunkWorld from "./Images/SteampunkWorld.png";
import UnderwaterKingdom from "./Images/UnderwaterKingdom.png";
import CyberpunkVibes from "./Images/CyberpunkVibes.png";
import FantasyForests from "./Images/FantasyForests.png";
import RetroGaming from "./Images/RetroGaming.png";
import SpaceOdyssey from "./Images/SpaceOdyssey.png";

const auctionItems = [
  { name: "Retro Gaming Nostalgia", image: RetroGaming },
  { name: "Space Odyssey", image: SpaceOdyssey },
  { name: "Steampunk Adventure", image: SteampunkWorld },
  { name: "Underwater Kingdom", image: UnderwaterKingdom },
  { name: "Cyberpunk Vibes", image: CyberpunkVibes },
  { name: "Fantasy Forests", image: FantasyForests },
  { name: "Mythical Creatures", image: MythicalCreatures },
];

const getRandomEthValue = () => (Math.random() * (5 - 1) + 1).toFixed(2); // Random ETH between 1.00 - 5.00

const LiveAuction = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [highestBid, setHighestBid] = useState(getRandomEthValue()); // Random starting bid
  const [bidAmount, setBidAmount] = useState("");
  const [auctionItem, setAuctionItem] = useState({ name: "", image: "" });

  useEffect(() => {
    // Pick a random artwork on mount
    const randomItem = auctionItems[Math.floor(Math.random() * auctionItems.length)];
    setAuctionItem(randomItem);

    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    } else {
      alert("Your bid must be higher than the current highest bid!");
    }
  };

  return (
    <motion.div
      className="auction-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="auction-content">
        <motion.img
          src={auctionItem.image}
          alt={auctionItem.name}
          className="auction-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <h2 className="art-title">{auctionItem.name}</h2> {/* 🎨 Artwork Name Display */}

        <div className="auction-details">
          <motion.div
            className="auction-timer"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ⏳ Time Left: <span>{formatTime(timeLeft)}</span>
          </motion.div>

          <motion.p
            className="current-bid"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            💰 Highest Bid: <span>{highestBid} Pol</span>
          </motion.p>

          <input
            type="number"
            placeholder="Enter bid (ETH)"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            className="bid-input"
          />

          <motion.button
            onClick={placeBid}
            className="bid-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            🚀 Place Bid
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveAuction;
