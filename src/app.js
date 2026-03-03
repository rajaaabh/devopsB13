const express = require("express");
const { add, subtract, multiply, divide } = require("./calculator");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok", version: "1.0.0" });
});

app.post("/calculate", (req, res) => {
    const { operation, a, b } = req.body;

    const operations = { add, subtract, multiply, divide };

    if (!operations[operation]) {
        return res.status(400).json({ error: "Opération non supportée" });
    }

    try {
        const result = operations[operation](a, b);
        return res.json({ result, operation });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

module.exports = app;