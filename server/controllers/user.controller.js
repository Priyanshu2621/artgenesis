const userService = require("../services/user.service");

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await userService.registerUser(username, email, password);
        res.status(201).json({ message: "User registered successfully!", user: newUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await userService.loginUser(email, password);
        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUserProfile = async (req, res) => {
    try {
        const user = await userService.getUserProfile(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser, getUserProfile };
