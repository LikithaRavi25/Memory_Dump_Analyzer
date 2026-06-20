const express = require("express");

const {
  getCommandLines
} = require("../controllers/cmdlineControllers");

const router = express.Router();

router.get(
  "/cmdline/:fileName",
  getCommandLines
);

module.exports = router;