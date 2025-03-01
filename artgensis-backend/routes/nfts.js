const express = require("express");
const NFT = require("../../src/models/NFT");

const router = express.Router();

router.get("/", async (req, res) => {
  const nfts = await NFT.find();
  res.json(nfts);
});

module.exports = router;
