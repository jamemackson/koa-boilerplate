require('dotenv').config();
require('@babel/register')();
require('@babel/polyfill');

const { server, logger } = require('../src/server.js');
const request = require('supertest');

// close the server after each test
// afterEach(() => {
//   server.close();
// });

describe("server", () => {
  test("should start and respond", async () => {
    const response = await request(server.callback()).get("/");
    expect(response).toBeDefined();
  });

  test("should respond to a health-check", async () => {
    const response = await request(server.callback()).get("/health-check");
    expect(response).toBeDefined();
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({ healthy: true });
  });
});
