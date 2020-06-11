import req from "supertest";
import { matchers } from "jest-json-schema";
import db from "../../database";
import app from "../../app";

expect.extend(matchers);

beforeAll(async () => {
  await db.migrate.latest();

  await db("users").insert({
    name: "Usuario teste",
    email: "teste@teste.com",
    password: "10203040",
  });

  await db("companies").insert({
    user_id: 1,
    name: "empresa 1",
    image: "image",
    description: "empresa 1 descricao",
  });
});

afterAll(async () => {
  db.destroy();
});

test("[GET] /companies", async () => {
  const result = await req(app).get("/companies");
  const schema = {
    type: "array",
    items: {
      type: "object",
      properties: {
        id: { type: "number" },
        user_id: { type: "number" },
        name: { type: "string" },
        image: { type: "string" },
        description: { type: "string" },
        status: { type: "number", enum: [0, 1] },
        deleted: { type: "number", enum: [0, 1] },
        created_at: { type: "string" },
        updated_at: { type: "string" },
      },
      required: [
        "id",
        "user_id",
        "name",
        "description",
        "status",
        "deleted",
        "created_at",
        "updated_at",
      ],
    },
  };
  expect(result.body).toMatchSchema(schema);
});

test("[POST] /companies", async () => {
  const body = {
    name: "Empresa",
    description: "descricao",
  };
  const result = await req(app).post("/companies").send(body);

  const schema = {
    type: "object",
    properties: {
      success: { type: "boolean" },
      error: { type: "object" },
    },
  };
  expect(result).toMatchSchema(schema);
});
