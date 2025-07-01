const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

// setup middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.json({ message: "welcome to newsletter" });
});

app.get("/api/auth", (req, res) => {
  return res.json({ message: "hello world" });
});

app.use("/api/email", emailRoutes);

module.exports = app;
