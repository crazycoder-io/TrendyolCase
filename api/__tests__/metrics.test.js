"use strict";

const request = require("supertest");
const createServer = require("../server");
const { SAMPLE_DATA_1 } = require("../utils/sampleData");
const { createDB, destroyDatabase } = require("../config/db");

jest.setTimeout(3 * 15 * 1000);

let app;

beforeAll(async () => {
    await createDB();
    app = await createServer();
});

afterAll(async () => {
    await destroyDatabase();
});

describe("POST /metrics", () => {
    it("/collect-metrics response should be OK", (done) => {
        request(app)
            .post("/metrics/collect-metrics")
            .send(SAMPLE_DATA_1)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body.message).toBe("OK!");
                done();
            });
    });

    it("/report-metrics response should be expected data", (done) => {
        request(app)
            .post("/metrics/report-metrics")
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(typeof response.body.report).toBe("object");
                expect(response.body.report.length).toBeGreaterThanOrEqual(1);
                done();
            });
    });

    it("/report-metrics response should contain data with expected fields", (done) => {
        request(app)
            .post("/metrics/report-metrics")
            .then((response) => {
                const fakeData = response.body.report[0];
                expect(typeof fakeData).toBe("object");
                expect(fakeData).toHaveProperty("ttfb");
                expect(fakeData).toHaveProperty("fcp");
                expect(fakeData).toHaveProperty("windowLoad");
                expect(fakeData).toHaveProperty("domLoad");
                done();
            });
    });
});
