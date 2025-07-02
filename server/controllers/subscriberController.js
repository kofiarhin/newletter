const User = require("../models/userModel");
const sendEmail = require("../utility/sendEmail");

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
    console.log({ user });

    // send email
    const emailOptions = {
      to: email,
      subject: "Welcome and confirm email",
      text: "some text to confirm email",
    };

    await sendEmail(emailOptions);

    return res.json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSubscribers,
  createSubscribers,
};
