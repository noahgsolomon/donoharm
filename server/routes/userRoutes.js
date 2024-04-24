const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const sessionToken = req.headers.authorization?.split(" ")[1];
    if (!sessionToken) {
      return res.status(401).json({ isLoggedIn: false });
    }

    const user = await User.findOne({ sessionToken });
    if (!user) {
      return res.status(401).json({ isLoggedIn: false });
    }

    res.json({ isLoggedIn: true, username: user.username, pfp: user.pfp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { user: username } = req.query;

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await Post.deleteMany({ userId: user._id });

    await User.deleteOne({ username });

    res.json({ message: "User and associated posts deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
