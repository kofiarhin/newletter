const dotenv = require("dotenv").config();
const app = require("../app");
const request = require("supertest");
const sendEmail = require("../utility/sendEmail");
const { createUser } = require("../utility/services");

describe("app", () => {
  it("passing test", () => {
    expect(1).toBe(1);
  });

  //   testing routes
  it("shhould test home page route", async () => {
    const { body, statusCode } = await request(app).get("/");
    expect(statusCode).toBe(200);
  });

  it("should test email route", async () => {
    const { statusCode, body } = await request(app).get("/api/email");
    expect(statusCode).toBe(200);
  });

  // it("should test post request to subscribe route", async () => {
  //   const { statusCode, body } = await request(app)
  //     .post("/api/email/subscribe")
  //     .send({ email: "davidkraku69@gmail.com" });
  //   console.log(statusCode, body);
  // });

  it("should verify token", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdmlka3Jha3U2OUBnbWFpbC5jb20iLCJpYXQiOjE3NTEzMzc3MTV9.-xFliJy2Fo_jXu8C1f85uEhUXGvtITT2CNdDp-1ADBA";
    const { statusCode, body } = await request(app).get(
      `/api/email/verify-email/${token}`
    );

    expect(statusCode).toBe(200);
  });

  it("should create user successfully", async () => {
    const testUser = {
      name: "test",
      email: "test@gmail.com",
    };
    const { success, data } = await createUser(testUser);
    expect(success).toBeTruthy();
    expect(data).toEqual(
      expect.objectContaining({
        _id: expect.any(Object),
      })
    );
  });

  it("should test for file paths", async () => {
    const { body, statusCode } = await request(app).get("/api/download");
    expect(statusCode).toBe(200);
  });
});
