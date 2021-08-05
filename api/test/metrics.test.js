const request = require("supertest");
const mongoose = require("mongoose");
const createServer = require("../server");
const { SAMPLE_DATA_1 } = require("../utils/sampleData");

beforeAll(async (done) => {
    const URL = process.env.TEST_DB_STRING;

    await mongoose.connect(URL,
        {useNewUrlParser: true, useUnifiedTopology: true},
    );
});

afterAll(async (done) => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();

    done();
});

const app = createServer();

describe("POST /metrics", function() {

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