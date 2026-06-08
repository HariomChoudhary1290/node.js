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

// Semgrep Test Route (Intentionally Insecure)
app.get("/eval", (req, res) => {
const userInput = req.query.input;
eval(userInput);
res.send("Executed");
});

app.listen(3000, () => {
console.log("Server Started");
});
