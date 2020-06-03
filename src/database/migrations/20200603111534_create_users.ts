import * as Knex from "knex";

export async function up(knex: Knex): Promise<unknown> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.boolean("status").defaultTo(true);
    table.boolean("deleted").defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<unknown> {
  return knex.schema.dropTable("users");
}
