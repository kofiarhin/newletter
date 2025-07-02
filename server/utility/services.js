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

// generate verify email
const generateVerifyEmailHTML = ({ name, verifyUrl, brand = "Dev Kofi" }) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h2 style="color: #00a651;">Welcome to ${brand}, ${name}!</h2>
      <p>Thanks for signing up for our newsletter. Please confirm your email address to activate your subscription.</p>
      <p style="margin: 20px 0;">
        <a href="${verifyUrl}" 
           style="background-color: #00a651; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px;">
          Confirm Email
        </a>
      </p>
      <p>If the button above doesn’t work, copy and paste this link into your browser:</p>
      <p style="word-break: break-all;">${verifyUrl}</p>
      <p style="font-size: 0.9rem; color: #666;">If you didn’t sign up, no worries — you can safely ignore this email.</p>
      <p>– The ${brand} Team</p>
    </div>
  `.trim();
};

module.exports = {
  createUser,
  generateVerifyEmailHTML,
};
