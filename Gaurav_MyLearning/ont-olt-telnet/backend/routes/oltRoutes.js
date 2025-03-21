const express = require("express");
const { connectOLT } = require("../controllers/oltController");

const router = express.Router();

// API to connect OLT via Telnet (opens MobaXterm)
router.post("/connectOLT", connectOLT);

module.exports = router;
