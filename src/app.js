const express = require("express");
const cors = require("cors");

const deviceRoutes = require("./routes/device.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Smart Dorm Backend Running"
    });
});

app.use("/api/device", deviceRoutes);

module.exports = app;