import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaWallet } from "react-icons/fa";
import "./Login.css";

const LoginPage = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    console.log("Logging in with:", email, password);
    setError("");
    onClose(); // Close modal after login
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleWalletLogin = () => {
    console.log("Wallet login clicked");
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Welcome Back</h2>
        <p className="sub-text">Login to continue exploring NFTs</p>

        {error && <p className="error-message">{error}</p>}

        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="login-options">
          <a href="forgot-password" className="forgot-password">Forgot Password?</a>
        </div>

        <button className="login-btn" onClick={handleLogin}>Login</button>

        <div className="alternative-login">
          <p>Or login with</p>
          <button className="google-btn" onClick={handleGoogleLogin}>
            <FaGoogle className="login-icon" /> Google
          </button>
          <button className="wallet-btn" onClick={handleWalletLogin}>
            <FaWallet className="login-icon" /> Wallet
          </button>
        </div>

        

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginPage;
