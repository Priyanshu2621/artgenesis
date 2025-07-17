import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Wallet.css";

const Wallet = () => {
  const navigate = useNavigate();

  // Load balance from local storage or set default
  const [balance, setBalance] = useState(() => {
    return parseInt(localStorage.getItem("walletBalance")) || 5000;
  });

  // Load transactions from local storage or set default
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("walletTransactions")) || [
      { id: 1, type: "Deposit", amount: 2000, date: "2025-02-28" },
      { id: 2, type: "Withdraw", amount: 1000, date: "2025-02-27" },
      { id: 3, type: "Deposit", amount: 3000, date: "2025-02-25" },
    ];
  });

  // Save balance and transactions to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("walletBalance", balance);
    localStorage.setItem("walletTransactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const handleTransaction = (type) => {
    const amount = parseInt(prompt(`Enter amount to ${type.toLowerCase()}:`), 10);
    if (!amount || amount <= 0) return alert("Invalid amount!");

    if (type === "Withdraw" && amount > balance) {
      return alert("Insufficient balance!");
    }

    const newBalance = type === "Deposit" ? balance + amount : balance - amount;
    setBalance(newBalance);

    const newTransaction = {
      id: transactions.length + 1,
      type,
      amount,
      date: new Date().toISOString().split("T")[0], // Current Date
    };
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="wallet-container">
      <h1>My Wallet</h1>
      <div className="wallet-balance">
        <h2>Balance: ${balance}</h2>
      </div>
      <div className="wallet-actions">
        <button className="deposit-btn" onClick={() => handleTransaction("Deposit")}>
          Deposit
        </button>
        <button className="withdraw-btn" onClick={() => handleTransaction("Withdraw")}>
          Withdraw
        </button>
      </div>
      <div className="transaction-history">
        <h2>Transaction History</h2>
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id} className={tx.type.toLowerCase()}>
              {tx.date} - {tx.type}: ${tx.amount}
            </li>
          ))}
        </ul>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Wallet;