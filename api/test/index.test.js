const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");


describe("GET /", function() {
    afterAll(async () => {
        await mongoose.disconnect();
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