"use strict";

const express = require("express");

const router = express.Router();

const MetricController = require("../controllers/metrics.controller");

router
    .post("/report-metrics", MetricController.reportMetrics)
    .post("/collect-metrics", MetricController.collectMetric);

module.exports = router;
