const express = require("express");
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
l;
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const conn_str =
  "mongodb+srv://noahsolomon2003:CHjPvZvkJXv0XloN@web.kxob4fa.mongodb.net/?retryWrites=true&w=majority&appName=web";
mongoose.set("strictQuery", false);
mongoose
  .connect(conn_str)
  .then(() => {
    console.log(`MongoDB Connection Succeeded...`);
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log(`Error in DB Connection ${err}`);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
