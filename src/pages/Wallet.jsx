import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "./Wallet.css";
import { ethers } from "ethers";
import { FaTimes, FaWallet, FaEthereum } from "react-icons/fa";
import { motion } from "framer-motion";

const Wallet = ({ onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);

        const signer = await provider.getSigner();
        const balanceWei = await signer.provider.getBalance(accounts[0]);
        const balanceEth = ethers.formatEther(balanceWei);
        setBalance(balanceEth);
        setError("");
      } catch (err) {
        setError("Failed to connect wallet");
      }
    } else {
      setError("MetaMask not detected!");
    }
  };

  // Handle Close: Redirect to Home if onClose is not passed
  const handleClose = () => {
    if (onClose) {
      onClose(); // Close the popup
    } else {
      navigate("/"); // Redirect to home page
    }
  };

  return (
    <div className="wallet-popup-overlay">
      <motion.div 
        className="wallet-popup advanced-wallet"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={handleClose}><FaTimes /></button>
        <header className="wallet-header">
          <FaWallet className="wallet-icon" />
          <h1>Connect Your Wallet</h1>
          <p>Securely connect your MetaMask wallet to explore NFTs.</p>
        </header>

        <div className="wallet-content">
          {walletAddress ? (
            <motion.div 
              className="wallet-info"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p><strong>Wallet Address:</strong> {walletAddress}</p>
              <p><strong>Balance:</strong> {balance} <FaEthereum /></p>
              <button className="disconnect-btn" onClick={() => setWalletAddress("")}>Disconnect</button>
            </motion.div>
          ) : (
            <motion.button 
              className="wallet-btn" 
              onClick={connectWallet}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🔗 Connect Wallet
            </motion.button>
          )}
          {error && <p className="error">{error}</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default Wallet;
