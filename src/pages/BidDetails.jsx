import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Muraqqa from "./Images/Muraqqa.webp";
import ManWorld from "./Images/ManWorld.webp";
import AbstractVision from "./Images/AbstractVision.webp";
import CityLight from "./Images/CityLight.webp";
import DigitalDream from "./Images/DigitalDream.webp";
import NaturalVibes from "./Images/NaturalVibes.webp";
import SurrealFaces from "./Images/SurrealFaces.webp";
import HorrorFaces from "./Images/HorrorFaces.webp";
import Azuki from "./Images/Azuki.webp";
import Skyborn from "./Images/Skyborn.webp";
import CoolCats from "./Images/CoolCats.webp";
import NiftyIsland from "./Images/NiftyIsland.webp";
import "./BidDetails.css";

// Mock data for bids
const mockBids = [
   { id: "1", name: "Muraqqa", image: Muraqqa, currentBid: 2.5, timeLeft: 300 },
   { id: "2", name: "Man World", image: AbstractVision, currentBid: 4.2, timeLeft: 600 },
   { id: "8", name: "Abstract Vision", image: ManWorld, currentBid: 1.8, timeLeft: 900 },
   { id: "3", name: "City Light", image: CityLight, currentBid: 3.0, timeLeft: 1200 },
   { id: "4", name: "Digital Dream", image: DigitalDream, currentBid: 2.0, timeLeft: 1500 },
   { id: "5", name: "Natural Vibes", image: NaturalVibes, currentBid: 3.5, timeLeft: 1800 },
   { id: "7", name: "Surreal Faces", image: SurrealFaces, currentBid: 5.0, timeLeft: 2100 },
   { id: "6", name: "Horror Faces", image: HorrorFaces, currentBid: 5.0, timeLeft: 2100 },
   { id: "9", name: "Azuki", image: Azuki, currentBid: 2.8, timeLeft: 2400 },
   { id: "10", name: "Skyborn", image: Skyborn, currentBid: 2.8, timeLeft: 2400 },
   { id: "11", name: "CoolCats", image: CoolCats, currentBid: 2.8, timeLeft: 2400 },
   { id: "12", name: "Nifty Island", image: NiftyIsland, currentBid: 2.8, timeLeft: 2400 },
];

const BidDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bidData = mockBids.find((item) => item.id === id);

  // States for payment, form, and NFTs
  const [paymentOption, setPaymentOption] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: "", expiry: "", cvv: "", paypalEmail: "", cryptoAddress: "" });
  const [error, setError] = useState('');
  const [nftName, setNftName] = useState('');
  const [nftPrice, setNftPrice] = useState('');
  const [timeLeft, setTimeLeft] = useState(bidData ? bidData.timeLeft : 0);
  const [bidAmount, setBidAmount] = useState(bidData ? bidData.currentBid + 0.1 : 0);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // State for the "MyNFT" collection
  const [myNfts, setMyNfts] = useState([]);

  // Handling input changes
  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleNftNameChange = (e) => {
    setNftName(e.target.value);
  };

  const handleNftPriceChange = (e) => {
    setNftPrice(e.target.value);
  };

  // Handling form submission (purchase)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentOption || !paymentDetails || !nftName || !nftPrice) {
      setError('Please fill in all fields before proceeding');
      return;
    }

    setError('');
    alert('Payment details are valid. Proceeding with your purchase!');

    // Add the purchased NFT to "MyNFT" collection
    const nft = {
      id: Math.random().toString(36).substr(2, 9), // Random NFT ID
      name: nftName,
      price: nftPrice,
      paymentOption,
    };

    // Adding NFT to "MyNFT" collection after purchase
    setMyNfts((prev) => [...prev, nft]);
    navigate("/my-nft"); // Navigate to the MyNFT page
  };

  const isFormValid = paymentOption && paymentDetails && nftName && nftPrice;

  // Bid timer functionality
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Handle bid confirmation
  const handleBid = () => {
    if (bidAmount <= bidData.currentBid) {
      alert("Your bid must be higher than the current bid!");
      return;
    }
    setShowPaymentPopup(true);
  };

  // Handle payment method selection
  const handlePayment = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Finalize payment
  const completePayment = () => {
    alert(`Payment successful via ${selectedPaymentMethod}! Your bid: ${bidAmount} ETH`);
    setShowPaymentPopup(false);
    setSelectedPaymentMethod(null);
    navigate("/active-bids");
  };

  if (!bidData) {
    return <h2>Bid item not found!</h2>;
  }

  return (
    <div>
      <div className="bid-details-container">
        <h1>📢 Place Your Bid</h1>
        <div className="bid-card">
          <img src={bidData.image} alt={bidData.name} className="bid-image" />
          <h2>{bidData.name}</h2>
          <p>Current Bid: {bidData.currentBid.toFixed(2)} ETH</p>
          <p>Time Left: {timeLeft > 0 ? `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s` : "Auction Ended"}</p>
          <input
            type="number"
            step="0.01"
            min={bidData.currentBid + 0.1}
            value={bidAmount}
            onChange={(e) => setBidAmount(parseFloat(e.target.value))}
            className="bid-input"
          />
          <button className="confirm-bid-button" onClick={handleBid} disabled={timeLeft <= 0}>
            Confirm Bid
          </button>
        </div>
      </div>

      {showPaymentPopup && (
        <div className="payment-popup">
          <h2>Select Payment Method</h2>
          <button onClick={() => handlePayment("Credit Card")}>Credit Card</button>
          <button onClick={() => handlePayment("PayPal")}>PayPal</button>
          <button onClick={() => handlePayment("Crypto Wallet")}>Crypto Wallet</button>
          <button onClick={() => setShowPaymentPopup(false)}>Back</button>
        </div>
      )}

      {selectedPaymentMethod && (
        <div className="payment-details-popup">
          <h2>Enter {selectedPaymentMethod} Details</h2>
          {selectedPaymentMethod === "Credit Card" && (
            <>
              <input type="text" name="cardNumber" placeholder="Card Number" onChange={handlePaymentDetailsChange} />
              <input type="text" name="expiry" placeholder="Expiry Date (MM/YY)" onChange={handlePaymentDetailsChange} />
              <input type="text" name="cvv" placeholder="CVV" onChange={handlePaymentDetailsChange} />
            </>
          )}
          {selectedPaymentMethod === "PayPal" && (
            <input type="email" name="paypalEmail" placeholder="PayPal Email" onChange={handlePaymentDetailsChange} />
          )}
          {selectedPaymentMethod === "Crypto Wallet" && (
            <input type="text" name="cryptoAddress" placeholder="Crypto Wallet Address" onChange={handlePaymentDetailsChange} />
          )}
          <button onClick={completePayment}>Pay Now</button>
          <button onClick={() => setSelectedPaymentMethod(null)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default BidDetails;
