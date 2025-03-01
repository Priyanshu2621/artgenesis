import React from "react";
import "./MyPortfoliyo.css";
import NaturalVibes from "./Images/NaturalVibes.webp";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="headers">
        <h1>ArtGensis</h1>
        <p>Discover, Collect & Sell NFTs Seamlessly</p>
      </header>

      <section className="about">
        <img src={NaturalVibes} alt="ArtGensis Preview" className="project-image" />
        <div className="about-text">
          <h2>About ArtGensis</h2>
          <p>
            ArtGensis is an NFT marketplace where you can explore, buy, and sell digital art on **Polygon**. 
            With **low gas fees** and a **user-friendly interface**, we make NFT trading simple and efficient.
          </p>
          <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
            <button className="btn">Visit Live Project</button>
          </a>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">⚡ Fast Transactions</div>
          <div className="feature-card">💰 Low Gas Fees</div>
          <div className="feature-card">🎨 Unique Art Collections</div>
          <div className="feature-card">🔗 Secure & Decentralized</div>
        </div>
      </section>

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

export default Portfolio;
