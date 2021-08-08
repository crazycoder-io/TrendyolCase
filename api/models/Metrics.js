"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const Metric = new Schema(
    {
        URL: String,
        domLoad: Number,
        fcp: Number,
        ttfb: Number,
        windowLoad: Number,
        resources: Array,
        UserAgent: String,
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
);

module.exports = mongoose.model("Metric", Metric);
