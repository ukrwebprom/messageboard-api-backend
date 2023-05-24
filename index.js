const express = require("express");
const cors = require("cors");
const router = require("./routes");

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

app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000")
  })