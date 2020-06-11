import req from "supertest";
import { matchers } from "jest-json-schema";
import db from "../../database";
import app from "../../app";

expect.extend(matchers);

beforeAll(async () => {
  await db.migrate.latest();
  await db.seed.run();
});

afterAll(async () => {
  db.destroy();
});

test("[GET] /", async () => {
  const res = await req(app).get("/");

  const schema = {
    properties: {
      data: { type: "string" },
    },
    required: ["data"],
  };
  expect(res.body).toMatchSchema(schema);
});
