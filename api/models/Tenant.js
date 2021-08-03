"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tenant = new Schema(
    {
        tenant_url: String,
        metric_key: String
    }
);

module.exports = mongoose.model("Tenant", Tenant);