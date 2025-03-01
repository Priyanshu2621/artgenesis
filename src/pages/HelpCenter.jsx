import React, { useState } from "react";
import "./HelpCenter.css";
import { FaSearch, FaEnvelope, FaPhone, FaRobot, FaLightbulb, FaRocket } from "react-icons/fa";

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "🚀 How to buy an NFT?", answer: "Simply connect your wallet and bid on your favorite NFT." },
    { question: "🔗 What is Polygon network?", answer: "Polygon is a fast and low-cost blockchain used for NFTs." },
    { question: "💰 How to sell an NFT?", answer: "Go to your profile, select your NFT, and list it for sale." },
    { question: "⚡ Is there a transaction fee?", answer: "Yes, a minimal gas fee is required to process transactions." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-center">
      <div className="hero">
        <h1><FaLightbulb className="help-icon" /> Get the Help You Need</h1>
        <p>If you're feeling stuck, we're here to help you out.</p>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Ask a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="faq-section">
        <h2><FaRocket /> Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <p className="faq-answer" style={{ display: activeIndex === index ? "block" : "none" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <h2>Need More Help? Reach Out!</h2>
        <div className="contact-options">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p>Email Us</p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <p>Call Us</p>
          </div>
          <div className="contact-card">
            <FaRobot className="contact-icon" />
            <p>Chat with Bot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
