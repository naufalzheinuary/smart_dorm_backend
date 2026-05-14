const admin = require("firebase-admin");
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

        const {

            user_name

        } = req.body;

        // ================= FIND USER UID =================
        const userSnapshot = await db
            .collection("users")
            .where("name", "==", user_name)
            .limit(1)
            .get();

        let uid = null;
        let role = "unknown";

        if (!userSnapshot.empty) {

            uid = userSnapshot.docs[0].id;

            role =
                userSnapshot.docs[0]
                .data()
                .role || "user";

        } else {

            console.log(
                `USER NOT FOUND: ${user_name}`
            );
        }

        // ================= ACCESS LOG DATA =================
        const data = {

            uid,
            role,

            ...req.body,

            timestamp:
                admin.firestore
                .FieldValue
                .serverTimestamp()
        };

        await db
            .collection("access_logs")
            .add(data);

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