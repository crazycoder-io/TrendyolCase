"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const addRequestId = require('express-request-id')({setHeader: false});
const morgan = require('morgan');
require("dotenv").config(); // ENV config

const app = express();
const PORT = process.env.PORT || 5000;

app.use(addRequestId)


morgan.token('id', (req) => req.id.split('-')[0])

app.use(morgan(
  "[:date[iso] #:id] Started :method :url for :remote-addr",
  {immediate: true}));

app.use(morgan("[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms:"));

const metricsRouter = require("./routes/metrics");

// Body parsing Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
require("./config/db")();

app.use("/metrics", metricsRouter);
app.get(
	"/",
	async (req, res) => {
		return res.status(200).send({
			message: "Welcome to PerfAnalytics App",
		});
	}
);

app.listen(PORT, () => {
	console.log(`Connected successfully on port ${PORT}`);
});

module.exports = app;
