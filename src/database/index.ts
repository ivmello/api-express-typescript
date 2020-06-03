import knex from "knex";

export default knex({
  client: process.env.DATABASE_TYPE,
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  useNullAsDefault: true,
});
