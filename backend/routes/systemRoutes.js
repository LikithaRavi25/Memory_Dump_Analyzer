const express = require("express");

const {
  getSystemInfo
} = require("../controllers/systemControllers");

const router = express.Router();

router.get(
  "/system/:fileName",
  getSystemInfo
);

module.exports = router;