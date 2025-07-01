const User = require("../models/userModel");

const createUser = async (userData) => {
  try {
    const { name, email } = userData;

    // Basic validation
    if (!name || !email) {
      return { success: false, error: "Name and email are required." };
    }

    // Optional: simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Invalid email format." };
    }

    // Optional: check for duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, error: "Email already in use." };
    }

    const user = await User.create(userData);
    return { success: true, data: user };
  } catch (error) {
    console.error("Create User Error:", error.message);
    return { success: false, error: error.message };
  }
};

module.exports = {
  createUser,
};
