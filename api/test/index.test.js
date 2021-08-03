const request = require("supertest");
const mongoose = require("mongoose");
const createServer = require("../server");

const app = createServer();

describe("GET /", function() {

    beforeEach((done) => {
        mongoose.connect(
            process.env.TEST_DB_STRING || "mongodb://127.0.0.1:27017/perfanalytics_tests",
            {useNewUrlParser: true, useUnifiedTopology: true},
            () => done()
        );
    });

    afterEach((done) => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });
    
    it("it should has status code 200", (done) => {
        request(app)
        .get('/')
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe("Welcome to PerfAnalytics App");
        });
        done();
    });
});