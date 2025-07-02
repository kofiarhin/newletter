const { Router } = require("express");
const {
  getSubscribers,
  createSubscribers,
} = require("../controllers/subscriberController");

const router = Router();

router.get("/", getSubscribers);
router.post("/", createSubscribers);

module.exports = router;
