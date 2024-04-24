const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.post("/", async (req, res) => {
  try {
    const { text, image } = req.body;
    const sessionToken = req.headers.authorization;

    const user = await User.findOne({ sessionToken });

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const newPost = new Post({
      userId: user._id,
      text,
      image,
    });

    await newPost.save();

    res.json({ msg: "Post created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(25)
      .populate("userId", "username")
      .exec();

    const postsWithUsernames = await Promise.all(
      posts.map(async (post) => {
        const user = await User.findById(post.userId);
        return {
          text: post.text,
          image: post.image,
          username: post.userId.username,
        };
      })
    );

    res.json(postsWithUsernames);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
