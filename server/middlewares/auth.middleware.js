const jwt = require("jsonwebtoken");

// Middleware to authenticate user
const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer "

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach user data to request
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid Token" });
    }
};


module.exports = { authenticateUser, authenticateNFT };
