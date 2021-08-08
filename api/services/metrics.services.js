"use strict";

const MetricModel = require("../models/Metrics");

let metrics = [],
    metric;

module.exports = {
    getMetricsBetweenSpecificDates: async (startDate, endDate) => {
        try {
            metrics = await MetricModel.find(
                {
                    createdAt: { $gte: startDate, $lte: endDate },
                },
            );
        } catch (error) {
            throw new Error(error.message);
        }

        return metrics;
    },

    getMetricsByLast30Mins: async () => {
        try {
            metrics = await MetricModel.find(
                {
                    createdAt: { $gte: new Date(new Date().getTime() - (1000 * 60 * 30)) },
                },
            );
        } catch (error) {
            throw new Error(error.message);
        }

        return metrics;
    },

    createMetric: async (data) => {
        try {
            console.log("Create metric service -> ", data);
            metric = await MetricModel.create(data);
        } catch (error) {
            throw new Error(error.message);
        }

        return metric;
    },
};
