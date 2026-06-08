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
const AWS_SECRET_ACCESS_KEY = "AKIA123456789EXAMPLE";