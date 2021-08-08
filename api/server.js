"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const addRequestId = require("express-request-id")({ setHeader: false });
require("dotenv").config(); // ENV config

const metricsRouter = require("./routes/metrics");
const { requestHandleLogger, responseHandleLogger } = require("./utils/logger");

function createServer() {
    const app = express();
    app.use(addRequestId);

    app.use(requestHandleLogger);
    app.use(responseHandleLogger);

    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/metrics", metricsRouter);

    app.get(
        "/",
        async (req, res) => res.status(200).send({
            message: "Welcome to PerfAnalytics App",
        }),
    );

    return app;
}

module.exports = createServer;
