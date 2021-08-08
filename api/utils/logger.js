"use strict";

const chalk = require("chalk");
const morgan = require("morgan");

morgan.token("id", (req) => req.id.split("-")[0]);

module.exports = {
    requestHandleLogger: morgan(
        chalk.hex("#fffa65").bold("📩 --> [:date[iso] #:id] Started :method :url for :remote-addr"),
        { immediate: true },
    ),
    responseHandleLogger: morgan(chalk.hex("#2ed573").bold("✅ --> [:date[iso] #:id] Completed :status :res[content-length] in :response-time ms:")),
};
