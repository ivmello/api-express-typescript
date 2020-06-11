import * as dotenv from "dotenv";
import knex from "knex";
import path from "path";

dotenv.config();
let knexConfig;

if (process.env.NODE_ENV === "test") {
  knexConfig = {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "db", "test.db"),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
  };
} else {
  knexConfig = {
    client: process.env.DATABASE_TYPE,
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    useNullAsDefault: true,
  };
}

export default knex(knexConfig);
