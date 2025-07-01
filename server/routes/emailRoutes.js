const { Router } = require("express");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utility/sendEmail");

const router = Router();

router.get("/", (req, res) => {
  return res.json({ message: "get emails" });
});
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(404);
      throw new Error("please add an email address");
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    const verifyUrl = `http://localhost:5000/api/verify-email/${token}`;
    const emailOptions = {
      to: email,
      subject: "Vefify your email address",
      text: `
Thanks for subscribing to our newsletter!

Please verify your email address by clicking the link below:

${verifyUrl}

If you didn’t request this, you can safely ignore this message.

- The Newsletter Team
    `,
    };

    await sendEmail(emailOptions);

    return res.json({
      message: "check your email to verify account",
      verifyUrl,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/verify-email/:token", async (req, res) => {
  try {
    const { token } = req.params;
    if (!token) {
      throw new Error("unauthorized access");
    }

    // get token details
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // do some db action
    return res.json({ message: "verify token" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
