"use strict";

const express = require("express");
const router = express.Router();

const TenantModel = require("../models/Tenant");
const MetricModel = require("../models/Metrics");

router
	.post("/report-metrics", async (req, res) => {
        const { url, metric_key } = req.body;

        try {
            const tenant = await TenantModel.findOne({ tenant_url: url });

            res.json(tenant)
        } catch (error) {
            res.json({ error: { message: error.message } });
        }
	})
	.post("/collect-metrics", (req, res) => {
		res.send("collect");
	});


module.exports = router;
