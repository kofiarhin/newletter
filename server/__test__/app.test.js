const dotenv = require("dotenv").config();
const app = require("../app");
const request = require("supertest");

describe("app", () => {
  it("passing test", () => {
    expect(1).toBe(1);
  });

  //   testing routes
  it("shhould test home page route", async () => {
    const { body, statusCode } = await request(app).get("/");
    expect(statusCode).toBe(200);
  });
});
