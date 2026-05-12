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

const receiveAccessLog = (req, res) => {

    const data = req.body;

    console.log("Access Log Received:");
    console.log(data);

    res.json({
        success: true,
        message: "Access log received",
        data
    });
};

module.exports = {
    pingDevice,
    unlockDoor,
    receiveAccessLog
};