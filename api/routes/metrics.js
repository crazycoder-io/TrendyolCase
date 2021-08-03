"use strict";

const express = require("express");
const router = express.Router();

const MetricModel = require("../models/Metrics");

router
	.post("/report-metrics", async (req, res) => {
        const { url, date } = req.body;

        try {
            const tenant = await MetricModel.findOne({ tenant_url: url });

            res.json({ data: [] });
        } catch (error) {
            res.json({ error: { error_message: error.message } });
        }
	})
	.post("/collect-metrics", (req, res) => {
        res.json({ message: "OK!" });
	});


module.exports = router;
