import React, { useState } from "react";
import { FaEthereum, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BrowserProvider } from "ethers";
import logo from "./Images/Logo.png"
import Muraqqa from "./Images/Muraqqa.webp";
import ManWorld from "./Images/ManWorld.webp";
import AbstractVision from "./Images/AbstractVision.webp";
import CityLight from "./Images/CityLight.webp";
import DigitalDream from "./Images/DigitalDream.webp";
import NaturalVibes from "./Images/NaturalVibes.webp";
import SurrealFaces from "./Images/SurrealFaces.webp";
import HorrorFaces from "./Images/HorrorFaces.webp";
import Spritiual from "./Images/Spritiual.webp";
import Disturbing from "./Images/Disturbing.webp";
import Golden from "./Images/Golden.webp";
import Digital from "./Images/Digital.webp";
import Environment from "./Images/Environment.webp";
import Beach from "./Images/Beach.webp";
import Historical from "./Images/Historical.webp";
import Sun from "./Images/Sun.webp";
import Emiway from "./Images/Emiway.webp";
import Rafftar from "./Images/Rafftar.webp";
import Krsna from "./Images/Krsna.webp";
import Honey from "./Images/Honey.webp";
import Kloud from "./Images/Kloud.webp";
import Omg from "./Images/Omg.webp";
import Rae from "./Images/Rae.webp";
import Latasha from "./Images/Latasha.webp";
import BGMI from "./Images/BGMI.webp";
import COD from "./Images/COD.webp";
import COC from "./Images/COC.webp";
import Racing from "./Images/Racing.webp";
import Bike from "./Images/Bike.webp";
import AngryBird from "./Images/AngryBird.webp";
import Fighting from "./Images/Fighting.webp";
import War from "./Images/War.webp";
import "./Marketplace.css";

const items = [
  { id: 1, title: "Muraqqa:Neural Impressions", price: "0.001 ETH", highestBid: "0.002 ETH", time: "8 hours ago", likes: 56, category: "Art", image:Muraqqa },
  { id: 2, title: "Man World", price: "0.004 ETH", highestBid: "0.006 ETH", time: "8 hours ago", likes: 75, category: "Photos", image:ManWorld},
  { id: 3, title: "Abstract Vision", price: "0.005 ETH", highestBid: "0.007 ETH", time: "6 hours ago", likes: 90, category: "Art", image:AbstractVision },
  { id: 4, title: "City Lights", price: "0.003 ETH", highestBid: "0.005 ETH", time: "10 hours ago", likes: 40, category: "Photos", image:CityLight },
  { id: 5, title: "Digital Dreams", price: "0.006 ETH", highestBid: "0.009 ETH", time: "5 hours ago", likes: 62, category: "Art", image:DigitalDream },
  { id: 6, title: "Nature Vibes", price: "0.002 ETH", highestBid: "0.004 ETH", time: "7 hours ago", likes: 58, category: "Photos", image:NaturalVibes },
  { id: 7, title: "Surreal Faces", price: "0.007 ETH", highestBid: "0.01 ETH", time: "3 hours ago", likes: 80, category: "Art", image:SurrealFaces },
  { id: 8, title: "Horror Faces", price: "0.007 ETH", highestBid: "0.01 ETH", time: "3 hours ago", likes: 80, category: "Art", image:HorrorFaces },
  { id: 9, title: "Digital", price: "0.007 ETH", highestBid: "0.01 ETH", time: "3 hours ago", likes: 80, category: "Art", image:Digital },
  { id: 10, title: "Spritiual", price: "0.007 ETH", highestBid: "0.01 ETH", time: "3 hours ago", likes: 80, category: "Art", image:Spritiual },
  { id: 11, title: "Disturbing", price: "0.007 ETH", highestBid: "0.01 ETH", time: "3 hours ago", likes: 80, category: "Art", image:Disturbing },
  { id: 12, title: "Golden Hour", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Photos", image:Golden },
  { id: 13, title: "Environment", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Photos", image:Environment },
  { id: 14, title: "Beach", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Photos", image:Beach },
  { id: 15, title: "Historical Place", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Photos", image:Historical },
  { id: 16, title: "Sun", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Photos", image:Sun },
  { id: 17, title: "Emiway Bantai", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Emiway },
  { id: 18, title: "Krsna", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Rafftar },
  { id: 19, title: "Rafftar", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Krsna },
  { id: 20, title: "Honey Singh", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Honey },
  { id: 21, title: "WE ARE KLOUD", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Kloud },
  { id: 22, title: "omgkirby", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Omg },
  { id: 23, title: "Rae Isla's", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Rae },
  { id: 24, title: "LATASHA", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Music", image:Latasha },
  { id: 25, title: "Bgmi", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:BGMI },
  { id: 26, title: "COC", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:COC },
  { id: 27, title: "Racing", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:Racing },
  { id: 28, title: "Fighting", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:Fighting },
  { id: 29, title: "Wars", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:War },
  { id: 30, title: "Bike", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:Bike },
  { id: 31, title: "COD", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:COD },
  { id: 32, title: "Angry Bird", price: "0.004 ETH", highestBid: "0.006 ETH", time: "9 hours ago", likes: 70, category: "Game", image:AngryBird },

];


const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [walletAddress, setWalletAddress] = useState("");

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
        <div className="filters">
          <button className={`filter-btn ${selectedCategory === "All" ? "active" : ""}`} onClick={() => setSelectedCategory("All")}>All</button>
          <button className={`filter-btn ${selectedCategory === "Art" ? "active" : ""}`} onClick={() => setSelectedCategory("Art")}>Art</button>
          <button className={`filter-btn ${selectedCategory === "Photos" ? "active" : ""}`} onClick={() => setSelectedCategory("Photos")}>Photos</button>
          <button className={`filter-btn ${selectedCategory === "Music" ? "active" : ""}`} onClick={() => setSelectedCategory("Music")}>Music</button>
          <button className={`filter-btn ${selectedCategory === "Game" ? "active" : ""}`} onClick={() => setSelectedCategory("Game")}>Game</button>
        </div>

        <div className="items-grid">
          {filteredItems.slice(0, 8).map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.title} className="item-image" />

              <div className="item-info">
                <h3>{item.title}</h3>
                <p><FaEthereum /> {item.price}</p>
                <p>Highest Bid: {item.highestBid}</p>
                <p>{item.time}</p>
                <div className="item-footer">
                  <button className="like-btn"><FaHeart /> {item.likes}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more">Load More</button>
      </main>

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

export default Marketplace;
