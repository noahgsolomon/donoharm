const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const crypto = require("crypto");
const User = require("../models/User");

// Signup endpoint
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.json({ msg: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const sessionToken = crypto.randomBytes(64).toString("hex");

    user.sessionToken = sessionToken;
    await user.save();

    res.json({ sessionToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
