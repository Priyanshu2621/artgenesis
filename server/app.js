const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the NFT Marketplace Backend! 🚀");
});

// API Routes
app.use("/api/users", userRoutes);

// 404 Error Handling Middleware
app.use((req, res) => {
    res.status(404).json({ message: "❌ Route Not Found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("🔥 Server Error:", err.message);
    res.status(500).json({ message: "🔥 Internal Server Error", error: err.message });
});

module.exports = app;
