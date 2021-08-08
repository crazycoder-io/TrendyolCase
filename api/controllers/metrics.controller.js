const {
    createMetric,
    getMetricsBetweenSpecificDates,
    getMetricsByLast30Mins,
} = require("../services/metrics.services");

module.exports = {
    reportMetrics: async (req, res) => {
        const { startDate, endDate } = req.body;
        try {
            let metrics = [];
            if (startDate && endDate) {
                // Get specific dates
                metrics = await getMetricsBetweenSpecificDates(startDate, endDate);
            } else {
                // Get last 30mins data
                metrics = await getMetricsByLast30Mins();
            }

            res.json({ report: metrics });
        } catch (error) {
            res.json({ error: { error_message: error.message } });
        }
    },
    collectMetric: async (req, res) => {
        const data = req.body;

        try {
            const respond = await createMetric(typeof data === "string" ? JSON.parse(data) : data);
            if (respond) {
                res.json({ message: "OK!" });
            } else {
                res.json({ error: { error_message: "An unexpected error was encountered!" } });
            }
        } catch (error) {
            res.json({ error: { error_message: error.message } });
        }
    },
};
