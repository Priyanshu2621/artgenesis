import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Muraqqa from "./Images/Muraqqa.webp";
import ManWorld from "./Images/ManWorld.webp";
import AbstractVision from "./Images/AbstractVision.webp";
import CityLight from "./Images/CityLight.webp";
import DigitalDream from "./Images/DigitalDream.webp";
import NaturalVibes from "./Images/NaturalVibes.webp";
import SurrealFaces from "./Images/SurrealFaces.webp";
import HorrorFaces from "./Images/HorrorFaces.webp";
import Azuki from "./Images/Azuki.webp";
import Skyborn from "./Images/Skyborn.webp";
import CoolCats from "./Images/CoolCats.webp";
import NiftyIsland from "./Images/NiftyIsland.webp";
import "./BidDetails.css";

const mockBids = [
   { id: "1", name: "Muraqqa", image: Muraqqa, currentBid: 2.5, timeLeft: 300 },
  { id: "2", name: "Man World", image: AbstractVision, currentBid: 4.2, timeLeft: 600 },
  { id: "8", name: "Abstract Vision", image: ManWorld, currentBid: 1.8, timeLeft: 900 },
  { id: "3", name: "City Light", image: CityLight, currentBid: 3.0, timeLeft: 1200 },
  { id: "4", name: "Digital Dream", image: DigitalDream, currentBid: 2.0, timeLeft: 1500 },
  { id: "5", name: "Natural Vibes", image: NaturalVibes, currentBid: 3.5, timeLeft: 1800 },
  { id: "7", name: "Surreal Faces", image: SurrealFaces, currentBid: 5.0, timeLeft: 2100 },
  { id: "6", name: "Surreal Faces", image: HorrorFaces, currentBid: 5.0, timeLeft: 2100 },
  { id: "9", name: "Horror Faces", image: Azuki, currentBid: 2.8, timeLeft: 2400 },
  { id: "10", name: "Horror Faces", image: Skyborn, currentBid: 2.8, timeLeft: 2400 },
  { id: "11", name: "Horror Faces", image: CoolCats, currentBid: 2.8, timeLeft: 2400 },
  { id: "12", name: "Horror Faces", image: NiftyIsland, currentBid: 2.8, timeLeft: 2400 },
];

const BidDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bidData = mockBids.find((item) => item.id === id);

  const [timeLeft, setTimeLeft] = useState(bidData ? bidData.timeLeft : 0);
  const [bidAmount, setBidAmount] = useState(bidData ? bidData.currentBid + 0.1 : 0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleBid = () => {
    if (bidAmount <= bidData.currentBid) {
      alert("Your bid must be higher than the current bid!");
      return;
    }
    alert(`Bid placed successfully: ${bidAmount} ETH`);
    navigate("/active-bids");
  };

  if (!bidData) {
    return <h2>Bid item not found!</h2>;
  }

  return (
    <div className="bid-details-container">
      <h1>📢 Place Your Bid</h1>
      <div className="bid-card">
        <img src={bidData.image} alt={bidData.name} className="bid-image" />
        <h2>{bidData.name}</h2>
        <p>Current Bid: {bidData.currentBid.toFixed(2)} ETH</p>
        <p>Time Left: {timeLeft > 0 ? `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s` : "Auction Ended"}</p>
        <input
          type="number"
          step="0.01"
          min={bidData.currentBid + 0.1}
          value={bidAmount}
          onChange={(e) => setBidAmount(parseFloat(e.target.value))}
          className="bid-input"
        />
        <button className="confirm-bid-button" onClick={handleBid} disabled={timeLeft <= 0}>
          Confirm Bid
        </button>
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

export default BidDetails;
