import React, { useState } from "react";
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

import logo from "./Images/Logo.png";
import RareNFT from "./Images/RareNFT.jpg";
import LiveAuction from "./Images/LiveAuction.jpg";
import NFTGallery from "./NFTGallery";
import Hackatao from "./Images/Hackatao.jpg";
import Tobi from "./Images/Tobi.jpg";
import Reeza from "./Images/Reeza.jpg";
import Mike from "./Images/Mike.jpg";
import { GiFire } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Home.css";
import LoginPage from "../pages/LoginPage";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboard">
      <main className="content">
        <header className="header">
          <div>
            <img className="logo" src={logo} alt="Logo" />
          </div>
          <input
            type="text"
            className="search"
            placeholder="Search items, collections, and users"
          />
          <div className="actions">
            <h3>Home</h3>
            <li><Link className="Link" to="/marketplace">Marketplace</Link></li>
            <li><Link className="Link" to="/AboutUs">AboutUs</Link></li>
            <button className="icon">🌞</button>
            <button className="icon">🔔</button>
            <button className="login-button" onClick={() => setShowLogin(true)}>Login</button>
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? "Close Menu" : "Open Menu"}
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Dashboard</li>
              <li>Market</li>
              <li>Active Bids</li>
              <li>Favorites</li>
              <li>My Portfolio</li>
              <li>Wallet</li>
            </ul>
          </div>
        )}

        {showLogin && <LoginPage onClose={() => setShowLogin(false)} />} 

        <div className="main-section">
          <section className="banner">
            <div className="banner-right">
              <img className="Rare" src={RareNFT} alt="Rare NFT" />
              <div className="banner-left">
                <h1>
                  Collect Your <br /> Rare <span>NFT</span> Here
                </h1>
                <Link to="/ExploreRareNFTs">
                <button className="explore-btn">Explore Now</button>
                </Link>
              </div>
            </div>
          </section>
          <section className="top-creator">
            <div className="top-creators">
              <div className="header">
                <h2>Top Creator <GiFire /></h2>
                <a href="#">See more</a>
              </div>
              <ul className="creators-list">
                <li>
                  <img src={Hackatao} alt="Creator 1" />
                  <div>
                    <p>Hackatao</p>
                    <span>@hackatao</span>
                  </div>
                  <button className="follow-btn">Following</button>
                </li>
                <li>
                  <img src={Mike} alt="Creator 2" />
                  <div>
                    <p>Mike Parisella</p>
                    <span>@slimesunday</span>
                  </div>
                  <button className="follow-btn">Following</button>
                </li>
                <li>
                  <img src={Reeza} alt="Creator 3" />
                  <div>
                    <p>Reza Afshar</p>
                    <span>@rezaa_afsharr</span>
                  </div>
                  <button className="follow-btn">Following</button>
                </li>
                <li>
                  <img src={Tobi} alt="Creator 4" />
                  <div>
                    <p> Tobi Schnorpfeil</p>
                    <span>@tschnorpfei</span>
                  </div>
                  <button className="follow-btn">Following</button>
                </li>
              </ul>
            </div>
          </section>
          <NFTGallery />
          <section className="live-auction">
            <div className="auction-card">
              <img src={LiveAuction} alt="Live Auction" />
              <div className="Live">
                <h1>
                  Live Auction
                </h1>
                <button className="live-button">Explore Now</button>
              </div>
            </div>
          </section>
        </div>
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Marketplace</h3>
            <ul>
              <li>All NFTs</li>
              <li>Art</li>
              <li>Gaming</li>
              <li>Memberships</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>Help Center</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li>Forums</li>
              <li>Creators</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div className="footer-section social-icons">
            <h3>Follow Us</h3>
            <FaTwitter className="social-icon" />
            <FaDiscord className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
      </footer>
      </main>
    </div>
    
  );
};

export default Home;
