const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const router = require("./routes");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

const start = async() => {
    try {
        await mongoose.connect(DB_STICKERS);
        console.log("MongoDB connected");
        app.listen(3000, () => {
            console.log("Server running. Use our API on port: 3000")
          })
    } catch {
        console.log("MongoDB connection error");
    }
}
const {DB_STICKERS} = process.env;
start();