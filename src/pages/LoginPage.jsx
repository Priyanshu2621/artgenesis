import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaWallet,
} from "react-icons/fa";
import { BrowserProvider } from "ethers";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./Login.css";

const LoginPage = ({ isOpen, onClose, setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setError("");
    setMsg("");
    setLoading(false);
    setUser(null);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        { email, password }
      );

      const username = email.split("@")[0];
      // Set user as an object with username and email
      setUser({ username, email });
      setMsg(res.data.message || "Login successful!");
    } catch (err) {
      setMsg("Login failed: " + (err.response?.data?.error || err.message));
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log("Connected Wallet Address:", address);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const googleEmail = result.user.email || "";
      if (googleEmail) {
        const username = googleEmail.split("@")[0];
        // Set user as an object with username and email
        setUser({ username, email: googleEmail });
        setMsg("Google login successful!");
      }
    } catch (error) {
      console.error("Google login failed:", error.message);
      setError("Google login failed. Try again.");
    }
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Welcome Back</h2>
        <p className="sub-text">Login to continue exploring NFTs</p>

        {user && (
          <p className="user-info">
            Logged in as: <strong>{user.username}</strong> ({user.email})
          </p>
        )}

        {error && <p className="error-message">{error}</p>}
        {msg && <p className="info-message">{msg}</p>}

        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!!msg.toLowerCase().includes("successful")}
          />
        </div>

        <div className="input-container">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!!msg.toLowerCase().includes("successful")}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="login-options">
          <a href="forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading || msg.toLowerCase().includes("successful")}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="alternative-login">
          <p>Or login with</p>
          <button className="google-btn" onClick={handleGoogleLogin}>
            <FaGoogle className="login-icon" /> Google
          </button>

          <button className="wallet-btn" onClick={connectWallet}>
            <FaWallet className="login-icon" />
            {walletAddress ? "Connected" : "Wallet"}
          </button>
        </div>

        <button
          className="close-btn"
          onClick={() => {
            resetForm();
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
