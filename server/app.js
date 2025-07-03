const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");
const path = require("path");
const downloadRoutes = require("./routes/downloadRoutes");

const app = express();

const staticPath = path.join(__dirname, "public");
// setup middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(staticPath));

// routes
app.get("/", (req, res) => {
  return res.json({ message: "welcome to newsletter" });
});

app.get("/api/auth", (req, res) => {
  return res.json({ message: "hello world" });
});

app.use("/api/email", emailRoutes);
app.use("/api/subscribers", subscriberRoutes);

// download route
app.use("/api/download", downloadRoutes);

module.exports = app;
