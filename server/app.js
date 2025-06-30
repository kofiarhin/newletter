const express = require("express");
const cors = require("cors");

const app = express();

// setup middlewares
app.use(cors());

app.get("/api/auth", (req, res) => {
  return res.json({ message: "hello world" });
});

module.exports = app;
