import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NFTDetails.css";
import Azuki from "./Images/Azuki.webp";
import Skyborn from "./Images/Skyborn.webp";
import CoolCats from "./Images/CoolCats.webp";
import NiftyIsland from "./Images/NiftyIsland.webp";

const relatedNFTs = [
  { image: Azuki, title: "Azuki Elementals", price: "0.29 Pol", floorPrice: 4, totalVolume: "1 Pol" },
  { image: Skyborn, title: "Skyborne - Genesis Immortals", price: "3 Pol", floorPrice: 7, totalVolume: "1.5Pol" },
  { image: CoolCats, title: "Cool Cats", price: "0.52 Pol", floorPrice: 8, totalVolume: "3.2 Pol" },
  { image: NiftyIsland, title: "Nifty Island: Legendary P...", price: "2 Pol", floorPrice: 2, totalVolume: "9 Pol" },
];

const NFTDetails = () => {
  const location = useLocation();
  const initialNFT = location.state || null;
  const [selectedNFT, setSelectedNFT] = useState(initialNFT);
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [bidSuccess, setBidSuccess] = useState(false);
  const [bidError, setBidError] = useState("");

  const handlePlaceBid = () => {
    setIsBidModalOpen(true);
    setBidSuccess(false);
    setBidError("");
  };

  const handleSubmitBid = () => {
    const bidValue = parseFloat(bidAmount);
    if (isNaN(bidValue) || bidValue <= selectedNFT.floorPrice) {
      setBidError(`Bid must be higher than ${selectedNFT.floorPrice} Pol`);
      return;
    }
    setBidSuccess(true);
    setBidError("");
    setTimeout(() => {
      setIsBidModalOpen(false);
      setBidAmount("");
    }, 2000);
  };

  return (
    <div className="nft-details-container">
      {selectedNFT ? (
        <div className="main-nft">
          <img src={selectedNFT.image} alt={selectedNFT.title} className="main-nft-image" />
          <div className="nft-info">
            <h2>{selectedNFT.title}</h2>
            <p>Floor Price: {selectedNFT.floorPrice} </p>
            <p>Total Volume: {selectedNFT.totalVolume}</p>
            <button className="bid-now-btn" onClick={handlePlaceBid}>Place a Higher Bid</button>
          </div>
        </div>
      ) : (
        <p className="select-nft-message">Click on an NFT to view details</p>
      )}

      <h3>More Like This</h3>
      <div className="related-nfts">
        {relatedNFTs.map((nft, index) => (
          <div key={index} className="related-nft-card" onClick={() => setSelectedNFT(nft)}>
            <img src={nft.image} alt={nft.title} className="related-nft-image" />
            <p>{nft.title}</p>
            <span>{nft.price}</span>
          </div>
        ))}
      </div>

      {isBidModalOpen && (
        <div className="bid-modal">
          <div className="bid-modal-content">
            <h3>Place Your Bid</h3>
            <input
              type="number"
              placeholder="Enter bid amount in ETH"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
            <button className="submit-bid-btn" onClick={handleSubmitBid}>Submit Bid</button>
            {bidSuccess && <p className="bid-success-msg">Bid Placed Successfully!</p>}
            {bidError && <p className="bid-error-msg">{bidError}</p>}
            <button className="close-bid-btn" onClick={() => setIsBidModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTDetails;