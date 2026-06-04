const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Application Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});