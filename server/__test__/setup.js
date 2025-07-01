const mongoose = require("mongoose");
const User = require("../models/userModel");
require("dotenv").config();

beforeAll(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log("Connected to database:", conn.connection.host);
    await User.deleteMany(); // Optional: clear users before test starts
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});
