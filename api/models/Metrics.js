"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const Metric = new Schema(
    {
        URL: String,
        dom_load: Number,
        fcp: Number,
        ttfb: Number,
        window_load: Number,
        resources: Array,
        UserAgent: String,
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
);

module.exports = mongoose.model("Metric", Metric);
