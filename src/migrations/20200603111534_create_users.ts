import * as Knex from "knex";

export async function up(knex: Knex): Promise<unknown> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<unknown> {
  return knex.schema.dropTable("users");
}
