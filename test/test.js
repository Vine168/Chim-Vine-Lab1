const request = require("supertest");
const app = require("../app");
const { expect } = require("chai");

describe("GET /", () => {
  it("should return Hello, CI/CD! Workflow Test", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello, CI/CD! Workflow Test");
  });
});
