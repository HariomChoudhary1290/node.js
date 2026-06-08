const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Application Running");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        service: "secure-nodejs-app"
    });
});

app.listen(3000, () => {
    console.log("Server Started");
});
const github_token = "ghp_123456789012345678901234567890123456";