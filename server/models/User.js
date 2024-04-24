const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  sessionToken: {
    type: String,
    default: null,
  },
  pfp: {
    type: String,
    default: () => {
      const randomNumber = Math.floor(Math.random() * 18) + 1;
      return `/pfp-${randomNumber}.webp`;
    },
  },
});

module.exports = User = mongoose.model("user", UserSchema);
