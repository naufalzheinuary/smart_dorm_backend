const db = require("../config/firebase");

const pingDevice = (req, res) => {
    res.json({
        success: true,
        message: "Device connected successfully"
    });
};

const unlockDoor = (req, res) => {
    res.json({
        success: true,
        message: "Door unlocked successfully"
    });
};

const receiveAccessLog = async (req, res) => {

    try {

        const data = {

            ...req.body,
            timestamp: new Date()
        };

        await db.collection("access_logs").add(data);

        console.log("ACCESS LOG SAVED");

        res.json({
            success: true,
            message: "Access log saved to Firebase",
            data
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed save access log"
        });
    }
};

module.exports = {
    pingDevice,
    unlockDoor,
    receiveAccessLog
};