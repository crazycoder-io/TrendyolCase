"use strict";

const express = require("express");

const router = express.Router();

const MetricModel = require("../models/Metrics");

router
    .post("/report-metrics", async (req, res) => {
        try {
            const tenant = await MetricModel.find();

            res.json({ report: [] });
        } catch (error) {
            res.json({ error: { error_message: error.message } });
        }
    })
    .post("/collect-metrics", async (req, res) => {
        const data = req.body;

        try {
            await MetricModel.create(data);
            res.json({ message: "OK!" });
        } catch (error) {
            res.json({ error: { error_message: error.message } });
        }
    });

module.exports = router;
