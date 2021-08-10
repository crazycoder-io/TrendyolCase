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

    it("/report-metrics response should be expected data with specific correct dates", (done) => {
        request(app)
            .post("/metrics/report-metrics")
            .send({ startDate: "2021-08-07T19:49:39.193Z", endDate: new Date().toISOString() })
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

    it("/report-metrics response should be undefined with out of range dates", (done) => {
        request(app)
            .post("/metrics/report-metrics")
            .send({ startDate: "2021-06-09T19:49:39.193Z", endDate: "2021-06-10T19:49:39.193Z" })
            .then((response) => {
                const fakeData = response.body.report[0];

                expect(fakeData).toBeUndefined();
                done();
            });
    });

    it("/report-metrics response should be error with incorrect params", (done) => {
        request(app)
            .post("/metrics/report-metrics")
            .send({ startDate: "error", endDate: "hata" })
            .then((response) => {
                const res = response.body;

                expect(typeof res).toBe("object");
                expect(res).toHaveProperty("error");
                expect(res.error).toHaveProperty("error_message");
                done();
            });
    });
});
