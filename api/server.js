"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const addRequestId = require('express-request-id')({setHeader: false});
const morgan = require('morgan');
require("dotenv").config(); // ENV config

const metricsRouter = require("./routes/metrics");

function createServer() {
	const app = express();
    app.use(addRequestId);
    morgan.token('id', (req) => req.id.split('-')[0]);

    app.use(morgan(
    "[:date[iso] #:id] Started :method :url for :remote-addr",
    {immediate: true}));

    app.use(morgan("[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms:"));

	app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/metrics", metricsRouter);

    app.get(
        "/",
        async (req, res) => {
            return res.status(200).send({
                message: "Welcome to PerfAnalytics App",
            });
        }
    );

	return app;
}

module.exports = createServer;