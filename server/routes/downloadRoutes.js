const { Router } = require("express");
const path = require("path");
const { getDownload } = require("../controllers/downloadController");

const router = Router();

router.get("/", getDownload);

module.exports = router;
