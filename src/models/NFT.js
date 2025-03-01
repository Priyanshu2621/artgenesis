const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
  title: String,
  image: String,
  floorPrice: String,
  totalVolume: String,
});

module.exports = mongoose.model("NFT", NFTSchema);
