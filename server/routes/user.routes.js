const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require("../controllers/user.controller");
const { authenticateUser } = require("../middlewares/auth.middleware");

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// Get User Profile (Protected Route)
router.get("/profile", authenticateUser, getUserProfile);

// Get all users (For admin/debugging)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
