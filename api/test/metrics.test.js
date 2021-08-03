const request = require("supertest");
const mongoose = require("mongoose");
const createServer = require("../server");

beforeEach((done) => {
	mongoose.connect(
		process.env.TEST_DB_STRING || "mongodb://127.0.0.1:27017/perfanalytics_tests",
		{useNewUrlParser: true, useUnifiedTopology: true},
		() => done()
	);
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	});
})

const app = createServer();

describe("POST /metrics", function() {    
    it("/collect-metrics response should be OK", (done) => {
        request(app)
        .post("/metrics/collect-metrics")
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