const app = require("./app"); // Import Express App
const connectDB = require("./db/db"); // Import DB Connection

const PORT = process.env.PORT || 5000;

// Connect to MongoDB first, then start the server
connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch((err) => {
    console.error("❌ Server Failed to Start:", err);
});
