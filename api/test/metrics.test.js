const request = require("supertest");
const mongoose = require("mongoose");
const createServer = require("../server");
const { SAMPLE_DATA_1 } = require("../utils/sampleData");

jest.setTimeout(3 * 60 * 1000);

let app;

describe("POST /metrics", function() {

    beforeAll(async (done) => {
        app = createServer();
        const URL = process.env.TEST_DB_STRING || "mongodb://localhost:27017/perfanalytics_test";

        try {
            await mongoose.connect(URL,
                {useNewUrlParser: true, useUnifiedTopology: true},
            );

            return;
        } catch (error) {
            console.log(error);
        }
    });

    afterAll(async (done) => {
        try {
            await mongoose.connection.db.dropDatabase();
            await mongoose.connection.close();
        } catch (error) {
            console.log(error);
        }

        done();
    });

    it("/collect-metrics response should be OK", (done) => {
        request(app)
        .post("/metrics/collect-metrics")
        .send(SAMPLE_DATA_1)
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe("OK!");
        });
        done();
    });

    it("/report-metrics response should be expected data", (done) => {
        request(app)
        .post("/metrics/report-metrics")
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.data).toBe([]);
        });
        done();
    });
});