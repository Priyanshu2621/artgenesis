import React from "react";
import Priyanshu from "./Images/Priyanshu.jpg";
import Manas from "./Images/Manas.jpg";
import Ayush from "./Images/Ayush.jpg";
import Classic from "./Images/Classic.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1>About ArtGensis</h1>
        <p>ArtGensis is a *next-gen NFT marketplace* built on *Polygon*, offering *low gas fees and fast transactions*. Designed for *artists and collectors*, it provides *better royalties, AI-powered discovery, and social engagement features*. With *multi-chain support, fractional NFTs, and dynamic art*, ArtGensis is shaping the *future of digital art*. 🚀🎨</p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            ArtGensis empowers digital artists and collectors with a seamless, low-cost, and eco-friendly NFT marketplace. Built on Polygon, we ensure fast, secure, and accessible transactions while bridging the gap between traditional art and Web3 innovation.🚀🎨
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
              To revolutionize the *digital art space* by creating a *vibrant, inclusive, and decentralized* marketplace. We envision a future where artists *thrive without barriers*, collectors *discover unique masterpieces*, and blockchain technology *redefines art ownership** globally.🌎🎭
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={Priyanshu} alt="Founder" />
            <h3>Priyanshu Sharma</h3>
            <p>Frontend Devloper & UI/UX Designer</p>
          </div>
          <div className="team-card">
            <img src={Ayush} alt="Designer" />
            <h3>Ayush Raj</h3>
            <p>AWS Devloper</p>
          </div>
          <div className="team-card">
            <img src={Classic} alt="Developer" />
            <h3>Akok Albino</h3>
            <p>Backend Devlopment</p>
          </div>
          <div className="team-card">
            <img src={Manas} alt="Developer" />
            <h3>Manas Suthar</h3>
            <p>Researcher</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;