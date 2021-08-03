"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Metric = new Schema(
    {
        tenant_url: String,
        dom_load: Number,
        fcp: Number,
        ttfb: Number,
        window_load: Number,
        resources: Array
    }
);

module.exports = mongoose.model("Metric", Metric);