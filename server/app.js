const express = require("express");

const app = express();

app.get("/api/auth", (req, res) => {
  return res.json({ message: "hello world" });
});

module.exports = app;
