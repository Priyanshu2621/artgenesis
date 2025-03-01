import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Muraqqa from "./Images/Muraqqa.webp";
import ManWorld from "./Images/ManWorld.webp";
import AbstractVision from "./Images/AbstractVision.webp";
import CityLight from "./Images/CityLight.webp";
import DigitalDream from "./Images/DigitalDream.webp";
import NaturalVibes from "./Images/NaturalVibes.webp";
import SurrealFaces from "./Images/SurrealFaces.webp";
import HorrorFaces from "./Images/HorrorFaces.webp";
import "./ActiveBids.css";

const dummyBids = [
    {
        id: 1,
        name: "Cyberpunk Warrior",
        image: Muraqqa,
        currentBid: 2.5,
        timeLeft: 3600, // 1 hour in seconds
      },
      {
        id: 2,
        name: "Neon Ape",
        image: AbstractVision,
        currentBid: 3.1,
        timeLeft: 5400, // 1.5 hours in seconds
      },
      {
        id: 3,
        name: "City Light",
        image: CityLight,
        currentBid: 1.8,
        timeLeft: 7200, // 2 hours in seconds
      },
      {
        id: 4,
        name: "DD",
        image: DigitalDream,
        currentBid: 1.8,
        timeLeft: 7200, // 2 hours in seconds
      },
      {
        id: 5,
        name: "Nature",
        image: NaturalVibes,
        currentBid: 1.8,
        timeLeft: 7200, // 2 hours in seconds
      },
      {
        id: 6,
        name: "Horror",
        image: HorrorFaces,
        currentBid: 1.8,
        timeLeft: 7200, // 2 hours in seconds
      },
      {
        id: 7,
        name: "Faces",
        image: SurrealFaces,
        currentBid: 1.8,
        timeLeft: 7200, // 2 hours in seconds
      },
      {
        id: 8,
        name: "ManWorld",
        image: ManWorld,
        currentBid: 1.8,
        timeLeft: 7200, // 2 hours in seconds
      },
];

const ActiveBids = () => {
  const [bids, setBids] = useState(dummyBids);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setBids((prevBids) =>
        prevBids.map((bid) =>
          bid.timeLeft > 0 ? { ...bid, timeLeft: bid.timeLeft - 1 } : bid
        )
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="active-bids-container">
      <h1>🔥 Active Bids 🔥</h1>
      <div className="bids-list">
        {bids.map((bid) => (
          <div key={bid.id} className="bid-card">
            <img src={bid.image} alt={bid.name} className="bid-image" />
            <h2>{bid.name}</h2>
            <p>Current Bid: {bid.currentBid.toFixed(2)} ETH</p>
            <p className="time-left">
              Time Left: {bid.timeLeft > 0 ? formatTime(bid.timeLeft) : "Ended"}
            </p>
            <button
              className="bid-button"
              onClick={() => navigate(`/bid/${bid.id}`, { state: { bid } })}
              disabled={bid.timeLeft <= 0}
            >
              {bid.timeLeft > 0 ? "Place Higher Bid" : "Auction Ended"}
            </button>
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

export default ActiveBids;
