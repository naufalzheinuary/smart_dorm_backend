const express = require("express");
const router = express.Router();

const {
    pingDevice,
    unlockDoor,
    receiveAccessLog
} = require("../controllers/device.controller");

router.get("/ping", pingDevice);

router.post("/unlock", unlockDoor);

router.post("/access", receiveAccessLog);

module.exports = router;