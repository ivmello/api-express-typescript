import * as Knex from "knex";

export async function up(knex: Knex): Promise<unknown> {
  return knex.schema.createTable("companies", (table) => {
    table.increments("id").primary();

    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("id").inTable("users");

    table.string("name").notNullable();
    table.string("description");
    table.boolean("status").notNullable().defaultTo(true);
    table.boolean("deleted").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<unknown> {
  return knex.schema.dropTable("companies");
}
