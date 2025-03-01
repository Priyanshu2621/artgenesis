import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NFTDetails.css";
import Azuki from "./Images/Azuki.webp";
import Skyborn from "./Images/Skyborn.webp";
import CoolCats from "./Images/CoolCats.webp";
import NiftyIsland from "./Images/NiftyIsland.webp";

const relatedNFTs = [
  { image: Azuki, title: "Azuki Elementals", price: "0.29 ETH", floorPrice: "0.28 ETH", totalVolume: "2.1K ETH" },
  { image: Skyborn, title: "Skyborne - Genesis Immortals", price: "0.04 ETH", floorPrice: "0.03 ETH", totalVolume: "1.5K ETH" },
  { image: CoolCats, title: "Cool Cats", price: "0.52 ETH", floorPrice: "0.50 ETH", totalVolume: "3.2K ETH" },
  { image: NiftyIsland, title: "Nifty Island: Legendary P...", price: "0.19 ETH", floorPrice: "0.18 ETH", totalVolume: "900 ETH" },
];

const NFTDetails = () => {
  const location = useLocation();
  const initialNFT = location.state || null;
  const [selectedNFT, setSelectedNFT] = useState(initialNFT);

  return (
    <div className="nft-details-container">
      {selectedNFT ? (
        <div className="main-nft">
          <img src={selectedNFT.image} alt={selectedNFT.title} className="main-nft-image" />
          <div className="nft-info">
            <h2>{selectedNFT.title}</h2>
            <p>Floor Price: {selectedNFT.floorPrice}</p>
            <p>Total Volume: {selectedNFT.totalVolume}</p>
            <button className="bid-now-btn">Place a Higher Bid</button>
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
    </div>
  );
};

export default NFTDetails;
