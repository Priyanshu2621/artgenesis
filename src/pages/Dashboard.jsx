import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import SettingsPage from "./Setting";
import Emiway from "./Images/Emiway.webp";
import NaturalVibes from "./Images/NaturalVibes.webp";
import HorrorFaces from "./Images/HorrorFaces.webp";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">ArtGensis</h2>
        <ul>
          <li onClick={() => setActiveSection("overview")}>Overview</li>
          <li onClick={() => setActiveSection("myNFTs")}>My NFTs</li>
          <li><Link className="Links" to="/Marketplace">Market</Link></li>
          <li onClick={() => setActiveSection("settings")}>Setting</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeSection === "overview" && (
          <div>
            <h1>Overview</h1>
            <div className="overview-boxes">
              <div className="box">Total NFTs: 200</div>
              <div className="box">Active Listings: 56</div>
              <div className="box">Recent Sales: 30 Pol</div>
            </div>
            <div>
              <h1>My NFTs</h1>
              <div className="nft-list">
                <div className="nft-card">
                  <img src={Emiway} alt="Emiway" className="nft-image" />
                  <p>Emiway - 1.2 Eth</p>
                </div>

                <div className="nft-card">
                  <img src={NaturalVibes}alt="NaturalVibes" className="nft-image" />
                  <p>NaturalVibes - 3.4 Eth</p>
                </div>

                <div className="nft-card">
                  <img src={HorrorFaces} alt="HorrorFaces" className="nft-image" />
                  <p>HorrorFaces - 2.4 Eth</p>
                </div>

              </div>
            </div>
          </div>
        )}

        {activeSection === "myNFTs" && (
          <div>
            <h1>My NFTs</h1>
            <div className="nft-list">
            <div className="nft-card">
                  <img src={Emiway} alt="Emiway" className="nft-image" />
                  <p>Emiway - 1.2 Eth</p>
                </div>

                <div className="nft-card">
                  <img src={NaturalVibes}alt="NaturalVibes" className="nft-image" />
                  <p>NaturalVibes - 3.4 Eth</p>
                </div>

                <div className="nft-card">
                  <img src={HorrorFaces} alt="HorrorFaces" className="nft-image" />
                  <p>HorrorFaces - 2.4 Eth</p>
                </div>
            </div>
          </div>
        )}

        {activeSection === "market" && (
          <div>
            {/* <h1>Market</h1> */}
            <li><Link className="Links" to="/marketplace">Marketplace</Link></li>
          </div>
        )}

        {activeSection === "settings" && <SettingsPage />}
      </div>
    </div>
  );
};

export default Dashboard;
