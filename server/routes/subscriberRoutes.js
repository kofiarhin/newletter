const { Router } = require("express");
const {
  getSubscribers,
  createSubscribers,
  verifySubscriber,
} = require("../controllers/subscriberController");

const router = Router();

router.get("/", getSubscribers);
router.get("/verify", verifySubscriber);
router.post("/", createSubscribers);

module.exports = router;
