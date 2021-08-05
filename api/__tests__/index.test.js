const request = require("supertest");
const createServer = require("../server");

const app = createServer();

jest.setTimeout(30000);

describe("GET /", () => {
    it("it should has status code 200", (done) => {
        request(app)
            .get("/")
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body.message).toBe("Welcome to PerfAnalytics App");
            });
        done();
    });
});
