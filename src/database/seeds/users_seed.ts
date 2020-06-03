import * as Knex from "knex";

export async function seed(knex: Knex): Promise<unknown> {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          id: 1,
          name: "Igor",
          email: "ivmello@gmail.com",
          password: "10203040",
        },
      ]);
    });
}
