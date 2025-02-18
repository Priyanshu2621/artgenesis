import React, { useState } from "react";
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
import CulturalHeritage from "./Images/CulturalHeritage.png";
import SpaceOdyssey from "./Images/SpaceOdyssey.png";

const dummyNFTs = [
  {
    id: 1,
    name: "FuturisticCities",
    image:FuturisticCities,
    price: "2.5",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 2,
    name: "MythicalCreatures",
    image: MythicalCreatures,
    price: "3.1",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 3,
    name: "SteampunkWorld",
    image: SteampunkWorld,
    price: "3.1",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 4,
    name: "UnderwaterKingdom",
    image: UnderwaterKingdom,
    price: "3.1",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 5,
    name: "CyberpunkVibes",
    image: CyberpunkVibes,
    price: "3.1",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 6,
    name: "FantasyForests",
    image: FantasyForests,
    price: "3.1",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 7,
    name: "RetroGaming",
    image: RetroGaming,
    price: "3.1",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 8,
    name: "SurrealDreamscape",
    image: SurrealDreamscape,
    price: "3.1",
    category: "Art",
    blockchain: "Polygon",
  },
  {
    id: 9,
    name: "HistoricalEras",
    image: HistoricalEras,
    price: "3.1",
    category: "Collectibles",
    blockchain: "Polygon",
  },
  {
    id: 10,
    name: "AbstractArt",
    image: AbstractArt,
    price: "3.1",
    category: "Collectibles",
    blockchain: "Polygon",
  },
  {
    id: 11,
    name: "CulturalHeritage",
    image: CulturalHeritage,
    price: "3.1",
    category: "Collectibles",
    blockchain: "Polygon",
  },
  {
    id: 12,
    name: "SpaceOdyssey",
    image: SpaceOdyssey,
    price: "3.1",
    category: "Collectibles",
    blockchain: "All Blockchains",
  },
  // Add more dummy NFTs
];

const ExploreRareNFTs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [blockchain, setBlockchain] = useState("All");

  const filteredNFTs = dummyNFTs.filter(
    (nft) =>
      (category === "All" || nft.category === category) &&
      (blockchain === "All" || nft.blockchain === blockchain) &&
      nft.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="explore-container">
      <h1>Explore Rare NFTs</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search NFTs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
            <p className="nft-price">{nft.price} MATIC</p>
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