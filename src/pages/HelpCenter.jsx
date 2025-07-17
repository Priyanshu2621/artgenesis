import React, { useState } from "react";
import "./HelpCenter.css";
import { FaSearch, FaEnvelope, FaPhone, FaRobot, FaLightbulb, FaRocket, FaTimes, FaPaperPlane, FaArrowLeft } from "react-icons/fa";

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [query, setQuery] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const faqs = [
    { question: "🚀 How to buy an NFT?", answer: "Simply connect your wallet and bid on your favorite NFT." },
    { question: "🔗 What is Polygon network?", answer: "Polygon is a fast and low-cost blockchain used for NFTs." },
    { question: "💰 How to sell an NFT?", answer: "Go to your profile, select your NFT, and list it for sale." },
    { question: "⚡ Is there a transaction fee?", answer: "Yes, a minimal gas fee is required to process transactions." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openModal = (type) => {
    let content;
    switch (type) {
      case "email":
        content = {
          title: "📧 Email Us",
          details: (
            <div>
              <p>You can reach us at support@artgensis.com. We usually reply within 24 hours.</p>
              <input
                type="text"
                placeholder="Enter your query..."
                // value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="query-input"
              />
              <button className="send-button" onClick={() => alert('Query Sent!')}><FaPaperPlane /> Send</button>
              <button className="back-button" onClick={closeModal}><FaArrowLeft /> Back</button>
            </div>
          )
        };
        break;
      case "call":
        content = {
          title: "📞 Call Us",
          details: (
            <div>
              <p>Our support team is available at +1 800 123 4567 from 9 AM to 6 PM (UTC).</p>
              <button className="call-button" onClick={() => alert('Calling...')}>Call Now</button>
              <button className="back-button" onClick={closeModal}><FaArrowLeft /> Back</button>
            </div>
          )
        };
        break;
      case "chat":
        content = {
          title: "🤖 Chat with Bot",
          details: (
            <div>
              <p>Our AI assistant is here 24/7 to answer your queries instantly.</p>
              <div className="chatbox">
                <div className="chat-messages">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={msg.user ? "user-message" : "bot-message"}>{msg.text}</div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="query-input"
                />
                <button className="send-button" onClick={sendMessage}><FaPaperPlane /> Send</button>
              </div>
              <button className="back-button" onClick={closeModal}><FaArrowLeft /> Back</button>
            </div>
          )
        };
        break;
      default:
        content = null;
    }
    setModalContent(content);
  };

  const sendMessage = () => {
    if (chatInput.trim() === "") return;
    const newMessages = [...chatMessages, { text: chatInput, user: true }];
    setChatMessages(newMessages);
    setChatInput("");
    setTimeout(() => {
      setChatMessages([...newMessages, { text: "I am here to help!", user: false }]);
    }, 1000);
  };

  const closeModal = () => {
    setModalContent(null);
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
          <div className="contact-card" onClick={() => openModal("email")}>
            <FaEnvelope className="contact-icon" />
            <p>Email Us</p>
          </div>
          <div className="contact-card" onClick={() => openModal("call")}>
            <FaPhone className="contact-icon" />
            <p>Call Us</p>
          </div>
          <div className="contact-card" onClick={() => openModal("chat")}>
            <FaRobot className="contact-icon" />
            <p>Chat with Bot</p>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}><FaTimes /></button>
            <h2>{modalContent.title}</h2>
            <div>{modalContent.details}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpCenter;
