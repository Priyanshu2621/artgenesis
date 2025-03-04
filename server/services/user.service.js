const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user
const registerUser = async (username, email, password) => {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error("User already exists");

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error("Error registering user: " + error.message);
    }
};

// User login
const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid credentials");

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return { user, token };
    } catch (error) {
        throw new Error("Error logging in: " + error.message);
    }
};

// Get user profile
const getUserProfile = async (userId) => {
    try {
        const user = await User.findById(userId).select("-password");
        if (!user) throw new Error("User not found");
        return user;
    } catch (error) {
        throw new Error("Error fetching user profile: " + error.message);
    }
};

module.exports = { registerUser, loginUser, getUserProfile };
