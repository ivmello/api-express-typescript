import path from "path";
import * as dotenv from "dotenv";
dotenv.config();

module.exports = {
  client: process.env.DATABASE_TYPE,
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "migrations"),
  },
  useNullAsDefault: true,
};
