const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 5000;

// Body parsing Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    async (req, res) => {
        return res.status(200).send({
            message: "Hello Test app",
        });
    }
);

app.listen(PORT, () => {
    console.log(`Connected successfully on port ${PORT}`);
});

module.exports = app;
