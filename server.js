const express = require("express");
const container = require("./db");

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

// Create User
app.post("/users", async (req, res) => {
    try {
        const { name, role } = req.body;

        const newUser = {
            id: Date.now().toString(),
            name,
            role
        };

        const { resource } = await container.items.create(newUser);

        res.status(201).json(resource);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Users
app.get("/users", async (req, res) => {
    try {
        const querySpec = {
            query: "SELECT * FROM c"
        };

        const { resources } = await container.items
            .query(querySpec)
            .fetchAll();

        res.status(200).json(resources);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server Started");
});