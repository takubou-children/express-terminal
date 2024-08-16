import { Pool } from "pg";

export const pool = new Pool({
  user: "example",
  host: "localhost",
  database: "example",
  password: "password",
  port: 54320,
});
