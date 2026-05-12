const express = require("express");
const router = express.Router();

const {
    pingDevice,
    unlockDoor
} = require("../controllers/device.controller");

router.get("/ping", pingDevice);

router.post("/unlock", unlockDoor);

module.exports = router;