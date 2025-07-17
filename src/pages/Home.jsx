import React, { useState, useEffect } from "react";
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import logo from "./Images/Logo.png";
import RareNFT from "./Images/RareNFT.jpg";
import LiveAuction from "./Images/LiveAuction.jpg";
import NFTGallery from "./NFTGallery";
import Hackatao from "./Images/Hackatao.jpg";
import Tobi from "./Images/Tobi.jpg";
import Reeza from "./Images/Reeza.jpg";
import Beach from "./Images/Beach.webp";
import { GiFire } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Home.css";
import { BrowserProvider } from "ethers";
import LoginPage from "../pages/LoginPage";

const Home = ({ setUser, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [showUserPopup, setShowUserPopup] = useState(false); // new state for popup

  // Close menu and user popup when clicking outside
  useEffect(() => {
    const closeAll = () => {
      setIsMenuOpen(false);
      setShowUserPopup(false);
    };

    if (isMenuOpen || showUserPopup) {
      document.addEventListener("click", closeAll);
    } else {
      document.removeEventListener("click", closeAll);
    }

    return () => {
      document.removeEventListener("click", closeAll);
    };
  }, [isMenuOpen, showUserPopup]);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent document click listener closing menu immediately
    setIsMenuOpen(!isMenuOpen);
  };

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

  // New handler for login/user button click
  const handleUserClick = (e) => {
    e.stopPropagation(); // Prevent closing popup immediately
    if (user) {
      setShowUserPopup(!showUserPopup); // toggle popup
    } else {
      setShowLogin(true);
    }
  };

  // Logout function
  const handleLogout = () => {
    setUser(null);
    setWalletAddress("");
    setShowUserPopup(false);
  };

  return (
    <div className="dashboard">
      <div>
        {showLogin && (
          <LoginPage
            isOpen={showLogin}
            onClose={() => setShowLogin(false)}
            setUser={setUser}
          />
        )}
      </div>
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
          <div className="actions" style={{ position: "relative" }}>
            <li>
              <Link className="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/marketplace">
                Marketplace
              </Link>
            </li>
            <li>
              <Link className="Link" to="/AboutUs">
                AboutUs
              </Link>
            </li>

            <button className="wallet-btn-home" onClick={connectWallet}>
              {walletAddress
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                : "Connect Wallet"}
            </button>

            <button className="login-button" onClick={handleUserClick}>
              {user ? user.username : "Login"}
            </button>

            {user && showUserPopup && (
              <div
                className="user-popup"
                onClick={(e) => e.stopPropagation()}
              >
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}

            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? "Close Menu" : "Open Menu"}
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li>
                <Link className="Links" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="Links" to="/marketplace">
                  Market
                </Link>
              </li>
              <li>
                <Link className="Links" to="/ActiveBids">
                  Active Bids
                </Link>
              </li>
              <li>
                <Link className="Links" to="/MyPortfoliyo">
                  My Portfolio
                </Link>
              </li>
              <li>
                <Link className="Links" to="/Wallet">
                  Wallet
                </Link>
              </li>
            </ul>
          </div>
        )}

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
              <div className="top-creator-header">
                <h2>
                  Top Creator <GiFire />
                </h2>
                <a href="https://influencermarketinghub.com/top-nft-creators/">
                  See more
                </a>
              </div>
              <ul className="creators-list">
                {[
                  { name: "Hackatao", handle: "@hackatao", img: Hackatao },
                  { name: "Mike Parisella", handle: "@slimesunday", img: Beach },
                  { name: "Reza Afshar", handle: "@rezaa_afsharr", img: Reeza },
                  {
                    name: "Tobi Schnorpfeil",
                    handle: "@tschnorpfei",
                    img: Tobi,
                  },
                ].map((creator, index) => {
                  const [isFollowing, setIsFollowing] = React.useState(true);
                  return (
                    <li key={index}>
                      <img src={creator.img} alt={`Creator ${index + 1}`} />
                      <div>
                        <p>{creator.name}</p>
                        <span>{creator.handle}</span>
                      </div>
                      <button
                        className={`follow-btn ${
                          isFollowing ? "following" : ""
                        }`}
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <NFTGallery />

          <section className="live-auction">
            <div className="auction-card">
              <img src={LiveAuction} alt="Live Auction" />
              <div className="Live">
                <h1>Live Auction</h1>
                <Link to="/LiveAuction">
                  <button className="live-button">Explore Now</button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h2>Marketplace</h2>
              <ul>
                <li>
                  <Link className="Links" to="/marketplace">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link className="Links" to="/marketplace">
                    Art
                  </Link>
                </li>
                <li>
                  <Link className="Links" to="/marketplace">
                    Game
                  </Link>
                </li>
                <li>
                  <Link className="Links" to="/marketplace">
                    Music
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h2>Resources</h2>
              <ul>
                <li>
                  <Link className="Links" to="/HelpCenter">
                    HelpCenter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h2>Community</h2>
              <ul>
                <li>
                  <Link className="Links" to="/AboutUs">
                    AboutUs
                  </Link>
                </li>
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
