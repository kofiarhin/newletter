const User = require("../models/userModel");
const sendEmail = require("../utility/sendEmail");
const { BASE_URL } = require("../constants/constants");
const { generateVerifyEmailHTML } = require("../utility/services");
const path = require("path");
// get subscribers
const getSubscribers = async (req, res) => {
  return res.json({ message: "get subscribers" });
};

const createSubscribers = async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!name || !email) {
      res.status(400);
      throw new Error("please fill out all fields");
    }

    // create user
    await User.deleteMany();
    const user = await User.create({ name, email });

    // send email
    const verifyUrl = `${BASE_URL}/api/subscribers/verify?email=${email}`;
    const html = generateVerifyEmailHTML({ name, verifyUrl });
    const emailOptions = {
      to: email,
      subject: "Welcome and confirm email",
      html,
    };

    await sendEmail(emailOptions);

    return res.json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const verifySubscriber = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      throw new Error("please provide a valid email address");
    }

    // check if user exist
    const exist = await User.findOne({ email });

    if (!exist) {
      throw new Error("user not found");
    }

    // update user
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: { verified: true } },
      { new: true }
    );

    // send file to client
    const filePath = path.join(__dirname, "..", "public", "verified.html");
    console.log(filePath);
    return res.sendFile(filePath);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getSubscribers,
  createSubscribers,
  verifySubscriber,
};
